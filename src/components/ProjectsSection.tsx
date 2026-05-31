import { motion } from "motion/react";
import { CheckCircle2, ChevronRight, Server, Database, Code, Layout } from "lucide-react";
import { projectsData } from "../data";

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="soluciones">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-indigo-50 blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-wide text-indigo-600 uppercase mb-3">
              Casos de Éxito & Soluciones
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Sistemas que transforman organizaciones
            </h3>
            <p className="text-lg text-slate-600">
              Desarrollamos plataformas de software robustas y adaptables para resolver problemas complejos de gestión tanto en el sector público como privado.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Visual/Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center ${project.imagePlaceholder}`}>
                    {/* Decorative UI elements mimicking an app dashboard */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden relative z-10 border border-white/20">
                      <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 p-6 flex gap-6">
                        <div className="w-1/4 space-y-4">
                          <div className="h-4 bg-slate-200 rounded w-full"></div>
                          <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                          <div className="h-4 bg-slate-200 rounded w-4/6"></div>
                        </div>
                        <div className="w-3/4 space-y-4">
                          <div className="h-24 bg-indigo-50 rounded-lg w-full border border-indigo-100"></div>
                          <div className="flex gap-4">
                            <div className="h-32 bg-blue-50 rounded-lg w-1/2 border border-blue-100"></div>
                            <div className="h-32 bg-slate-50 rounded-lg w-1/2 border border-slate-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="space-y-6">
                    <div>
                      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-4 border items-center gap-1.5 ${project.colorAccents}`}>
                        <span className="font-mono text-[9px] uppercase tracking-wider opacity-60">Público Objetivo:</span>
                        <span>{project.client}</span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        {project.title}
                      </h4>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-slate-900">Características Principales:</h5>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-slate-700">
                            <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <h5 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wider">Tecnologías</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2">
                       <button className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                         Solicitar demo o más información <ChevronRight className="w-4 h-4 ml-1" />
                       </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
