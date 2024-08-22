import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import "../css/Main.css";

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolling, setIsScrolling] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Consider middle of viewport for better accuracy

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
    setIsScrolling(false); // Disable smooth scrolling on click
    setActiveLink(section);

    // Reset smooth scrolling after click
    setTimeout(() => setIsScrolling(true), 500); // Adjust timeout to match the scroll duration
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Set initial scroll behavior
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
      <ul className="nav-links">
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
