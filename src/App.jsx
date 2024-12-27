import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <main className='main'>
      <Home/>
      <Skills/>
      <Services/>
    </main>
    </>
  )
}

export default App
