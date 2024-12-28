import React from 'react'
import "./home.css";
import prefil from "../assets/perfil-2.png";
import shapewawes from "../assets/shape-wawes.svg";
import shapecircle from "../assets/shape-circle.svg";
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {
    return (
        <section className='home section' id='home'>
            <div className="home__container container grid section__border">
                <div className="home__data grid">
                    <h1 className="home__title">
                        Hi, I'm<br />
                        <Typewriter
                            words={['Vipul Goyal', 'Web Developer and Programmer']}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    <div className="home__blob grid">
                        <div className="home__perfil">
                            <img src={prefil} alt="home perfil" />
                        </div>
                        <img src={shapewawes} alt="" className="home__shape-wawes" />
                        <img src={shapecircle} alt="" className="home__shape-circle" />
                    </div>

                    <ul className="home__social">
                        <a href="https://www.linkedin.com/in/vipul-goyal-439210257/" target='_blank' className="home__social-link">
                            <i class="ri-linkedin-box-line"></i>
                        </a>
                        <a href="https://github.com/VipulGoyal95" target='_blank' className="home__social-link">
                            <i class="ri-github-line"></i>
                        </a>
                        <a href="mailto://vipulgoyal776@gmail.com" target='_blank' className="home__social-link">
                            <i class="ri-mail-line"></i>
                        </a>
                    </ul>
                </div>

                <div className="home__info">
                    <div>
                        <h3 className="home__info-title">
                            BIOGRAPHY
                        </h3>
                        <p className="home__info-description">
                            Hi, I'm Vipul, Web Developer.
                            I have a passion for coding and building modern applications.
                            I have a background in computer science.
                        </p>
                    </div>
                    <div>
                        <h3 className="home__info-title">
                            CONTACT
                        </h3>
                        <p className="home__info-description">
                            Mathura, Uttar Pradesh<br />
                            vipulgoyal776@gmail.com<br />
                            +91 9520417250<br />
                        </p>
                    </div>
                    <div>
                        <h3 className="home__info-title">
                            SERVICES
                        </h3>
                        <p className="home__info-description">
                            Website Design<br />
                            Full Stack Developer <br />
                            Data Scientist <br />
                        </p>
                    </div>
                </div>
                <div className="home__info">
                    <div>
                        <h3 className="home__info-title">
                            Completed Project
                        </h3>
                        <p className="home__info-number">
                            05+
                        </p>
                    </div>
                    <div>
                        <h3 className="home__info-title">
                            Download Resume
                        </h3>
                        <a href='/vipul_goyal resume.pdf' download="vipul_goyal resume.pdf" className="home__info-number">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home