import React from 'react'
import html1 from "../assets/html-1.svg";
import css3 from "../assets/css-3.svg";
import javascript from "../assets/logo-javascript.svg";
import react2 from "../assets/react-2.svg";
import git from "../assets/git-icon.svg";
import nodejs from "../assets/nodejs.svg";
import expressjs from "../assets/express-js.svg";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.svg";
import nextjs from "../assets/nextjs.svg";
import "./Skills.css";
const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className="section__title">
            Skills
        </h2>
        <span className="section__subtitle">My favorite skills</span>
        <div className="skills__container container grid section__border">
            <div className="skills__content">
                <h3 className="skills__title">
                <i class="ri-braces-line"></i> Frontent Developer
                </h3>
                <div className="skills__info">
                    <div className="skills__data">
                        <div className="skills__blob">
                            <img src={html1} alt="skills image" />
                        </div>

                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                            <img src={css3} alt="skills image" />
                        </div>

                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                            <img src={javascript} alt="skills image" />
                        </div>

                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                            <img src={react2} alt="skills image" />
                        </div>

                        <h3 className="skills__name">React</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                            <img src={git} alt="skills image" />
                        </div>

                        <h3 className="skills__name">Git</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__content">
                <h3 className="skills__title">
                    <i class="ri-pantone-line"></i> Backend Developer
                </h3>
                <div className="skills__info">
                    <div className="skills__data">
                        <div className="skills__blob">
                            <img src={nodejs} alt="skills image" />
                        </div>

                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                            <img src={expressjs} alt="skills image" />
                        </div>

                        <h3 className="skills__name">Express.js</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                            <img src={mongodb} alt="skills image" />
                        </div>

                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                            <img src={mysql} alt="skills image" />
                        </div>

                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__subtitle">Basic</span>
                    </div>
                    <div className="skills__data">
                        <div className="skills__blob">
                            <img src={nextjs} alt="skills image" />
                        </div>

                        <h3 className="skills__name">Nextjs</h3>
                        <span className="skills__subtitle">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills