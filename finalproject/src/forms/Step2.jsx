// src/forms/Step2.js
import React, { useState } from 'react';

function Step2({ nextStep, prevStep, handleChange }) {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange('address', address); // Pass data back to parent
    nextStep(); // Move to next step
  };

  return (
    <div>
      <h2>Step 2: Enter Your Address</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step2;
