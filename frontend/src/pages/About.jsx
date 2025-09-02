import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>About Us</h1>
        <p>Welcome to Shopy! We are an e-commerce platform offering a wide range of products.</p>
        {/* Add more about content here */}
      </div>
    </div>
  );
};

export default About;
