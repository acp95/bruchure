import { Cpu, Github, Linkedin, BookOpen, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 text-slate-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
          
          {/* Brand block */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-slate-900">
              <Cpu className="w-5 h-5 text-indigo-600" />
              <span className="font-display font-black text-base uppercase tracking-tight">
                Porfirio Antonio Cerna Pérez
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Ingeniero en Informática & Desarrollador Full-Stack. Estudios de Maestría en Ciencias de la Computación con enfoque en Sistemas de Gestión Web, Ciencia de Datos y Redes UniFi/Cloud.
            </p>
          </div>

          {/* Social info */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-xs font-mono">
            
            <a 
              href="mailto:1995cerna@gmail.com" 
              className="text-indigo-600 hover:text-slate-900 transition-colors flex items-center space-x-1"
            >
              <span>1995cerna@gmail.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <div className="flex space-x-4">
              <span className="text-slate-400 block hover:text-slate-900 transition-colors duration-150">
                Egresado de Maestría en Ciencias de la Computación
              </span>
            </div>

          </div>

        </div>

        {/* Legal bar */}
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-slate-400 gap-4">
          <p>© {currentYear} Porfirio Antonio Cerna Perez. Todos los derechos reservados.</p>
          <div className="flex space-x-3 uppercase tracking-wider text-slate-400 font-semibold">
            <span>Ingeniería de Software</span>
            <span>•</span>
            <span>Alta Disponibilidad</span>
            <span>•</span>
            <span>Conectividad Ubiquiti</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
