import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Code2, Sun, Moon } from "lucide-react"; // Adicionei Sun e Moon
import { useTheme } from "../hooks/useTheme"; // Importe o hook que criamos

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Usando a lógica do tema

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", to: "home" },
    { name: "Projetos", to: "projects" },
    { name: "Certificados", to: "certificates" },
    { name: "Trajetória", to: "timeline" },
    { name: "Contato", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 dark:bg-black-rich/90 backdrop-blur-md shadow-md py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer font-bold text-2xl text-black-rich dark:text-white transition-colors">
          <Code2 className="text-gold-500" size={32} />
          <span>Jean<span className="text-gold-500">.Dev</span></span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-black-rich dark:text-gray-300 font-medium hover:text-gold-500 dark:hover:text-gold-500 transition-colors cursor-pointer text-sm uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Botão de Troca de Tema */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-black-lighter transition-colors text-black-rich dark:text-gold-500"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Botão Mobile (Menu + Tema) */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-black-rich dark:text-gold-500">
             {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className="text-black-rich dark:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black-rich shadow-lg py-4 flex flex-col items-center gap-4 border-t dark:border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-black-rich dark:text-gray-300 font-medium hover:text-gold-500 py-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;