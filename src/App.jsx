import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Qualification from './components/Qualification'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <main className='main'>
      <Home/>
      <Skills/>
      <Qualification/>
      <Services/>
      <Projects/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default App
