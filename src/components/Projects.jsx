import React from 'react';
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
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
                                        <span className='projects__subtitle'>Modern Website</span>
                                        <h1 className="projects__title">web</h1>
                                        <a href="" className="projects__button">
                                            View Details <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="projects__content">
                                    <img src={project2} alt="projects image" className='projects__img' />
                                    <div>
                                        <span className='projects__subtitle'>Modern Website</span>
                                        <h1 className="projects__title">web</h1>
                                        <a href="" className="projects__button">
                                            View Details <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="projects__content">
                                    <img src={project3} alt="projects image" className='projects__img' />
                                    <div>
                                        <span className='projects__subtitle'>Modern Website</span>
                                        <h1 className="projects__title">web</h1>
                                        <a href="" className="projects__button">
                                            View Details <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="projects__content">
                                    <img src={project4} alt="projects image" className='projects__img' />
                                    <div>
                                        <span className='projects__subtitle'>Modern Website</span>
                                        <h1 className="projects__title">Web</h1>
                                        <a href="" className="projects__button">
                                            View Details <i className="ri-arrow-right-line"></i>
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
