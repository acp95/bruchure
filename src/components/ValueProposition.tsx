import { Cpu, FileCheck, Award } from "lucide-react";
import { valueProps } from "../data";

export default function ValueProposition() {
  return (
    <section id="propuesta" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      
      {/* Visual background effect */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-50/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-emerald-50/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-4xl mb-16 space-y-3">
          <span className="text-indigo-600 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] block">
            [ 02 // INGENIERÍA & PROPUESTA DE VALOR ]
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tighter uppercase leading-none">
            Ingeniería de Software de Alto Nivel
          </h2>
          <p className="max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            El verdadero valor no se limita a escribir líneas de código, sino a edificar sistemas duraderos y eficientes. Con estudios de Maestría en Ciencias de la Computación, combinamos el pragmatismo que exige la industria con bases estructuradas de optimización y arquitectura de soluciones corporativas.
          </p>
        </div>

        {/* 3 Pillars Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {valueProps.map((prop, idx) => (
            <div 
              key={idx} 
              className="space-y-5 relative group bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-none shadow-2xs hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-none shadow-xs">
                    {idx === 0 ? <Award className="w-5 h-5 stroke-[2px]" /> : idx === 1 ? <Cpu className="w-5 h-5 stroke-[2px]" /> : <FileCheck className="w-5 h-5 stroke-[2px]" />}
                  </div>
                  <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 uppercase tracking-tight">
                    {prop.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {prop.description}
                </p>
              </div>

              {/* Subtext technical detail with styled frame */}
              <div className="border-l-3 border-indigo-600 bg-white p-4.5 rounded-none space-y-1.5 shadow-3xs mt-6">
                <span className="text-[9px] font-mono font-black text-indigo-650 tracking-widest block uppercase">
                  Rigor en el Desarrollo:
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                  {prop.scientificRigor}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
