# Plan d'intégration des Tests Unitaires (Next.js 16 / React 19)

Ce document détaille la stratégie pour intégrer des tests unitaires robustes dans le pipeline de votre portfolio, avec une intégration CI/CD pour valider le code avant le déploiement Docker.

## 1. Choix Technologiques

Pour un projet Next.js avec TypeScript, la stack de test standard et la plus stable est :

*   **Jest**: Le runner de tests (standard de l'industrie).
*   **React Testing Library (RTL)**: Pour tester les composants React de manière centrée sur l'utilisateur (tester le DOM rendu plutôt que les props internes).
*   **Jest DOM**: Pour des assertions expressives (ex: `.toBeInTheDocument()`).

> **Note React 19 & Next.js 16** : Ces versions étant très récentes, nous utiliserons la configuration native `next/jest` qui gère automatiquement la transpilation du TypeScript et du JSX moderne.

## 2. Installation des dépendances

Nous devons installer les paquets suivants en tant que dépendances de développement :

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom ts-node
```

## 3. Configuration

### A. Fichier `jest.config.ts` (Racine du projet)
Configuration de base pour dire à Jest d'utiliser le compilateur Next.js.

```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
```

### B. Fichier `jest.setup.ts` (Racine du projet)
Permet d'étendre les matchers de Jest avec ceux de `jest-dom` (nécessaire pour `.toBeInTheDocument()`).

```typescript
import '@testing-library/jest-dom'
```

### C. Script dans `package.json`
Ajout de la commande de test :

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

## 4. Stratégie de Test

### Structure des dossiers
Nous adopterons une structure **colocalisée** ou un dossier `__tests__` dans `src`. Pour garder le dossier `app` propre, nous utiliserons un dossier `__tests__` à la racine de `src` ou dans les dossiers de composants.

Proposition : `src/__tests__` pour les tests d'intégration (Pages) et tests unitaires groupés.

### Exemple de Test : Page d'Accueil (`src/__tests__/Home.test.tsx`)
Comme `Hero.tsx` utilise `framer-motion`, il faudra peut-être mocker cette librairie si elle pose problème dans JSDOM, mais souvent `next/jest` gère bien le JS moderne.

```tsx
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock des composants enfants pour isoler le test de la page
// (Optionnel : on peut aussi faire du test d'intégration complet)
jest.mock('@/components/Hero', () => () => <div data-testid="hero-section">Hero</div>)
jest.mock('@/components/TechStack', () => () => <div data-testid="tech-stack">TechStack</div>)
// ... autres mocks

describe('Page d\'accueil', () => {
  it('affiche les sections principales', () => {
    render(<Home />)
 
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('tech-stack')).toBeInTheDocument()
    expect(screen.getByText('Conçu & Développé par Marius')).toBeInTheDocument()
  })
})
```

### Exemple de Test Unitaire : Hero (`src/components/__tests__/Hero.test.tsx`)

```tsx
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('affiche le nom et le titre correctement', () => {
    render(<Hero />)
    
    expect(screen.getByText('Marius Sergent.')).toBeInTheDocument()
    expect(screen.getByText(/architecture web/i)).toBeInTheDocument()
  })
})
```

## 5. Intégration CI/CD (GitHub Actions)

Pour garantir que le code déployé sur le VPS via Docker est fonctionnel, nous ajoutons une étape de test **avant** le build Docker.

Modifiez ou créez `.github/workflows/main.yml` :

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Use Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run Lint
      run: npm run lint
      
    - name: Run Unit Tests
      run: npm run test

  build-and-deploy:
    needs: test # IMPORTANT : Ne s'exécute que si 'test' passe
    runs-on: ubuntu-latest
    steps:
      # ... vos étapes de build docker et de push existantes ...
      - name: Build Docker image
        run: echo "Simulation build docker" # Remplacer par vos commandes réelles
```

## Plan d'action immédiat

1.  Installer les packages.
2.  Créer les fichiers de config (`jest.config.ts`, `jest.setup.ts`).
3.  Créer le premier test pour `Hero.tsx` pour valider la configuration.
4.  Lancer `npm test` localement.
5.  Mettre à jour le workflow GitHub Actions.
