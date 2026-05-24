import { useState, useEffect, useRef } from "react";
import { Cpu, Dna, FileCheck, Award, Play, RotateCcw, Activity } from "lucide-react";
import { valueProps } from "../data";
import { motion } from "motion/react";

export default function ValueProposition() {
  // Genetic Algorithm Route Optimizer Sim State
  const [isRunning, setIsRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [bestFitness, setBestFitness] = useState(48.2);
  const [bestChromosome, setBestChromosome] = useState("0110100100011100");
  const [mutationRate, setMutationRate] = useState(2); // in %
  const [targetChromosome] = useState("1111000011110000");
  const [logMessages, setLogMessages] = useState<string[]>([
    "Motor algorítmico cargado y listo para optimizar la distribución de rutas."
  ]);

  const simRef = useRef<NodeJS.Timeout | null>(null);

  // Restart Simulation
  const handleReset = () => {
    setIsRunning(false);
    if (simRef.current) clearInterval(simRef.current);
    setGeneration(0);
    setBestFitness(45.5);
    setBestChromosome("0110100100011100");
    setLogMessages(["Módulo de optimización reiniciado a sus parámetros semilla."]);
  };

  const addLog = (msg: string) => {
    setLogMessages((prev) => [msg, ...prev.slice(0, 4)]);
  };

  // Run or Pause simulation
  const toggleSimulation = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    if (isRunning) {
      addLog("Generando población inicial de 100 rutas tentativas aleatorias...");
      simRef.current = setInterval(() => {
        setGeneration((gen) => {
          const nextGen = gen + 1;
          
          setBestFitness((fit) => {
            if (fit >= 99.6) {
              setIsRunning(false);
              if (simRef.current) clearInterval(simRef.current);
              addLog(`⚡ ¡Ruta óptima hallada en la generación ${nextGen}! Recorrido perfeccionado al 100%.`);
              return 100;
            }
            
            // Log every few generations
            if (nextGen % 5 === 0) {
              addLog(`Generación ${nextGen}: Seleccionando y cruzando las mejores rutas de la población.`);
            }

            // Randomly update best chromosome to simulate visual evolution toward target
            setBestChromosome((chrom) => {
              const arr = chrom.split("");
              const targetArr = targetChromosome.split("");
              // Bring one digit closer to target
              const diffIndices = [];
              for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== targetArr[i]) {
                  diffIndices.push(i);
                }
              }
              if (diffIndices.length > 0) {
                const randIdx = diffIndices[Math.floor(Math.random() * diffIndices.length)];
                arr[randIdx] = Math.random() < (100 - mutationRate) / 100 ? targetArr[randIdx] : (arr[randIdx] === "1" ? "0" : "1");
              }
              return arr.join("");
            });

            // Smooth increment toward 100%
            const increment = Math.max(0.2, (100 - fit) * (Math.random() * 0.15 + 0.05));
            return parseFloat((fit + increment).toFixed(1));
          });

          return nextGen;
        });
      }, 350);
    } else {
      if (simRef.current) {
        clearInterval(simRef.current);
      }
    }

    return () => {
      if (simRef.current) clearInterval(simRef.current);
    };
  }, [isRunning, mutationRate, targetChromosome]);

  return (
    <section id="propuesta" className="py-16 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Visual background effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-50/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-emerald-50/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-4xl mb-12 space-y-3">
          <span className="text-indigo-600 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] block">
            [ 02 // RIGOR & PROPUESTA DE VALOR ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tighter uppercase leading-none">
            Rigor Aplicado a cada Proyecto
          </h2>
          <p className="max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            El verdadero valor no se limita a escribir líneas de código, sino a aplicar la rigurosidad analítica de la ingeniería para edificar sistemas duraderos. Con estudios concluidos de Maestría en Ciencias de la Computación, combinamos el pragmatismo que exige la industria con bases estructuradas de optimización lógica y arquitectura de soluciones.
          </p>
        </div>

        {/* Layout split: 3 Value Props columns vs Genetic Algorithm Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Top Left: 3 Pillars Copy */}
          <div className="lg:col-span-6 space-y-8">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="space-y-4 relative group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-none shadow-xs">
                    {idx === 0 ? <Award className="w-5 h-5 stroke-[2px]" /> : idx === 1 ? <Dna className="w-5 h-5 stroke-[2px]" /> : <FileCheck className="w-5 h-5 stroke-[2px]" />}
                  </div>
                  <h3 className="font-display font-black text-xl text-slate-900 uppercase tracking-tight">
                    {prop.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-1 font-medium">
                  {prop.description}
                </p>

                {/* Subtext scientific detail with styled frame */}
                <div className="pl-4 border-l-3 border-indigo-600 bg-slate-50 p-4.5 rounded-none space-y-2 shadow-2xs">
                  <span className="text-[10px] font-mono font-black text-indigo-650 tracking-widest block uppercase">
                    Rigor Científico Aplicado:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                    {prop.scientificRigor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Algoritmo Genético Live Simulator Widget with deep console theme */}
          <div id="simulacion" className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-none p-6.5 sm:p-10 shadow-2xl relative glow-indigo corner-decor-tl corner-decor-tr corner-decor-bl corner-decor-br">
              
              {/* Header */}
              <div className="flex justify-between items-center pb-5 border-b border-slate-150 mb-6">
                <div>
                  <h3 className="text-slate-900 font-display font-black text-md sm:text-lg uppercase flex items-center space-x-2.5">
                    <Activity className="w-5 h-5 text-indigo-600 animate-pulse" />
                    <span>Optimizador Genético de Rutas</span>
                  </h3>
                  <p className="text-[9px] text-slate-405 text-slate-400 font-mono mt-0.5 tracking-wider uppercase font-bold">
                    Simulador Heurístico de Alta Convergencia
                  </p>
                </div>
                <div className="bg-indigo-50 border border-indigo-200/50 py-1.5 px-3 rounded-none text-[9px] font-mono text-indigo-700 font-black uppercase tracking-widest shadow-2xs">
                  RESEARCH // GA_ROUTING
                </div>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                Esta simulación interactiva ilustra cómo resolver problemas complejos de logística y distribución mediante algoritmos evolutivos. Observe cómo, a partir de coordenadas iniciales desordenadas, la población de rutas selecciona y combina sus mejores características de forma automática hasta hallar el recorrido ideal más corto.
              </p>

              {/* Graphic stats card grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-none border border-slate-200 shadow-2xs">
                  <span className="block text-[9px] font-mono uppercase font-black text-slate-404 text-slate-405 tracking-widest">
                    Generación Activa
                  </span>
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 tracking-tight">
                    {generation}
                  </span>
                </div>
                <div className="bg-slate-50 p-4 rounded-none border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className="block text-[9px] font-mono uppercase font-black text-slate-404 text-slate-405 tracking-widest">
                      Adecuación (Fitness)
                    </span>
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-indigo-600 tracking-tight">
                      {bestFitness}%
                    </span>
                  </div>
                  {/* Progress Line */}
                  <div className="w-full bg-slate-200 h-1.5 rounded-none overflow-hidden mt-3">
                    <div 
                      className="bg-indigo-600 h-full rounded-none transition-all duration-300"
                      style={{ width: `${bestFitness}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Binary Chromosomes Strings Panel */}
              <div className="bg-slate-50 p-4.5 rounded-none border border-slate-200 space-y-3.5 font-mono text-xs text-slate-800 shadow-2xs">
                
                <div className="flex justify-between items-center text-slate-650 bg-white border border-slate-150 p-2 px-3 rounded-none">
                  <span className="font-bold">⚓ Secuencia Objetivo (Ruta Óptima):</span>
                  <span className="text-emerald-600 font-extrabold tracking-widest">A-H-B-G-C-F-D-E</span>
                </div>

                <div className="flex justify-between items-center text-slate-805 bg-white border border-slate-150 p-2 px-3 rounded-none shadow-3xs">
                  <span className="font-bold">🧬 Cromosoma Élite (Codificado):</span>
                  <span className="text-indigo-600 font-extrabold tracking-widest animate-pulse">
                    {bestChromosome}
                  </span>
                </div>

                {/* Mutation Rate Adjuster with customized sliders styling */}
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <div className="flex justify-between text-[11px] text-slate-505 font-bold">
                    <span>Tasa de Mutación Cromosómica:</span>
                    <span className="text-indigo-650 text-indigo-600 font-extrabold">{mutationRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={mutationRate}
                    onChange={(e) => {
                      const rate = parseInt(e.target.value);
                      setMutationRate(rate);
                      addLog(`Tasa de mutación ajustada al ${rate}% para explorar rutas más diversas.`);
                    }}
                    className="w-full accent-indigo-600 bg-slate-200 h-1.5 rounded-none cursor-pointer"
                  />
                </div>

              </div>

              {/* Simulation logs console - High contrast black terminal coder block */}
              <div className="mt-5 bg-slate-900 p-4 rounded-none border border-slate-950 shadow-inner">
                <span className="text-[9px] font-mono text-slate-400 block uppercase tracking-widest mb-2 font-black">
                  Consola de Registro Heurístico:
                </span>
                <div className="h-28 overflow-y-auto font-mono text-[10px] text-slate-350 space-y-1.5 scrollbar-thin">
                  {logMessages.map((msg, i) => (
                    <div key={i} className="leading-relaxed border-b border-slate-800/40 pb-1 mr-2">
                      <span className="text-indigo-420 text-indigo-400 select-none mr-2 font-black">&gt;&gt;</span>
                      {msg}
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulation CTA buttons */}
              <div className="mt-6 flex gap-4">
                <button
                  onClick={toggleSimulation}
                  disabled={bestFitness >= 100}
                  className={`flex-1 py-4 px-5 rounded-none mountaineer font-mono text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center space-x-2 border-none ${
                    bestFitness >= 100
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : isRunning
                      ? "bg-amber-500 text-black hover:bg-amber-450 hover:bg-amber-400"
                      : "bg-indigo-600 text-white hover:bg-slate-900 shadow-lg shadow-indigo-600/10"
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? "Pausar Optimización" : "Iniciar Evolución Heurística"}</span>
                </button>
                
                <button
                  onClick={handleReset}
                  className="p-3.5 bg-slate-100 border border-slate-250 hover:border-slate-350 text-slate-600 hover:bg-slate-200 hover:text-slate-900 rounded-none transition-all cursor-pointer shadow-3xs"
                  title="Reiniciar simulador"
                >
                  <RotateCcw className="w-4 h-4 text-slate-600 stroke-[2.5px]" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
