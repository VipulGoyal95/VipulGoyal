import React from 'react'
import Qualification from './Qualification';

const Qualification = () => {
  return (
    <section className='qualification section' id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">Education</span>
        <div className="qualification__container container grid section__border">
            <div className="qualification__content">
                <h3 className="qualification__title">
                    <i class="ri-pencil-ruler-2-line"></i>Education
                </h3>
                <div className="qualification__info">
                    <div>
                        <h3 className="qualification__name">
                            Bachelor of Technology in Information Technology
                        </h3>
                        <span className="qualification__country">National Institute of Technology, Kurukshetra</span>
                        <span className="qualification__year">2022-2026</span>
                    </div>
                    <div>
                        <h3 className="qualification__name">
                            XII - CBSE
                        </h3>
                        <span className="qualification__country">Kanha Makhan Public School, Mathura</span>
                        <span className="qualification__year">2021-2022</span>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Qualification