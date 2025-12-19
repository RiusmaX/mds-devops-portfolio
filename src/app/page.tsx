import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-navy min-h-screen text-slate-light selection:bg-turquoise selection:text-navy">
      <Hero />
      <TechStack />
      <Philosophy />
      <Services />
      <Contact />
      
      <footer className="text-center py-6 text-slate font-mono text-sm">
        <p>Conçu & Développé par Marius</p>
      </footer>
    </main>
  );
}
