import React from 'react';
import project1 from "../assets/primebit.png";
import project2 from "../assets/TCU.png";
import project3 from "../assets/SAEwebsite.png";
import project4 from "../assets/yt-clone.png";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import "./Projects.css";

const Projects = () => {
    return (
        <section className='projects section' id='projects'>
            <h2 className="section__title">Projects</h2>
            <span className='section__subtitle'>Most recent work</span>
            <div className="container section__border">
                <Swiper
                    loop={true}
                    spaceBetween={24}
                    cssMode={true}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    breakpoints={{
                        1200: {
                          slidesPerView: 2,
                          spaceBetween: -56,
                        },
                      }}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="projects__container mySwiper"
                >
                    <div className="projects__container">
                        <div>
                            <SwiperSlide>
                                <div className="projects__content">
                                    <img src={project1} alt="projects image" className='projects__img' />
                                    <div>
                                        <span className='projects__subtitle'>Auction Platform</span>
                                        <h1 className="projects__title">Full Stack Project</h1>
                                        <a href="https://primebid.vercel.app/" target='_blank' className="projects__button">
                                            View Demo <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="projects__content">
                                    <img src={project2} alt="projects image" className='projects__img' />
                                    <div>
                                        <span className='projects__subtitle'>Telematic Control Unit</span>
                                        <h1 className="projects__title">Software and Hardware Project</h1>
                                        <a href="https://github.com/VipulGoyal95/arduino_code" className="projects__button">
                                            View Demo <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="projects__content">
                                    <img src={project3} alt="projects image" className='projects__img' />
                                    <div>
                                        <span className='projects__subtitle'>SAE NIT Kurukshetra Website</span>
                                        <h1 className="projects__title">Frontend Project</h1>
                                        <a href="https://sae-website-e6d0f.web.app/" className="projects__button">
                                            View Demo <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="projects__content">
                                    <img src={project4} alt="projects image" className='projects__img' />
                                    <div>
                                        <span className='projects__subtitle'>Youtube Clone</span>
                                        <h1 className="projects__title">Web Development</h1>
                                        <a href="" className="projects__button">
                                            View Demo <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </div>
                    {/* Custom navigation buttons */}
                    <div className="custom-prev"><i className="ri-arrow-left-line"></i></div>
                    <div className="custom-next"><i className="ri-arrow-right-line"></i></div>
                </Swiper>
            </div>
        </section>
    );
};

export default Projects;
