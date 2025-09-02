import React from 'react';
import Navbar from '../components/Navbar';

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Checkout</h1>
        <p>Proceed with your payment and order details here.</p>
        {/* Add checkout form or payment integration here */}
      </div>
    </div>
  );
};

export default Checkout;
