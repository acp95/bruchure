import { useState } from "react";
import { Landmark, Building2, ArrowRight, ThumbsUp, Sparkles } from "lucide-react";
import { projectDiagnostics } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function InteractiveEstimator() {
  const [selectedType, setSelectedType] = useState<"public" | "private" | "idle">("idle");
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const publicGoals = [
    { id: "pub_1", text: "Optimizar los procesos de recaudación y auditoría tributaria para reducir errores administrativos." },
    { id: "pub_2", text: "Diseñar e interconectar sedes u oficinas descentralizadas usando enlaces inalámbricos Ubiquiti estables." },
    { id: "pub_3", text: "Habilitar un portal institucional seguro y amigable para facilitar la transparencia de información." }
  ];

  const privateGoals = [
    { id: "priv_1", text: "Construir software personalizado para centralizar ventas, inventarios y facturación electrónica." },
    { id: "priv_2", text: "Habilitar tableros visuales interactivos que agrupen datos comerciales para tomar mejores decisiones." },
    { id: "priv_3", text: "Establecer un sistema de red local e inalámbrica de alta concurrencia que evite caídas de conexión." }
  ];

  const handleSelectType = (type: "public" | "private") => {
    setSelectedType(type);
    setSelectedGoal("");
  };

  const handleApplyDiagnostic = () => {
    // Scroll to contact and try to pre-fill or set focus
    const msgInput = document.getElementById("message") as HTMLTextAreaElement;
    const selectSvc = document.getElementById("serviceInterest") as HTMLSelectElement;
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const entityTypeSelect = document.getElementById("entityType") as HTMLSelectElement;

    if (entityTypeSelect) {
      entityTypeSelect.value = selectedType === "public" ? "municipio" : "empresa";
      // trigger event
      entityTypeSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }

    if (selectSvc) {
      selectSvc.value = selectedType === "public" ? "gestion" : "software";
      selectSvc.dispatchEvent(new Event("change", { bubbles: true }));
    }

    if (msgInput) {
      const selectedGoalText = selectedType === "public" 
        ? publicGoals.find(g => g.id === selectedGoal)?.text 
        : privateGoals.find(g => g.id === selectedGoal)?.text;
      
      msgInput.value = `Hola Porfirio, he realizado el autodiagnóstico en tu sitio web. Soy una entidad de tipo ${
        selectedType === "public" ? "Pública (Municipalidad/Entidad)" : "Privada (Empresa Comercial)"
      }. Nuestro principal objetivo es: "${selectedGoalText}". Me interesa agendar una consultoría para analizar factibilidad técnica y plazos.`;
      
      msgInput.dispatchEvent(new Event("input", { bubbles: true }));
    }

    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    if (nameInput) {
      nameInput.focus();
    }
  };

  const currentGoals = selectedType === "public" ? publicGoals : privateGoals;

  return (
    <section id="diagnostico" className="py-16 bg-white border-t border-slate-200 relative grid-pattern">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-50/15 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header block */}
        <div className="max-w-4xl mb-12 space-y-3">
          <span className="text-indigo-600 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] block">
            [ 03 // DIAGNÓSTICO INTERACTIVO ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tighter uppercase leading-none">
            Viabilidad Tecnológica
          </h2>
          <p className="max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Determine el enfoque tecnológico óptimo para su organización. Seleccione sus prioridades operativas para formular al instante una propuesta de arquitectura recomendada por expertos.
          </p>
        </div>

        {/* Diagnostic Wizard Box with glowing shadows and geometric frame design */}
        <div className="bg-white border border-slate-200 rounded-none p-6 sm:p-8 xl:p-10 shadow-2xl max-w-4xl mx-auto glow-indigo corner-decor-tl corner-decor-tr corner-decor-bl corner-decor-br">
          
          {/* Step 1: Organization Type */}
          <div className="space-y-6">
            <h3 className="text-slate-900 font-display font-black text-sm sm:text-base uppercase tracking-tight flex items-center space-x-3">
              <span className="bg-indigo-600 text-white w-6 h-6 flex items-center justify-center text-xs font-mono font-black shadow-md shadow-indigo-600/15">1</span>
              <span>Identifique su Naturaleza Organizacional:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Option Left: Public */}
              <button
                type="button"
                onClick={() => handleSelectType("public")}
                className={`p-6 border text-left flex items-start space-x-5 transition-all duration-300 cursor-pointer rounded-none relative overflow-hidden ${
                  selectedType === "public"
                    ? "bg-indigo-50/50 border-indigo-600 text-slate-900 shadow-xl"
                    : "bg-slate-50 border-slate-205 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {selectedType === "public" && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-605 bg-indigo-600/5 rotate-45 translate-x-6 -translate-y-6" />
                )}
                <div className={`p-3.5 transition-colors duration-300 ${selectedType === "public" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15" : "bg-indigo-50 text-indigo-700"}`}>
                  <Landmark className="w-6 h-6 stroke-[2px]" />
                </div>
                <div>
                  <h4 className="font-display font-black text-base text-slate-900 uppercase tracking-tight">Gestión Pública (Opcional)</h4>
                  <p className="text-xs text-slate-505 text-slate-600 leading-relaxed mt-2.5 font-medium">
                    Sustentado en optimización de flujos web internos, transparencia administrativa y redes unificadas Ubiquiti para portales gubernamentales u oficinas estatales.
                  </p>
                </div>
              </button>

              {/* Option Right: Private */}
              <button
                type="button"
                onClick={() => handleSelectType("private")}
                className={`p-6 border text-left flex items-start space-x-5 transition-all duration-300 cursor-pointer rounded-none relative overflow-hidden ${
                  selectedType === "private"
                    ? "bg-indigo-50/50 border-indigo-600 text-slate-900 shadow-xl"
                    : "bg-slate-50 border-slate-205 border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {selectedType === "private" && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-606 bg-indigo-600/5 rotate-45 translate-x-6 -translate-y-6" />
                )}
                <div className={`p-3.5 transition-colors duration-300 ${selectedType === "private" ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15" : "bg-indigo-50 text-indigo-700"}`}>
                  <Building2 className="w-6 h-6 stroke-[2px]" />
                </div>
                <div>
                  <h4 className="font-display font-black text-base text-slate-900 uppercase tracking-tight">Empresa Comercial o PyME</h4>
                  <p className="text-xs text-slate-505 text-slate-600 leading-relaxed mt-2.5 font-medium">
                    Focalizado en expandir operaciones, automatizar flujos de inventarios y habilitar análisis avanzados de datos para resolver problemas de asignación de recursos.
                  </p>
                </div>
              </button>

            </div>
          </div>

          {/* Step 2: Main Operational Pain / Goal */}
          <AnimatePresence>
            {selectedType !== "idle" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-12 pt-12 border-t border-slate-200 space-y-7 overflow-hidden"
              >
                <h3 className="text-slate-900 font-display font-black text-base sm:text-lg uppercase tracking-tight flex items-center space-x-4">
                  <span className="bg-indigo-600 text-white w-7 h-7 flex items-center justify-center text-xs font-mono font-black shadow-md">2</span>
                  <span>Seleccione su Prioridad Operativa Crítica:</span>
                </h3>

                <div className="space-y-3">
                  {currentGoals.map((goal) => {
                    const isSelected = selectedGoal === goal.id;
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => setSelectedGoal(goal.id)}
                        className={`w-full p-4.5 border text-left flex items-center space-x-4 transition-all duration-200 cursor-pointer text-xs sm:text-sm rounded-none shadow-3xs ${
                          isSelected
                            ? "bg-indigo-50/50 border-indigo-600 text-slate-900 font-bold"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected ? "border-indigo-600 bg-indigo-600" : "border-slate-350"
                        }`}>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                        <span className="font-medium">{goal.text}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Diagnostic Result Panel */}
          <AnimatePresence>
            {selectedGoal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="mt-12 pt-12 border-t border-slate-200 overflow-hidden"
              >
                <div className="bg-indigo-50/50 border border-indigo-200/60 rounded-none p-6 sm:p-10 space-y-6 shadow-xs relative">
                  
                  <div className="flex items-center space-x-2 text-indigo-600 font-mono">
                    <Sparkles className="w-5 h-5 text-indigo-600 animate-pulse stroke-[2px]" />
                    <span className="text-[10px] uppercase font-black tracking-[0.25em]">
                      RECOMENDACIÓN TÉCNICA GENERADA
                    </span>
                  </div>

                  {/* Core Diagnostic Text */}
                  <div>
                    <h4 className="text-slate-900 font-display font-black text-xl sm:text-2.5xl uppercase tracking-tight">
                      {selectedType === "public" ? projectDiagnostics[0].title : projectDiagnostics[1].title}
                    </h4>
                    <p className="text-[10px] font-mono text-indigo-650 text-indigo-600 uppercase font-extrabold mt-1.5 tracking-widest bg-indigo-100/40 inline-block px-2.5 py-1 border border-indigo-100">
                      ENFOQUE: {selectedType === "public" ? projectDiagnostics[0].accent : projectDiagnostics[1].accent}
                    </p>
                  </div>

                  <p className="text-slate-655 text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                    {selectedType === "public" ? projectDiagnostics[0].recommendation : projectDiagnostics[1].recommendation}
                  </p>

                  <div className="space-y-4 pt-2">
                    <span className="text-[9px] font-mono font-black text-slate-400 block uppercase tracking-widest">
                      BENEFICIOS CLAVE DEL PLAN:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5">
                      {(selectedType === "public" ? projectDiagnostics[0].benefits : projectDiagnostics[1].benefits).map((b, i) => (
                        <div key={i} className="bg-white border border-slate-200 p-4 rounded-none flex items-center space-x-3 shadow-3xs">
                          <ThumbsUp className="w-4.5 h-4.5 text-indigo-600 flex-shrink-0 stroke-[2px]" />
                          <span className="text-xs text-slate-800 font-bold">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Call To Action triggers form integration */}
                  <div className="pt-8 border-t border-slate-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <p className="text-xs text-slate-450 leading-relaxed max-w-md font-medium">
                      Al aplicar este diagnóstico, cargaremos automáticamente esta configuración operativa en el formulario de contacto para una evaluación acelerada y directa.
                    </p>
                    <button
                      type="button"
                      onClick={handleApplyDiagnostic}
                      className="w-full lg:w-auto bg-slate-900 hover:bg-indigo-600 text-white font-mono text-xs font-black uppercase tracking-[0.22em] py-4.5 px-9 transition-all cursor-pointer border-none rounded-none whitespace-nowrap shadow-md shadow-indigo-600/15"
                    >
                      <span>Cargar Diagnóstico y Contactar</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
