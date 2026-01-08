import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

// Lista dos seus certificados (Substitua depois pelos reais)
const certificatesData = [
  {
    id: 1,
    title: "Desenvolvimento Web Full Stack",
    issuer: "Udemy / Cod3r",
    date: "Dez 2024",
    link: "#", // Link para visualizar o certificado (se tiver)
  },
  {
    id: 2,
    title: "React com TypeScript Avançado",
    issuer: "Rocketseat",
    date: "Out 2024",
    link: "#",
  },
  {
    id: 3,
    title: "Introdução a Python e Flask",
    issuer: "Curso em Vídeo",
    date: "Ago 2024",
    link: "#",
  },
  {
    id: 4,
    title: "English for Developers",
    issuer: "Cambridge Online",
    date: "Jun 2024",
    link: "#",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-white dark:bg-black-rich transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Título */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-12 bg-gold-500 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-black-rich dark:text-white">
            Certificados e <span className="text-gold-500">Qualificações</span>
          </h2>
        </div>

        {/* Grid de Certificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              key={cert.id}
              className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-black-lighter hover:border-gold-500/50 dark:hover:border-gold-500/50 transition-all group shadow-sm hover:shadow-lg"
            >
              {/* Ícone de Medalha */}
              <div className="p-3 bg-white dark:bg-black-rich rounded-full text-gold-500 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors">
                <Award size={28} />
              </div>

              {/* Informações */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black-rich dark:text-white group-hover:text-gold-500 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1 font-medium">
                  {cert.issuer}
                </p>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>

                  {/* Botão Ver Credencial (Opcional) */}
                  {cert.link && (
                    <a href={cert.link} className="text-sm font-semibold text-gold-500 flex items-center gap-1 hover:underline">
                      Ver Credencial <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;