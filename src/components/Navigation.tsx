import { useState, useEffect } from "react";
import { Shield, Cpu, Code, Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Propuesta de Valor", href: "#propuesta" },
    { label: "Casos de Éxito", href: "#soluciones" },
    { label: "Contáctanos", href: "#contacto" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Indicator Line */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-indigo-505 via-indigo-600 to-indigo-800 transition-all duration-75"
        style={{ width: `${scrollProgress}%`, backgroundColor: "#4F46E5" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand with Micro animations */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
              className="bg-indigo-600 p-2 text-white flex items-center justify-center shadow-md shadow-indigo-600/10"
            >
              <Cpu className="w-5 h-5" />
            </motion.div>
            <div>
              <span className="font-display font-black text-lg tracking-tighter text-slate-900 block uppercase leading-none">
                Porfirio Cerna
              </span>
              <span className="text-[9px] font-mono text-indigo-600 tracking-[0.18em] uppercase block mt-1 font-semibold">
                Ing. en Informática // CIP: 326474
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-600 hover:text-indigo-600 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors cursor-pointer relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection("#contacto")}
              className="bg-slate-900 border border-slate-900 hover:bg-transparent hover:text-slate-900 text-white font-mono text-xs font-bold uppercase tracking-widest py-2.5 px-6 transition-all duration-300 cursor-pointer flex items-center space-x-1.5 shadow-sm shadow-indigo-600/15"
            >
              <span>Consultar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-800 hover:text-indigo-600 p-2 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-slate-700 hover:text-indigo-600 font-mono text-xs uppercase tracking-wider py-3 border-b border-slate-100 font-bold"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection("#contacto")}
                  className="w-full bg-indigo-600 text-white text-center font-mono text-xs font-bold uppercase tracking-widest py-4 shadow-md"
                >
                  Solicitar Consultoría
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
