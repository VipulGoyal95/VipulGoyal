import React from 'react'
import "./Footer.css";
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Vipul</h1>
                <p>Web Developer</p>

                <ul className='footer__list'>
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>

                <ul className="footer__social">
                    <a href="" target='_blank' className="footer__social-link">
                        <i class="ri-linkedin-box-line"></i>
                    </a>
                    <a href="" target='_blank' className="footer__social-link">
                        <i class="ri-github-line"></i>
                    </a>
                    <a href="" target='_blank' className="footer__social-link">
                        <i class="ri-mail-line"></i>
                    </a>
                </ul>

                <span className="footer__copy">
                    &#169; copyright vipulgoyal. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer