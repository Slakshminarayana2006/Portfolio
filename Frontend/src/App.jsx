import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {

   
  
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </>
  )
}

export default App
