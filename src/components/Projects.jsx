import React from 'react'
import project1 from "../assests/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
const Projects = () => {
  return (
    <section className='projects section' id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className='section__subtitle'>Most recent work</span>

        <div className="container section__border">
            <div className="projects__container">
                <div>
                    <div className="projects__content">
                        <img src={project1} alt="projects image" />
                        <div>
                            <span className='projects__subtitle'></span>
                            <h1 className="projects__title">web</h1>
                            <a href="" className="projects__button">
                                View Details <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                    <div className="projects__content">
                        <img src={project2} alt="projects image" />
                        <div>
                            <span className='projects__subtitle'></span>
                            <h1 className="projects__title">web</h1>
                            <a href="" className="projects__button">
                                View Details <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                    <div className="projects__content">
                        <img src={project3} alt="projects image" />
                        <div>
                            <span className='projects__subtitle'></span>
                            <h1 className="projects__title">web</h1>
                            <a href="" className="projects__button">
                                View Details <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                    <div className="projects__content">
                        <img src={project4} alt="projects image" />
                        <div>
                            <span className='projects__subtitle'></span>
                            <h1 className="projects__title"></h1>
                            <a href="" className="projects__button">
                                View Details <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects