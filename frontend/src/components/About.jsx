import React from 'react';
import "../css/Main.css";

function About() {
  return (
    <section id="about" className='about-1'>
      <div className="about-header">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="content-item">
          <h2>Section 1</h2>
          <p>Content for the first section.</p>
        </div>
        <div className="content-item">
          <h2>Section 2</h2>
          <p>Content for the second section.</p>
        </div>
        <div className="content-item">
          <h2>Section 3</h2>
          <p>Content for the third section.</p>
        </div>
      </div>
    </section>
  );
}

export default About;

