import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-black-rich transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black-rich dark:text-white">
            Vamos <span className="text-gold-500">Conversar?</span>
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Estou disponível para novos projetos e oportunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Lado Esquerdo: Informações de Contato */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-black-rich dark:text-white mb-6">
              Entre em contato
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Tem uma ideia inovadora ou quer tirar um projeto do papel? 
              Me mande uma mensagem! Responderei o mais breve possível.
            </p>

            <div className="space-y-6">
              {/* Item: Email */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 dark:bg-black-lighter rounded-full flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">E-mail</p>
                  <p className="font-semibold text-black-rich dark:text-white">jeanpierreaprogramador@gmail.com</p>
                </div>
              </div>

              {/* Item: Localização */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 dark:bg-black-lighter rounded-full flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Localização</p>
                  <p className="font-semibold text-black-rich dark:text-white">Portugal</p>
                </div>
              </div>

              {/* Item: Telefone (Opcional) */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 dark:bg-black-lighter rounded-full flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Telefone / WhatsApp</p>
                  <p className="font-semibold text-black-rich dark:text-white">+351 937 363 715</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: Formulário */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-black-lighter p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
            {/* PARA FUNCIONAR O ENVIO DE EMAIL:
               1. Crie uma conta no site 'formspree.io' (é grátis).
               2. Crie um novo formulário lá.
               3. Copie o link que eles te derem e cole dentro de action="" abaixo.
               Exemplo: action="https://formspree.io/f/xeqwoplk"
            */}
            <form action="https://formspree.io/f/SEU_CODIGO_AQUI" method="POST" className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black-rich border border-gray-200 dark:border-gray-700 text-black-rich dark:text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  placeholder="Como você se chama?"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Seu E-mail</label>
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black-rich border border-gray-200 dark:border-gray-700 text-black-rich dark:text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  placeholder="exemplo@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
                <textarea 
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-black-rich border border-gray-200 dark:border-gray-700 text-black-rich dark:text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
              >
                Enviar Mensagem
                <Send size={20} />
              </button>

            </form>
          </motion.div>

        </div>
        
        {/* Rodapé Simples */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-20 pt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
                © 2026 Jean Uchiha. Todos os direitos reservados.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;