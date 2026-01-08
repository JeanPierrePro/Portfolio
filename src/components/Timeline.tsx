import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Star } from "lucide-react";

// Dados organizados do INÍCIO (2022) para o PRESENTE (2025)
const timelineData = [
  {
    year: "2022",
    title: "Descobrindo a Programação",
    description: "Primeiro contato com HTML, CSS e Python. Criação dos primeiros scripts e sites simples.",
    type: "start", 
  },
  {
    year: "2023",
    title: "Início da Faculdade",
    description: "Ingresso no curso de Ciência da Computação. Primeiros passos com algoritmos e lógica de programação.",
    type: "education",
  },
  {
    year: "2024",
    title: "Especialização em Front-end",
    description: "Aprofundamento em React, TypeScript e Design Systems através de bootcamps intensivos.",
    type: "education",
  },
  {
    year: "2025",
    title: "Freelancer Full Stack",
    description: "Desenvolvendo soluções web completas para clientes reais, focando em React e arquitetura escalável.",
    type: "work",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-black-rich/50 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black-rich dark:text-white">
            Minha <span className="text-gold-500">Trajetória</span>
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Acompanhe minha evolução ano após ano
          </p>
        </div>

        {/* Linha do Tempo Container */}
        <div className="relative mx-auto max-w-4xl">
          
          {/* --- CORREÇÃO AQUI --- 
              Antes estava: bg-gold-200 (que não existe)
              Agora é: bg-gray-300 (cinza visível no claro) dark:bg-gold-500/30 (dourado no escuro)
          */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-300 dark:bg-gold-500/30 -translate-x-1/2"></div>

          {/* Itens */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }} 
                className={`relative flex items-center md:justify-between ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                
                {/* Espaço Vazio (para alinhar no Desktop) */}
                <div className="hidden md:block w-5/12"></div>

                {/* O Ponto Central (Ícone) */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gold-500 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/50 border-4 border-white dark:border-black-rich">
                    {item.type === "work" ? (
                      <Briefcase size={16} className="text-white" />
                    ) : item.type === "education" ? (
                      <GraduationCap size={16} className="text-white" />
                    ) : (
                      <Star size={16} className="text-white" />
                    )}
                  </div>
                </div>

                {/* O Card com Conteúdo */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className={`p-6 bg-white dark:bg-black-lighter rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:border-gold-500/50 transition-colors relative group
                    ${index % 2 === 0 ? "md:text-left" : "md:text-right"}
                  `}>
                    
                    {/* Seta do Card */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-black-lighter rotate-45 border-b border-l border-gray-100 dark:border-gray-800
                      ${index % 2 === 0 
                        ? "-left-2 border-l border-b" 
                        : "-right-2 border-r border-t border-l-0 border-b-0"}
                    `}></div>

                    <span className="text-gold-500 font-bold text-sm tracking-wider block mb-1">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-black-rich dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;