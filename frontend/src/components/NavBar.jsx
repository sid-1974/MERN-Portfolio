import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import "../css/Main.css";
import HamburgerButton from './HamburgerButton';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolling, setIsScrolling] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const sections = ['home', 'about', 'service', 'contact'];
    let currentSection = '';

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const { offsetTop, offsetHeight } = sectionElement;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection = section;
        }
      }
    });

    setActiveLink(currentSection);
  };

  const handleClick = (section) => {
    setIsScrolling(false);
    setActiveLink(section);
    setIsMenuOpen(false);

    setTimeout(() => setIsScrolling(true), 500);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    document.documentElement.classList.add('smooth-scroll');

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isScrolling) {
      document.documentElement.classList.add('smooth-scroll');
      document.documentElement.classList.remove('no-scroll');
    } else {
      document.documentElement.classList.remove('smooth-scroll');
      document.documentElement.classList.add('no-scroll');
    }
  }, [isScrolling]);

  return (
    <nav className="navbar">
      <div className="logo">TRAINER</div>
      <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="home"
            smooth={isScrolling}
            duration={500}
            onSetActive={() => handleClick('home')}
            className={activeLink === 'home' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={isScrolling}
            duration={500}
            onSetActive={() => handleClick('about')}
            className={activeLink === 'about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="service"
            smooth={isScrolling}
            duration={500}
            onSetActive={() => handleClick('service')}
            className={activeLink === 'service' ? 'active' : ''}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={isScrolling}
            duration={500}
            onSetActive={() => handleClick('contact')}
            className={activeLink === 'contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
