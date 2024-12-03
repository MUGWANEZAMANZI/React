// src/forms/Step1.js
import React, { useState } from 'react';

function Step1({ nextStep, handleChange }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange('name', name); // Pass data back to parent
    nextStep(); // Move to next step
  };

  return (
    <div>
      <h2>Step 1: Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step1;
