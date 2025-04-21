import React from 'react';
import '../index.css';

const Education: React.FC = () => (
  <section className="education" id="education">
    <h2 className="title">My <span>Education</span></h2>
    <div className="row">
      <div className="column">
        <h2>Education</h2>
        <div className="box">
          <div className="education-content">
            <div className="content">
              <div className="year">2021-2022 <i className='bx bxs-calendar'></i></div>
              <h3>Curso de Desenvolvimento Web</h3>
              <p>Participei de um curso focado em desenvolvimento web, onde aprendi os fundamentos de HTML, CSS e JavaScript, além de introduções a frameworks como React.</p>
            </div>
          </div>
          <div className="education-content">
            <div className="content">
              <div className="year">2022-2023 <i className='bx bxs-calendar'></i></div>
              <h3>Curso de Programação</h3>
              <p>Estou estudando programação em Java, Python e C++, adquirindo habilidades de lógica de programação e resolução de problemas.</p>
            </div>
          </div>
          <div className="education-content">
            <div className="content">
              <div className="year">2023 <i className='bx bxs-calendar'></i></div>
              <h3>Autodidata em Desenvolvimento</h3>
              <p>Atualmente, estou aprendendo de forma autodidata, focando em projetos práticos e melhorando minhas habilidades em programação e desenvolvimento de software.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <h2>Certificações</h2>
        <div className="box">
          <div className="education-content">
            <div className="content">
              <div className="year">2023 <i className='bx bxs-calendar'></i></div>
              <h3>Certificado em Python</h3>
              <p>Concluí um curso de certificação em Python, onde aprendi a construir aplicações simples e entender a lógica por trás da linguagem.</p>
            </div>
          </div>
          <div className="education-content">
            <div className="content">
              <div className="year">2023 <i className='bx bxs-calendar'></i></div>
              <h3>Certificado em JavaScript</h3>
              <p>Participei de um workshop sobre JavaScript, focando em como utilizá-lo para interatividade em páginas web.</p>
            </div>
          </div>
          <div className="education-content">
            <div className="content">
              <div className="year">2023 <i className='bx bxs-calendar'></i></div>
              <h3>Curso de React</h3>
              <p>Atualmente estou fazendo um curso de React para desenvolver habilidades em construção de interfaces de usuário.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
