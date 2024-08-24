import React, { useState } from 'react';
import "../css/Main.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    number: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className='contact-1'>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className='contact-form'>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="Number"
          value={formData.number}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          id="comments"
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
