import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-secondary selection:text-on-secondary">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Terminal />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
