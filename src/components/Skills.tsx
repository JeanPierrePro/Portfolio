import React from 'react';
import '../index.css';

const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="title">My <span>Skills</span></h2>
      <div className="wrapper">
        <div className="skill-content">
          <h3 className="skill-title">Languages</h3>
          <div className="skill-box skill-box1">
            <div className="single-skill">
              <span className="topic">react</span>
              <span className="topic">60%</span>
            </div>
            <div className="bar-side">
              <div className="bar bar-1" />
            </div>
            <div className="single-skill">
              <span className="topic">C++</span>
              <span className="topic">50%</span>
            </div>
            <div className="bar-side">
              <div className="bar bar-2" />
            </div>
            <div className="single-skill">
              <span className="topic">Python</span>
              <span className="topic">70%</span>
            </div>
            <div className="bar-side">
              <div className="bar bar-3" />
            </div>
          </div>
        </div>
        <div className="skill-content">
          <h3 className="skill-title">Frameworks</h3>
          <div className="skill-box skill-box2">
            <div className="single-skill">
              <span className="topic">React</span>
              <span className="topic">75%</span>
            </div>
            <div className="bar-side">
              <div className="bar bar-4" />
            </div>
            <div className="single-skill">
              <span className="topic">Node.js</span>
              <span className="topic">65%</span>
            </div>
            <div className="bar-side">
              <div className="bar bar-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
