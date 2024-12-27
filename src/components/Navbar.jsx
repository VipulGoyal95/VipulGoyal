import React, { useState } from 'react'
import "./navbar.css";

const Navbar = () => {
    const [showmenu, setShowmenu] = useState(false);
    return (
        <header className='header' id="header">
            <nav className='nav container'>
                <a href="#">
                    Vipul
                </a>
                <div className={`nav__menu ${showmenu ? 'show-menu' : ''}`} id='nav-menu'>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href="#home" className='nav__link' onClick={()=>setShowmenu(false)}>
                                <i class="ri-home-5-line"></i> Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#skills" className='nav__link' onClick={()=>setShowmenu(false)}>
                                <i class="ri-trophy-line"></i> Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#qualifications" className='nav__link' onClick={()=>setShowmenu(false)}>
                                <i class="ri-book-open-line"></i> Qualification
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#services" className='nav__link' onClick={()=>setShowmenu(false)}>
                                <i class="ri-briefcase-line"></i> Services
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#Projects" className='nav__link' onClick={()=>setShowmenu(false)}>
                                <i class="ri-image-line"></i> Projects
                            </a>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close" onClick={() => setShowmenu(false)}>
                        <i class="ri-close-line"></i>
                    </div>
                </div>
                <div className="nav__buttons">
                    {/* <i class="ri-moon-line change-theme" id='theme-button'></i> */}
                    <div className="nav__toggle" id="nav-toggle" onClick={() => setShowmenu(true)}>
                        <i class="ri-menu-4-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar