import React from 'react';
import perfil from '../assets/perfil.jpg';
import '../index.css';


const Home: React.FC = () => (
  <section className="home" id="home">
    <div className="text-content">
      <h1>I'm Jean Pierre</h1>
      <div className="text-animation">
        <h2>back Developer</h2>
      </div>
      <p>Olá! Eu sou Jean Pierre, um desenvolvedor em início de carreira. Estou aprendendo a programar em Java, Python e C++, e tenho noções de HTML, CSS e JavaScript. Atualmente, estou me aprofundando em React. Meu objetivo é explorar diferentes áreas do desenvolvimento, desde aplicações desktop até projetos de software variados. Estou animado para aplicar o que aprendi e continuar crescendo na área!</p>
      <div className="btn-section">
        <button className="btn">Hire me</button>
        <button className="btn">Let's Talk</button>
      </div>
      <div className="social-media">
        <i className='bx bxl-twitter' style={{ '--vlr': 7 } as React.CSSProperties}></i>
        <i className='bx bxl-facebook' style={{ '--vlr': 8 } as React.CSSProperties}></i>
        <i className='bx bxl-youtube' style={{ '--vlr': 9 } as React.CSSProperties}></i>
      </div>
    </div>
    <img src={perfil} alt="Perfil" />
  </section>
);

export default Home;