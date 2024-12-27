import React from 'react'
import "./services.css";

const Services = () => {
    return (
        <section className='services section' id='services'>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid section__border">
                <div className="services__card">
                    <i class="ri-code-line"></i>
                    <h2 className="services__title">
                        Web <br />
                        Designer
                    </h2>
                    <p className="services__description">
                        I create visually appealing and user-friendly websites that are easy to navigate and enjoy.
                    </p>
                    <div className="services__border"></div>
                </div>
                <div className="services__card">
                    <i class="ri-terminal-box-fill"></i>
                    <h2 className="services__title">
                        Full Stack <br />
                        Developer
                    </h2>
                    <p className="services__description">
                        I specialize in building responsive and efficient web applications using modern technologies.
                    </p>
                    <div className="services__border"></div>
                </div>
                <div className="services__card">
                    <i class="ri-terminal-box-fill"></i>
                    <h2 className="services__title">
                        Data <br />
                        Scientist
                    </h2>
                    <p className="services__description">
                        I help analyze and interpret large datasets to make informed decisions.
                    </p>
                    <div className="services__border"></div>
                </div>
            </div>
        </section>
    )
}

export default Services