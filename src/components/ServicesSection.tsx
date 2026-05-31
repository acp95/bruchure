import { useState } from "react";
import { 
  Check, Cpu, Server, Lock, Landmark, ArrowUpRight,
  Database, Activity, GitBranch, Code
} from "lucide-react";
import {
  SiReact, SiAngular, SiPhp,
  SiNodedotjs, SiPostgresql, SiMysql, SiDocker,
  SiPython, SiD3, SiGooglecloud,
  SiUbiquiti, SiLinux
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
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
    const sz = "w-3.5 h-3.5";
    
    if (norm.includes("react") || norm.includes("typescript")) {
      return (
        <span className="flex items-center gap-1">
          <SiReact className={`${sz} text-[#61DAFB]`} />
        </span>
      );
    }
    if (norm.includes("angular")) {
      return <SiAngular className={`${sz} text-[#DD0031]`} />;
    }
    if (norm.includes("php")) {
      return <SiPhp className={`${sz} text-[#777BB4]`} />;
    }
    if (norm.includes("node")) {
      return <SiNodedotjs className={`${sz} text-[#339933]`} />;
    }
    if (norm.includes("java") && !norm.includes("javascript")) {
      return <FaJava className={`${sz} text-[#ED8B00]`} />;
    }
    if (norm.includes("postgres")) {
      return <SiPostgresql className={`${sz} text-[#4169E1]`} />;
    }
    if (norm.includes("mysql")) {
      return <SiMysql className={`${sz} text-[#4479A1]`} />;
    }
    if (norm.includes("sql") || norm.includes("database") || norm.includes("nosql")) {
      return <Database className={`${sz} text-indigo-500`} />;
    }
    if (norm.includes("docker") || norm.includes("container")) {
      return <SiDocker className={`${sz} text-[#2496ED]`} />;
    }
    if (norm.includes("api") || norm.includes("rest")) {
      return <GitBranch className={`${sz} text-orange-500`} />;
    }
    if (norm.includes("workflow") || norm.includes("automation")) {
      return <Activity className={`${sz} text-indigo-600 animate-pulse`} />;
    }
    if (norm.includes("python") || norm.includes("pandas")) {
      return <SiPython className={`${sz} text-[#3776AB]`} />;
    }
    if (norm.includes("d3") || norm.includes("recharts")) {
      return <SiD3 className={`${sz} text-[#F9A03C]`} />;
    }
    if (norm.includes("aws")) {
      return <FaAws className={`${sz} text-[#232F3E]`} />;
    }
    if (norm.includes("gcp") || norm.includes("google")) {
      return <SiGooglecloud className={`${sz} text-[#4285F4]`} />;
    }
    if (norm.includes("cloud") || norm.includes("deployment")) {
      return <Server className={`${sz} text-emerald-600`} />;
    }
    if (norm.includes("ubiquiti") || norm.includes("unifi")) {
      return <SiUbiquiti className={`${sz} text-[#0559C9]`} />;
    }
    if (norm.includes("debian") || norm.includes("ubuntu") || norm.includes("linux") || norm.includes("server")) {
      return <SiLinux className={`${sz} text-[#FCC624]`} />;
    }
    if (norm.includes("vpn") || norm.includes("ipsec") || norm.includes("firewall")) {
      return <Lock className={`${sz} text-emerald-500`} />;
    }
    if (norm.includes("network")) {
      return <Activity className={`${sz} text-blue-500`} />;
    }

    return <Code className={`${sz} text-indigo-600`} />;
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
