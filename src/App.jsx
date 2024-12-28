import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Qualification from './components/Qualification'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Scrollup from './components/Scrollup'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionClass = document.querySelector(
          `.nav__menu a[href*=${sectionId}]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionClass?.classList.add("active-link");
        } else {
          sectionClass?.classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className='main'>
        <Home />
        <Skills />
        <Qualification />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Scrollup/>
    </>
  )
}

export default App
