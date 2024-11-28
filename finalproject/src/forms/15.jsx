// src/forms/CheckboxForm.js
import React, { useState } from "react";

function CheckboxForm() {
  // State to track selected checkboxes
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"]; // List of options

  // Handle checkbox change
  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      // Remove option if already selected
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      // Add option if not selected
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Checkbox Form</h2>
      <form>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                value={option}
                onChange={() => handleCheckboxChange(option)}
                checked={selectedOptions.includes(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
      <h3>Selected Options:</h3>
      {selectedOptions.length > 0 ? (
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      ) : (
        <p>No options selected</p>
      )}
    </div>
  );
}

export default CheckboxForm;
