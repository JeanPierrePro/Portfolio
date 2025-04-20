import React from 'react';
import perfil from '../assets/perfil.jpg';


const About: React.FC = () => (
  <section className="about" id="about">
    <h2 className="title">About <span>Me</span></h2>
    <img src={perfil} alt="Perfil" className="aboutImg" />
    <div className="text-content2">
      <h2>backend Developer</h2>
      <p>Sou um desenvolvedor back-end em início de carreira, entusiasmado por explorar o mundo da programação. Atualmente, estou aprendendo Java, Python e C++, e também tenho noções de HTML, CSS e JavaScript. Estou me aprofundando em React, pois quero expandir meu conhecimento em desenvolvimento de interfaces. Meu objetivo é construir projetos que não apenas atendam às necessidades dos usuários, mas também me desafiem a crescer e melhorar minhas habilidades. Estou aberto a novas oportunidades e ansioso para aprender e colaborar com outros profissionais da área</p>
      <button className="btn">Read More</button>
    </div>
  </section>
);

export default About;