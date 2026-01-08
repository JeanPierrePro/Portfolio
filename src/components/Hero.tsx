import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-black-rich pt-20 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo: Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-500 font-semibold tracking-wider uppercase mb-2 block">
            Desenvolvedor Full Stack
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-black-rich dark:text-white mb-6 leading-tight transition-colors">
            Olá, eu sou <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">
              Jean Uchiha
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed transition-colors">
            Transformo ideias complexas em experiências digitais elegantes. 
            Especialista em criar soluções web modernas e performáticas.
          </p>
          
          <div className="flex gap-4 items-center">
            {/* Botão Ver Projetos */}
            <Link to="projects" smooth={true} duration={500}>
              <button className="bg-black-rich text-white dark:bg-gold-500 dark:text-black-rich px-8 py-3 rounded-full font-medium hover:bg-gold-500 dark:hover:bg-gold-400 transition-all shadow-lg flex items-center gap-2 group">
                Ver Projetos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            {/* --- REDES SOCIAIS --- */}
            <div className="flex gap-4 items-center px-4 border-l border-gray-300 dark:border-gray-700 ml-2">
              
              {/* GitHub */}
              <a 
                href="https://github.com/JeanUchiha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black-rich dark:text-white hover:text-gold-500 dark:hover:text-gold-500 transition-colors transform hover:scale-110"
                title="Meu GitHub"
              >
                <Github size={24} />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black-rich dark:text-white hover:text-gold-500 dark:hover:text-gold-500 transition-colors transform hover:scale-110"
                title="Meu LinkedIn"
              >
                <Linkedin size={24} />
              </a>

              {/* Instagram (Opcional) */}
              <a 
                href="https://instagram.com/seu.insta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black-rich dark:text-white hover:text-gold-500 dark:hover:text-gold-500 transition-colors transform hover:scale-110"
                title="Instagram Profissional"
              >
                <Instagram size={24} />
              </a>

            </div>
          </div>
        </motion.div>

        {/* Lado Direito: Foto */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-gold-200 dark:bg-gold-500/20 rounded-full blur-3xl opacity-30 transform translate-x-4 translate-y-4"></div>
          
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-black-lighter shadow-2xl transition-colors">
            {/* SUA FOTO AQUI */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
              alt="Jean Uchiha" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;