import React from 'react';
import '../css/HamburgerButton.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';





function HamburgerButton({ isOpen, onClick }) {
  return (
    <button className="hamburger-button" onClick={onClick}>
      <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
    </button>
  );
}

export default HamburgerButton;

