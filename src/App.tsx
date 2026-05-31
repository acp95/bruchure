import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ValueProposition from "./components/ValueProposition";
import ProjectsSection from "./components/ProjectsSection";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden selection:bg-indigo-600 selection:text-white antialiased font-sans">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ValueProposition />
      <ProjectsSection />
      <ContactCTA />
      <Footer />
    </div>
  );
}
