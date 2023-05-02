import React from 'react';
import './Grab.css';

const Grab = () => {
  return (
    <div className="grab">
      <div className="">
        <h3 className="text-grab">GRAB OUR NEWSLETTER</h3>
        <p>To receive latest offers and discounts from the shop.</p>
        <input
          className="grab-email"
          type="email"
          placeholder="Enter your email"
        />
        <input type="button" value="Submit" className="btn-grab" />
      </div>
    </div>
  );
};

export default Grab;
