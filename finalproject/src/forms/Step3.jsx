// src/forms/Step3.js
import React, { useState } from 'react';

function Step3({ prevStep, formData }) {
  const [payment, setPayment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    console.log(formData, payment); // Handle final form submission
  };

  return (
    <div>
      <h2>Step 3: Enter Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Payment Details"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          required
        />
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Review Your Information:</h3>
        <p>Name: {formData.name}</p>
        <p>Address: {formData.address}</p>
        <p>Payment: {payment}</p>
      </div>
    </div>
  );
}

export default Step3;
