import { useState, useEffect, FormEvent } from "react";
import { Mail, Phone, Calendar, Send, ShieldCheck, CheckCircle2, Clock, Database, ChevronDown, ChevronUp } from "lucide-react";
import { ContactMessage } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function ContactCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [entityName, setEntityName] = useState("");
  const [entityType, setEntityType] = useState<"municipio" | "empresa" | "particular">("particular");
  const [serviceInterest, setServiceInterest] = useState<"gestion" | "software" | "seguridad" | "consultoria">("consultoria");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [savedMessages, setSavedMessages] = useState<ContactMessage[]>([]);
  const [showLogsPanel, setShowLogsPanel] = useState(false);

  // Load existing messages on mount
  useEffect(() => {
    const raw = localStorage.getItem("cerna_contact_messages");
    if (raw) {
      try {
        setSavedMessages(JSON.parse(raw));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return;
    }

    setIsSubmitting(true);

    // Simulate server networks latency
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        entityName,
        entityType,
        serviceInterest,
        message,
        createdAt: new Date().toLocaleDateString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      };

      const updated = [newMessage, ...savedMessages];
      setSavedMessages(updated);
      localStorage.setItem("cerna_contact_messages", JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset fields
      setName("");
      setEmail("");
      setEntityName("");
      setMessage("");
    }, 1100);
  };

  const clearMessagesLog = () => {
    localStorage.removeItem("cerna_contact_messages");
    setSavedMessages([]);
  };

  return (
    <section id="contacto" className="py-16 bg-white relative border-t border-slate-200 grid-pattern">
      {/* Absolute background visual rings */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-100/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Action & Copywriter text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-indigo-600 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] block">
                [ 04 // CONVERSACIÓN DIRECTA ]
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tighter uppercase leading-none">
                Conversemos sobre su idea
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                ¿Busca optimizar los procesos de su negocio con software de nivel empresarial, diseñar un panel interactivo de análisis de datos o establecer una red inalámbrica Ubiquiti unificada para sus oficinas? Agendemos una llamada para analizar la viabilidad técnica y definir la ruta óptima de desarrollo.
              </p>
            </div>

            {/* Practical tech info blocks */}
            <div className="space-y-4.5">
              
              <div className="flex items-start space-x-4 bg-slate-50 p-4.5 rounded-none border border-slate-200 hover:border-indigo-300 transition-colors duration-200">
                <div className="p-3.5 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-none flex-shrink-0">
                  <Mail className="w-5 h-5 stroke-[2px]" />
                </div>
                <div>
                  <h4 className="text-slate-950 text-[9px] font-extrabold font-mono tracking-widest uppercase mb-1">EMAIL DIRECTO DE INGENIERÍA</h4>
                  <p className="text-slate-900 text-sm font-black">1995cerna@gmail.com</p>
                  <span className="text-[9px] text-slate-405 text-slate-400 font-mono tracking-wider uppercase block mt-1 font-bold">Respuesta garantizada en menos de 24 horas</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 p-4.5 rounded-none border border-slate-200 hover:border-indigo-300 transition-colors duration-200">
                <div className="p-3.5 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-none flex-shrink-0">
                  <Calendar className="w-5 h-5 stroke-[2px]" />
                </div>
                <div>
                  <h4 className="text-slate-950 text-[9px] font-extrabold font-mono tracking-widest uppercase mb-1">CONSULTORÍA ESTRATÉGICA</h4>
                  <p className="text-slate-900 text-sm font-black">Lunes a Viernes (09:00 - 18:00 UTC)</p>
                  <span className="text-[9px] text-slate-405 text-slate-400 font-mono tracking-wider uppercase block mt-1 font-bold">Coordinación de reuniones directas vía Zoom / Meet</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-50 p-4.5 rounded-none border border-slate-200 hover:border-indigo-300 transition-colors duration-200">
                <div className="p-3.5 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-none flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[2px]" />
                </div>
                <div>
                  <h4 className="text-slate-950 text-[9px] font-extrabold font-mono tracking-widest uppercase mb-1">GARANTÍA DE CONFIDENCIALIDAD</h4>
                  <p className="text-slate-600 text-xs leading-normal mt-1 font-semibold">Todo acceso, diagnóstico o plano técnico compartido se rige bajo convenios estrictos de Acuerdos de No Divulgación (NDA).</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: High conversion form block with premium border styling */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-white border border-slate-200 rounded-none p-6.5 sm:p-10 shadow-2xl relative glow-indigo corner-decor-tl corner-decor-tr corner-decor-bl corner-decor-br">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center sm:text-left pb-3 border-b border-slate-150 mb-4">
                      <h3 className="text-slate-900 font-display font-black text-lg uppercase tracking-tight">Agendar Sesión Informativa</h3>
                      <p className="text-xs text-slate-400 mt-1 uppercase font-mono tracking-wider font-bold">Complete los detalles y responderemos en menos de 24 horas.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[9px] text-slate-500 font-mono uppercase tracking-widest block font-extrabold">
                          Nombre Completo *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="p. ej. Ing. Carlos Mendoza"
                          className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-none py-3 px-4 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/25 transition-all font-sans font-bold"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[9px] text-slate-500 font-mono uppercase tracking-widest block font-extrabold">
                          Correo de Contacto *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ejemplo@entidad.gob.pe o corporacion.com"
                          className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-none py-3 px-4 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/25 transition-all font-sans font-bold"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      {/* Entity Name optional */}
                      <div className="space-y-1.5">
                        <label htmlFor="entityName" className="text-[9px] text-slate-500 font-mono uppercase tracking-widest block font-extrabold">
                          Institución / Empresa
                        </label>
                        <input
                          id="entityName"
                          type="text"
                          value={entityName}
                          onChange={(e) => setEntityName(e.target.value)}
                          placeholder="Gobierno Distrital o Razón Social"
                          className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-none py-3 px-4 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/25 transition-all font-sans font-bold"
                        />
                      </div>

                      {/* Entity Type select */}
                      <div className="space-y-1.5">
                        <label id="entityType-label" htmlFor="entityType" className="text-[9px] text-slate-500 font-mono uppercase tracking-widest block font-extrabold">
                          Tipo de Entidad
                        </label>
                        <div className="relative">
                          <select
                            id="entityType"
                            value={entityType}
                            onChange={(e) => setEntityType(e.target.value as any)}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-850 rounded-none py-3 px-4 pr-10 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/25 transition-all appearance-none font-sans cursor-pointer font-bold"
                          >
                            <option value="particular">Empresa Privada / Comercial</option>
                            <option value="municipio">Municipio u Organismo Público</option>
                            <option value="empresa">Consultor Externo / Particular</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                    </div>

                    {/* Service Interest select */}
                    <div className="space-y-1.5">
                      <label id="serviceInterest-label" htmlFor="serviceInterest" className="text-[9px] text-slate-500 font-mono uppercase tracking-widest block font-extrabold">
                        Pilar de Servicio de Interés
                      </label>
                      <div className="relative">
                        <select
                          id="serviceInterest"
                          value={serviceInterest}
                          onChange={(e) => setServiceInterest(e.target.value as any)}
                          className="w-full bg-slate-50 border border-slate-200 text-slate-850 rounded-none py-3 px-4 pr-10 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/25 transition-all appearance-none font-sans cursor-pointer font-bold"
                        >
                          <option value="gestion">Plataformas y Sistemas de Gestión Web</option>
                          <option value="software">Ciencia de Datos & Software a la Medida</option>
                          <option value="seguridad">Infraestructura de Redes & Servidores (Ubiquiti)</option>
                          <option value="consultoria">Consultoría Estratégica / Sesión de Viabilidad</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message detail */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[9px] text-slate-500 font-mono uppercase tracking-widest block font-extrabold">
                        Foco de la Consulta / Mensaje *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Cuéntanos brevemente qué buscas lograr. Por ejemplo: optimizar inventarios, interconectar oficinas comerciales, o diseñar un tablero de analítica de datos."
                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-none py-3.5 px-4 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/25 transition-all font-sans resize-y font-bold"
                      />
                    </div>

                    {/* Submit action */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-100 hover:bg-indigo-600 border border-slate-250 hover:border-indigo-600 disabled:bg-slate-200 text-slate-805 hover:text-white disabled:text-slate-400 font-mono text-xs font-black uppercase tracking-[0.22em] py-4 rounded-none transition-all flex items-center justify-center space-x-2.5 cursor-pointer duration-350 shadow-xs"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin text-indigo-650" />
                          <span>Transmitiendo consulta...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Solicitar Consulta</span>
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="py-12 px-4 text-center space-y-6 flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-indigo-50 border border-indigo-200 p-4.5 rounded-none text-indigo-600 mb-2">
                      <CheckCircle2 className="w-14 h-14" />
                    </div>
                    <div className="space-y-2.5 max-w-lg mx-auto">
                      <h3 className="text-2xl font-display font-black text-slate-900 uppercase tracking-tight">
                        Consulta Recibida
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                        Agradecemos su interés institucional. Su consulta ha sido transmitida bajo canal preferencial de alta prioridad. Nos pondremos en contacto a la brevedad.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-4.5 rounded-none border border-slate-200 text-[10px] font-mono text-slate-505 text-left max-w-md w-full shadow-3xs">
                      <span className="text-indigo-600 font-black block mb-1 uppercase tracking-wider">PROCESADOR DE ENVÍO: COMPLETO</span>
                      <p>UID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
                      <p>DESTINATARIO: 1995cerna@gmail.com</p>
                    </div>

                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-xs font-mono text-indigo-600 hover:text-slate-900 underline font-black transition-all cursor-pointer block pt-2"
                    >
                      [ Enviar otra consulta o diagnóstico ]
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>



      </div>
    </section>
  );
}
