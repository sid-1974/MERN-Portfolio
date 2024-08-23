import React from 'react';
import "../css/Main.css";

function Services() {
  return (
    <section id="service" className="services-1">
      <div className="services-header">
        <h1>Our Services</h1>
      </div>
      <div className="services-content">
        <div className="service-item">
          <h2>Service 1</h2>
          <p>Description of Service 1.</p>
        </div>
        <div className="service-item">
          <h2>Service 2</h2>
          <p>Description of Service 2.</p>
        </div>
        <div className="service-item">
          <h2>Service 3</h2>
          <p>Description of Service 3.</p>
        </div>
        <div className="service-item">
          <h2>Service 4</h2>
          <p>Description of Service 4.</p>
        </div>
        <div className="service-item">
          <h2>Service 5</h2>
          <p>Description of Service 4.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;

