import { ArrowRight, Cpu, Server, Award, ChevronRight, Activity, Terminal, Shield } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] bg-slate-50 pt-28 pb-16 flex items-center overflow-hidden border-b border-slate-200 grid-pattern">
      {/* Background visual abstract accents with beautiful smooth radial blurring */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/10 to-indigo-550/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-gradient-to-br from-emerald-250/10 to-emerald-300/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* High precision crosshair or fine indicators representational elements */}
      <div className="absolute left-6 top-1/3 hidden xl:block font-mono text-[9px] text-slate-400 tracking-[0.3em] uppercase rotate-90 origin-left select-none opacity-45">
        [ UBICACIÓN // LIMA, PERÚ ]
      </div>
      <div className="absolute right-6 top-2/3 hidden xl:block font-mono text-[9px] text-slate-400 tracking-[0.3em] uppercase -rotate-90 origin-right select-none opacity-45">
        [ REGISTRO CIP // 326474 ]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            
            {/* Academic Credentials Badge with high-contrast precision styling */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex self-start items-center space-x-2 bg-indigo-50/80 border border-indigo-200/60 px-3 py-1.5 text-indigo-700 font-mono shadow-xs"
            >
              <Award className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase">
                Ing. en Informática // CIP: 326474 // Egresado de Maestría
              </span>
            </motion.div>

            {/* Impact Headline - fine-tuned to be extremely balanced and professional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.75rem] 2xl:text-[5.5rem] text-slate-900 tracking-tighter leading-[0.95] uppercase">
                <span className="text-indigo-650 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900 bg-clip-text text-transparent">Soluciones</span><br />
                Tecnológicas.
              </h1>
            </motion.div>

            {/* Subheading - readable & direct */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed max-w-xl font-medium"
            >
              Diseño y desarrollo de sistemas web a la medida, automatización de flujos de trabajo clave y análisis inteligente de datos. Ayudamos a empresas e instituciones a simplificar procesos complejos, optimizar su rendimiento operativo y tomar decisiones fundamentadas en información real.
            </motion.p>
            
            {/* Elegant Tech Tags Row Offset Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              <span className="text-[9px] font-mono bg-white border border-slate-205 border-slate-200 text-slate-600 py-1.5 px-3 tracking-widest uppercase font-bold shadow-2xs hover:border-indigo-400 transition-colors duration-200 cursor-default">
                💻 Gestión Web
              </span>
              <span className="text-[9px] font-mono bg-white border border-slate-205 border-slate-200 text-slate-600 py-1.5 px-3 tracking-widest uppercase font-bold shadow-2xs hover:border-indigo-400 transition-colors duration-200 cursor-default">
                📊 Ciencia de Datos
              </span>
              <span className="text-[9px] font-mono bg-white border border-slate-205 border-slate-200 text-slate-600 py-1.5 px-3 tracking-widest uppercase font-bold shadow-2xs hover:border-indigo-400 transition-colors duration-200 cursor-default">
                💡 Arquitectura TI
              </span>
              <span className="text-[9px] font-mono bg-white border border-slate-205 border-slate-200 text-slate-600 py-1.5 px-3 tracking-widest uppercase font-bold shadow-2xs hover:border-indigo-400 transition-colors duration-200 cursor-default">
                📶 Redes Ubiquiti
              </span>
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <button
                onClick={() => handleScrollTo("contacto")}
                className="bg-slate-900 border border-slate-900 hover:bg-indigo-600 hover:border-indigo-600 text-white font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] py-3.5 px-7 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 shadow-md shadow-indigo-600/10"
              >
                <span>Agenda Consultoría</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
              
              <button
                onClick={() => handleScrollTo("servicios")}
                className="border border-slate-200 bg-white hover:border-slate-350 hover:bg-slate-50 text-slate-700 font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] py-3.5 px-7 transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 shadow-2xs"
              >
                <span>Ver Portafolio</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </motion.div>

            {/* Numerical indicators metrics board */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-150"
            >
              <div>
                <span className="block font-display font-black text-2xl xl:text-3xl text-indigo-600">
                  -40%
                </span>
                <span className="block text-[8px] font-mono text-slate-400 tracking-wider uppercase mt-0.5 font-bold">
                  Tiempos de Gestión
                </span>
              </div>
              <div>
                <span className="block font-display font-black text-2xl xl:text-3xl text-slate-850">
                  100%
                </span>
                <span className="block text-[8px] font-mono text-slate-400 tracking-wider uppercase mt-0.5 font-bold">
                  Redes Estables
                </span>
              </div>
              <div>
                <span className="block font-display font-black text-2xl xl:text-3xl text-indigo-600">
                  D3/RE [📈]
                </span>
                <span className="block text-[8px] font-mono text-slate-400 tracking-wider uppercase mt-0.5 font-bold">
                  Ciencia de Datos
                </span>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Visual Technical Workbench Terminal with corner decor and glowing shadows */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="glass-card shadow-2xl relative p-6.5 glow-indigo corner-decor-tl corner-decor-tr corner-decor-bl corner-decor-br">
              
              {/* Dynamic decorative tab flag */}
              <div className="absolute -top-3.5 left-6 bg-indigo-600 px-3.5 py-1.5 text-[9px] font-mono text-white tracking-widest uppercase font-bold shadow-xs">
                PERFIL EJECUTIVO // ESTUDIOS DE POSTGRADO
              </div>

              {/* Terminal Frame Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-150 mb-4">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 bg-rose-505 bg-rose-500 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-amber-400 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                </div>
                <div className="text-[10px] font-mono text-slate-450 uppercase tracking-widest font-black flex items-center space-x-1">
                  <span>SYSTEM_INTEGRITY.SH</span>
                </div>
              </div>

              {/* Interactive terminal readout code */}
              <div className="space-y-4 font-mono text-xs text-slate-700">
                
                <div className="space-y-1">
                  <p className="text-slate-400 text-[10px]">// perfil_profesional_ejecutivo</p>
                  <p className="text-slate-700">
                    $ <span className="text-indigo-600 font-bold">cat</span> academic_focus.json
                  </p>
                  <div className="bg-slate-50 p-3.5 border border-slate-200 text-[11px] leading-relaxed text-slate-650 hover:bg-indigo-50/10 transition-colors duration-200">
                    <span className="text-indigo-600 font-bold">{"{"}</span> <br />
                    &nbsp;&nbsp;&quot;título&quot;: &quot;Ingeniero en Informática (CIP: 326474)&quot;,<br />
                    &nbsp;&nbsp;&quot;postgrado&quot;: &quot;Egresado de Maestría en Ciencias de la Computación&quot;,<br />
                    &nbsp;&nbsp;&quot;tesis_investigación&quot;: &quot;Algoritmos Genéticos de Optimización&quot;,<br />
                    &nbsp;&nbsp;&quot;especialidades&quot;: [&quot;Sistemas de Gestión Web&quot;, &quot;Ciencia de Datos&quot;, &quot;Arquitectura TI&quot;]<br />
                    <span className="text-indigo-600 font-bold">{"}"}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-slate-400 text-[10px]">// monitores_ubiquiti_estado</p>
                  <p className="text-slate-700">
                    $ <span className="text-indigo-600 font-bold">ping</span> -c 1 ubiquiti.network
                  </p>
                  <div className="flex items-center space-x-2.5 bg-slate-50 p-3 border border-slate-200 text-[10px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4.5" />
                    <span className="text-slate-800 font-bold uppercase tracking-wider text-[9px]">Sedes Enlazadas OK</span>
                    <span className="text-indigo-650 text-[9px] ml-auto font-black bg-indigo-50 px-2 py-0.5 border border-indigo-100">0.24 ms</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-slate-400 text-[10px]">// modelando_optimizador_genetico</p>
                  <div className="bg-slate-50 p-3.5 border border-slate-200 text-slate-600 flex flex-col space-y-2.5">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-slate-700 uppercase">GENERACIÓN ACTIVA: #840</span>
                      <span className="text-indigo-600 uppercase font-black">MUTACIÓN: 2.4%</span>
                    </div>
                    {/* Glowing progress line */}
                    <div className="space-y-1">
                      <div className="w-full h-2 bg-slate-200 rounded-none overflow-hidden">
                        <div className="w-[88%] h-full bg-indigo-600" />
                      </div>
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-450 font-bold font-mono">
                      <span>CONVERGENCIA: 99.4%</span>
                      <span>SAMPLES: 3.2K/S</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
