import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

// 1. Definição dos dados dos projetos (Simulando um banco de dados)
const projectsData = [
  {
    id: 1,
    title: "E-commerce de Luxo",
    category: "Pessoal",
    description: "Uma loja virtual completa com carrinho de compras, pagamentos e painel administrativo.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Stripe"],
    links: { demo: "#", code: "#" },
  },
  {
    id: 2,
    title: "Sistema de Gestão Escolar",
    category: "Escolar",
    description: "Plataforma para gerenciamento de notas e frequências desenvolvida como TCC.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Flask", "SQL"],
    links: { demo: "#", code: "#" },
  },
  {
    id: 3,
    title: "Landing Page Corporativa",
    category: "Empresas",
    description: "Site institucional desenvolvido para uma empresa de consultoria financeira.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind", "Framer Motion"],
    links: { demo: "#", code: "#" },
  },
  {
    id: 4,
    title: "App de Clima",
    category: "Pessoal",
    description: "Aplicação que consome API externa para mostrar a previsão do tempo em tempo real.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "API", "CSS Modules"],
    links: { demo: "#", code: "#" },
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("Todos");

  // Filtra os projetos com base no botão clicado
  const filteredProjects = projectsData.filter(
    (project) => filter === "Todos" || project.category === filter
  );

  const filters = ["Todos", "Pessoal", "Escolar", "Empresas"];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black-rich/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold-500 font-semibold tracking-wider uppercase text-sm"
          >
            Portfólio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-black-rich dark:text-white mt-2"
          >
            Meus Projetos
          </motion.h2>
        </div>

        {/* Botões de Filtro */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 
                ${filter === item 
                  ? "bg-gold-500 border-gold-500 text-white shadow-lg" 
                  : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gold-500 hover:text-gold-500"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-white dark:bg-black-lighter rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                {/* Imagem do Projeto */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                    <a href={project.links.code} className="p-2 bg-white rounded-full hover:bg-gold-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.links.demo} className="p-2 bg-white rounded-full hover:bg-gold-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-gold-500 uppercase tracking-wider border border-gold-500/30 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <Folder size={16} className="text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black-rich dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags das Tecnologias */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;