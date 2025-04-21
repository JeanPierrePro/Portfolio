// src/App.tsx
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certificates from './components/Certificates';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Education />
      <Certificates />
      <Skills />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
