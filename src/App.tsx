import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact"; // <--- Importe aqui

function App() {
  return (
    <div className="bg-white dark:bg-black-rich min-h-screen text-black-rich dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Certificates />
      <Timeline />
      <Contact /> {/* <--- Adicione aqui */}
    </div>
  );
}

export default App;