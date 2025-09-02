import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Contact Us</h1>
        <p>Get in touch with us!</p>
        {/* Add contact form or details here */}
      </div>
    </div>
  );
};

export default Contact;
