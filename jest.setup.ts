import '@testing-library/jest-dom'

// Mock IntersectionObserver
class IntersectionObserver {
  observe() { return null }
  unobserve() { return null }
  disconnect() { return null }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver
})

// Mock ResizeObserver
class ResizeObserver {
  observe() { return null }
  unobserve() { return null }
  disconnect() { return null }
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: ResizeObserver
})
