// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import './index.css';            // aqui entra o seu styles.css

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
    </>
  );
};

export default App;
