import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, Star, Sparkles } from "lucide-react";

// --- 1. DICIONÁRIO DE ÍCONES ---
const techIcons: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Stripe": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Framer Motion": "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png",
  "API": "https://cdn-icons-png.flaticon.com/512/10169/10169724.png",
  "CSS Modules": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
};

// ==================================================================================
//  👇👇👇 ÁREA DE EDIÇÃO DOS PROJETOS 👇👇👇
// ==================================================================================

const projectsData = [
  
  // --------------------------------------------------------------------------------
  // 🌟 DESTAQUE 1: CATEGORIA EMPRESAS (Universal)
  // Este é o projeto principal que aparece na tela inicial "Seleção Premium"
  // --------------------------------------------------------------------------------
  {
    id: 1,
    title: "Website de Organização de Eventos",
    category: "Empresas",
    description: "Solução completa para gestão de eventos com sistema de reservas online.",
    image: "/projetos/Empresas/Universal.jpeg", 
    tags: ["React", "TypeScript", "CSS Modules", "Firebase"],
    
    featured: true, // <--- MANTENHA TRUE PARA APARECER NO TOPO
    
    links: { 
      demo: "https://universal-kappa-six.vercel.app/", 
      code: "https://github.com/JeanPierrePro/Universal" 
    },
  },

  // --------------------------------------------------------------------------------
  // 🌟 DESTAQUE 2: CATEGORIA ESCOLAR (Seu TCC)
  // --------------------------------------------------------------------------------
  {
    id: 3, // ID único
    title: "Sistema de Gestão Escolar",
    category: "Escolar",
    description: "Plataforma para gerenciamento de notas e frequências (TCC).",
    image: "/projetos/Escolar/NOME_DA_SUA_FOTO.jpg", // <--- EDITE O NOME AQUI
    tags: ["Python", "Flask", "SQL"],
    
    featured: false, // <--- MANTENHA TRUE PARA APARECER NO TOPO
    
    links: { 
      demo: "#", 
      code: "" // Código privado (deixe vazio)
    },
  },

  // --------------------------------------------------------------------------------
  // 🌟 DESTAQUE 3: CATEGORIA PESSOAL (App de Clima)
  // --------------------------------------------------------------------------------
  {
    id: 4, // ID único
    title: "App de Clima em Tempo Real",
    category: "Pessoal",
    description: "Aplicação que consome API externa de meteorologia.",
    image: "/projetos/Pessoal/NOME_DA_SUA_FOTO.jpg", // <--- EDITE O NOME AQUI
    tags: ["React", "API", "CSS Modules"],
    
    featured: false, // <--- MANTENHA TRUE PARA APARECER NO TOPO
    
    links: { 
      demo: "#", 
      code: "https://github.com/JeanPierrePro/app-clima" 
    },
  },

  // ==============================================================================
  // 📂 OUTROS PROJETOS (SECUNDÁRIOS)
  // Estes só aparecem quando a pessoa clica nos botões de filtro específicos
  // ==============================================================================
  
  {
    id: 2,
    title: "Website para Cabeleireiro",
    category: "Empresas",
    description: "Website moderno e responsivo para salão de beleza.",
    image: "/projetos/Empresas/Olimpo.jpeg",
    tags: ["React", "CSS Modules", "Firebase", "TypeScript"],
    
    featured: true, // <--- FALSE: NÃO APARECE NA TELA INICIAL
    
    links: { 
      demo: "#", 
      code: "" 
    },
  },

  // Você pode adicionar mais projetos aqui embaixo copiando o bloco acima...
];

// ==================================================================================
//  👆👆👆 FIM DA EDIÇÃO DOS PROJETOS 👆👆👆
// ==================================================================================

const Projects = () => {
  const [filter, setFilter] = useState("Destaques");

  const filteredProjects = filter === "Destaques" 
    ? projectsData.filter(project => project.featured === true)
    : projectsData.filter(project => project.category === filter);

  const filters = ["Destaques", "Pessoal", "Escolar", "Empresas"];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black-rich/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="text-center mb-12">
          {filter === "Destaques" ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key="header-destaques"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="text-gold-500" size={20} />
                <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">
                  Top 3 Projetos
                </span>
                <Sparkles className="text-gold-500" size={20} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black-rich dark:text-white">
                Minha Seleção Premium
              </h2>
            </motion.div>
          ) : (
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key="header-normal"
              className="text-3xl md:text-4xl font-bold text-black-rich dark:text-white mt-2"
            >
              Projetos: <span className="text-gold-500">{filter}</span>
            </motion.h2>
          )}
        </div>

        {/* BOTÕES DE FILTRO */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 flex items-center gap-2
                ${filter === item 
                  ? "bg-gold-500 border-gold-500 text-white shadow-lg" 
                  : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gold-500 hover:text-gold-500"
                }`}
            >
              {item === "Destaques" && <Star size={16} fill={filter === "Destaques" ? "white" : "currentColor"} />}
              {item}
            </button>
          ))}
        </div>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-white dark:bg-black-lighter rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col"
              >
                {/* IMAGEM */}
                <div className="relative h-52 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                    
                    {/* Botão GitHub */}
                    {project.links.code && (
                      <a 
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-black-rich hover:bg-gold-500 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                        title="Ver Código no GitHub"
                      >
                        <Github size={22} />
                      </a>
                    )}

                    {/* Botão Link Externo */}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full text-black-rich hover:bg-gold-500 hover:text-white transition-all transform hover:scale-110 shadow-lg"
                        title="Acessar Site Online"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* CONTEÚDO */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-gold-500 uppercase tracking-wider border border-gold-500/30 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <Folder size={16} className="text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black-rich dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                    {project.tags.map((tag) => (
                      <div 
                        key={tag} 
                        className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full"
                      >
                        {techIcons[tag] && (
                          <img 
                            src={techIcons[tag]} 
                            alt={tag} 
                            className="w-4 h-4 object-contain" 
                          />
                        )}
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                            {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;