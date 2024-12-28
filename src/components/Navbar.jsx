import React, { useState, useEffect } from 'react'
import "./navbar.css";

const Navbar = () => {
    const [showmenu, setShowmenu] = useState(false);
    const darkTheme = "dark-theme";
    const iconTheme = "ri-sun-line";

    // State for the current theme and icon
    const [theme, setTheme] = useState("light");
    const [icon, setIcon] = useState("ri-moon-line");

    // Load saved theme and icon from localStorage
    useEffect(() => {
        const selectedTheme = localStorage.getItem("selected-theme");
        const selectedIcon = localStorage.getItem("selected-icon");

        if (selectedTheme && selectedTheme === "dark") {
            document.body.classList.add("dark-theme");
            setTheme(selectedTheme);
        }
        else if (selectedTheme && selectedTheme === "light") {
            document.body.classList.remove("dark-theme");
            setTheme(selectedTheme);
        }

        if (selectedIcon) {
            setIcon(selectedIcon);
        }
    }, []);

    const toggleTheme = () => {
        // Toggle theme and icon
        const newTheme = theme === "dark" ? "light" : "dark";
        const newIcon = icon === "ri-sun-line" ? "ri-moon-line" : "ri-sun-line";

        // Update the body class
        if (newTheme === "dark") {
            document.body.classList.add(darkTheme);
        } else {
            document.body.classList.remove(darkTheme);
        }

        if (newIcon === "ri-sun-line") {
            document.getElementById("theme-button").classList.remove("ri-moon-line");
            document.getElementById("theme-button").classList.add("ri-sun-line");
        }
        else {
            document.getElementById("theme-button").classList.remove("ri-sun-line");
            document.getElementById("theme-button").classList.add("ri-moon-line");
        }

        // Update state and localStorage
        setTheme(newTheme);
        setIcon(newIcon);
        localStorage.setItem("selected-theme", newTheme);
        localStorage.setItem("selected-icon", newIcon);
    };

    useEffect(() => {
        const header = document.getElementById("header");

        const handleScroll = () => {
            if (window.scrollY >= 50) {
                header?.classList.add("bg-header");
            } else {
                header?.classList.remove("bg-header");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className='header' id="header">
            <nav className='nav container'>
                <a href="#" className='nav__title'>
                    Vipul
                </a>
                <div className={`nav__menu ${showmenu ? 'show-menu' : ''}`} id='nav-menu'>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href="#home" className='active-link nav__link ' onClick={() => setShowmenu(false)}>
                                <i class="ri-home-5-line"></i> Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#skills" className='nav__link' onClick={() => setShowmenu(false)}>
                                <i class="ri-trophy-line"></i> Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#qualification" className='nav__link' onClick={() => setShowmenu(false)}>
                                <i class="ri-book-open-line"></i> Qualification
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#services" className='nav__link' onClick={() => setShowmenu(false)}>
                                <i class="ri-briefcase-line"></i> Services
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#projects" className='nav__link' onClick={() => setShowmenu(false)}>
                                <i class="ri-image-line"></i> Projects
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#contact" className='nav__link' onClick={() => setShowmenu(false)}>
                                <i class="ri-chat-3-line"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close" onClick={() => setShowmenu(false)}>
                        <i class="ri-close-line"></i>
                    </div>
                </div>
                <div className="nav__buttons">
                    <i class="ri-moon-line change-theme" id='theme-button' onClick={toggleTheme}></i>
                    <div className="nav__toggle" id="nav-toggle" onClick={() => setShowmenu(true)}>
                        <i class="ri-menu-4-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar