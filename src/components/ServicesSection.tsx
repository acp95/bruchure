import { useState } from "react";
import { 
  FileText, Code, Shield, Check, Cpu, Server, Lock, Landmark, ArrowUpRight,
  Database, Coffee, Layers, Globe, Terminal, Radio, Activity, GitBranch,
  Atom, Hexagon, Boxes
} from "lucide-react";
import { servicesData } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function ServicesSection() {
  const [selectedPillar, setSelectedPillar] = useState<string>("gestion");

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "FileText":
        return <Landmark className={className} />;
      case "Code":
        return <Code className={className} />;
      case "Shield":
        return <Server className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  const getTechIcon = (techName: string) => {
    const norm = techName.toLowerCase();
    
    if (norm.includes("react")) {
      return (
        <span className="flex items-center gap-1">
          <Atom className="w-3.5 h-3.5 text-cyan-500 animate-[spin_10s_linear_infinite]" />
        </span>
      );
    }
    if (norm.includes("angular")) {
      return <Shield className="w-3.5 h-3.5 text-red-600 fill-red-100/50" />;
    }
    if (norm.includes("php")) {
      return <Globe className="w-3.5 h-3.5 text-indigo-400" />;
    }
    if (norm.includes("node")) {
      return <Hexagon className="w-3.5 h-3.5 text-green-600 fill-green-100/30" />;
    }
    if (norm.includes("java")) {
      return <Coffee className="w-3.5 h-3.5 text-amber-600" />;
    }
    if (norm.includes("postgres")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 text-[#336791] fill-[#336791]/10"
        >
          {/* Elephant Head Concept */}
          <path d="M8 5C5 5 2.5 7.5 2.5 11c0 3 2 4.5 4.5 5" />
          <path d="M16 5c3 0 5.5 2.5 5.5 6s-2 4.5-5.5 5" />
          <path d="M7.5 6.5C7.5 4.5 9.5 3 12 3s4.5 1.5 4.5 3.5v5c0 1-.5 2-1 2.5" />
          <path d="M11 11v5c0 2 1 3.5 2.5 3.5s2-1 2-2" />
          <path d="M7 11.5h1.5M15.5 11.5H17" />
        </svg>
      );
    }
    if (norm.includes("mysql")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 text-[#00758f] fill-[#00758f]/10"
        >
          {/* Dolphin Concept */}
          <path d="M2 15c4-1 8-5 11-9 1-1.3 3-1.8 4.5-.8 1 .7 1.5 1.8 1.5 3s-.7 2-1.5 2.5c-3 .5-6 2-8 4-2 2-5 3.5-7.5 3.5C2 18 1.5 16.5 2 15z" />
          <path d="M12.5 7.5c1-2.5 2.5-3.5 3-3.5.2 0-.2 2.2-1 3.5" />
          <path d="M1 16.5c-1-1.5.5-3 1.5-2.5" />
        </svg>
      );
    }
    if (norm.includes("sql") || norm.includes("database")) {
      return <Database className="w-3.5 h-3.5 text-indigo-500" />;
    }
    if (norm.includes("docker")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 text-[#0db7ed] fill-[#0db7ed]/10"
        >
          {/* Whale (Ballenita) Concept carrying cargo */}
          <path d="M2 13.5c0-1.5 1.2-2.5 2.5-3 .8-.3 1.8-.5 2.8-.5 2 0 3.8.8 5.7 1.5 2 .8 4 1 5.5-.3.8-.7.8-2 1.5-2.5.5-.3 1.5 0 1.5 1.5s-1.2 3.5-2.5 4c-3.2 1.2-7.5.8-11-.5-2.5-.9-5.5-.2-6-1.5z" />
          <path d="M6 7h2v2H6V7zM9 7h2v2H9V7zM12 7h2v2h-2V7z" fill="currentColor" strokeWidth="0" />
          <path d="M7.5 4h2v2h-2V4zM10.5 4h2v2h-2V4z" fill="currentColor" strokeWidth="0" />
        </svg>
      );
    }
    if (norm.includes("api") || norm.includes("rest")) {
      return <GitBranch className="w-3.5 h-3.5 text-orange-500" />;
    }
    if (norm.includes("workflow") || norm.includes("automation")) {
      return <Activity className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />;
    }
    if (norm.includes("python") || norm.includes("pandas")) {
      return <Terminal className="w-3.5 h-3.5 text-blue-500" />;
    }
    if (norm.includes("d3") || norm.includes("recharts")) {
      return <Activity className="w-3.5 h-3.5 text-rose-500" />;
    }
    if (norm.includes("cloud") || norm.includes("aws") || norm.includes("gcp") || norm.includes("deployment")) {
      return <Server className="w-3.5 h-3.5 text-emerald-600" />;
    }
    if (norm.includes("ubiquiti") || norm.includes("unifi")) {
      return <Radio className="w-3.5 h-3.5 text-blue-600" />;
    }
    if (norm.includes("genetic") || norm.includes("algorithm")) {
      return <Cpu className="w-3.5 h-3.5 text-teal-600 animate-pulse" />;
    }
    if (norm.includes("debian") || norm.includes("server") || norm.includes("ubuntu")) {
      return <Terminal className="w-3.5 h-3.5 text-rose-600 font-bold" />;
    }
    if (norm.includes("vpn") || norm.includes("ipsec") || norm.includes("firewall")) {
      return <Lock className="w-3.5 h-3.5 text-emerald-500" />;
    }

    return <Code className="w-3.5 h-3.5 text-indigo-600" />;
  };

  const currentPillar = servicesData.find((p) => p.id === selectedPillar) || servicesData[0];

  return (
    <section id="servicios" className="py-16 bg-slate-50 relative border-b border-slate-200 grid-pattern-dense">
      {/* Absolute blurry gradient meshes for futuristic lighting depth */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-200/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-150/15 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[6000ms]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-12 space-y-3">
          <span className="text-indigo-600 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] block">
            [ 01 // INGENIERÍA ESPECIALIZADA ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tighter uppercase leading-none">
            Pilares de Solución de Ingeniería
          </h2>
          <p className="max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Plataformas de gestión web a medida, modelos analíticos e interactivos de datos con interfaces intuitivas y diseño de infraestructura para redes físicas unificadas.
          </p>
        </div>

        {/* Big 3 Cards selector Grid with responsive design and high-contrast styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {servicesData.map((pillar) => {
            const isActive = selectedPillar === pillar.id;
            return (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`p-6 border transition-all duration-300 cursor-pointer select-none relative rounded-none flex flex-col justify-between ${
                  isActive
                    ? "bg-white border-indigo-600 shadow-xl glow-active"
                    : "bg-white/65 hover:bg-white border-slate-200 hover:border-slate-350 shadow-xs"
                }`}
              >
                {/* Visual marker of selected */}
                {isActive && (
                  <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600" />
                )}

                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3.5 transition-colors duration-300 ${
                      isActive ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15" : "bg-indigo-50 text-indigo-700"
                    }`}>
                      {getIcon(pillar.iconName, "w-6 h-6")}
                    </div>
                    <div>
                      <h3 className="font-display font-black text-md sm:text-lg text-slate-900 uppercase tracking-tight leading-snug">
                        {pillar.title}
                      </h3>
                      <span className="text-[9px] uppercase font-mono tracking-widest font-extrabold text-indigo-600 block mt-1">
                        {pillar.id === "gestion" ? "Sistemas de Información" : pillar.id === "software" ? "Analítica & Gestión" : "Networking & Conectividad"}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-505 text-slate-550 text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {pillar.shortDescription}
                  </p>
                </div>

                <div className="flex items-center text-[10px] font-mono tracking-widest text-indigo-600 uppercase font-black cursor-pointer hover:text-indigo-850 pt-2 border-t border-slate-100 mt-2">
                  <span>Ver detalles del pilar</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Expanded Inspector Block with Glassmorphic base and precise corner markers */}
        <div className="bg-white border border-slate-200 rounded-none p-6 sm:p-10 lg:p-12 shadow-2xl relative min-h-[420px] glow-indigo corner-decor-tl corner-decor-tr corner-decor-bl corner-decor-br">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPillar}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              
              {/* Pillar Deep Dive */}
              <div className="lg:col-span-7 space-y-7">
                
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-1 px-3 py-1.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold tracking-[0.25em] font-mono shadow-xs">
                    DESCRIPCIÓN DEL SERVICIO
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-display font-black text-slate-900 uppercase tracking-tighter leading-none pt-1">
                    {currentPillar.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {currentPillar.detailedDescription}
                </p>

                {/* Benefits List */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-[0.2em] flex items-center">
                    <span className="w-1.5 h-1.5 rounded-none bg-indigo-600 mr-2" />
                    Alcance del Servicio y Beneficios Clave
                  </h4>
                  <ul className="space-y-3">
                    {currentPillar.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-slate-700 font-medium">
                        <span className="bg-indigo-50 border border-indigo-100 p-1 rounded-none text-indigo-600 mr-3 mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-indigo-600 stroke-[3px]" />
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Technologies / Execution details column */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6.5 sm:p-8 rounded-none space-y-7 shadow-xs">
                <div>
                  <h4 className="text-[9px] font-mono font-black text-slate-400 tracking-[0.22em] uppercase mb-4">
                    TECNOLOGÍAS / PROTOCOLOS CLAVE
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPillar.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white text-slate-700 border border-slate-200 text-[10px] font-mono py-2 px-3 tracking-wider rounded-none hover:border-indigo-600 hover:text-slate-900 transition-all cursor-default flex items-center gap-1.5 shadow-2xs font-bold"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-5 space-y-2">
                  <h4 className="text-[9px] font-mono font-black text-slate-400 tracking-[0.22em] uppercase mb-1">
                    AUDIENCIA DE IMPACTO
                  </h4>
                  <p className="text-slate-550 text-slate-600 text-xs leading-relaxed font-semibold">
                    {currentPillar.targetAudience === "both" 
                      ? "Ideal para modernizar flujos administrativos, repositorios y control comercial (ofreciendo de forma opcional adaptaciones gubernamentales locales)." 
                      : currentPillar.targetAudience === "public"
                      ? "Optimizado para corporaciones, oficinas y dependencias físicas que requieran infraestructura unificada Ubiquiti y auditoría estricta de seguridad."
                      : "Pensado para entidades comerciales y de servicios que deseen aprovechar al máximo sus datos operativos con modelos estadísticos claros."}
                  </p>
                </div>

                {/* Live visual accent for compliance status */}
                <div className="border-t border-slate-200 pt-5 flex items-center justify-between text-[9px] font-mono tracking-widest">
                  <span className="text-slate-400 font-black uppercase">ESTADO DE SOPORTE:</span>
                  <span className="text-indigo-600 font-black flex items-center bg-indigo-50 px-2.5 py-1 border border-indigo-100">
                    <span className="w-1.5 h-1.5 rounded-none bg-indigo-600 animate-pulse mr-2" />
                    ACTIVO / DISPONIBLE
                  </span>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
