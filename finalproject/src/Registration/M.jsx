import { useState } from "react";
function ModuleForm() {
    const [credits, setCredits] = useState('');
    const [formError, setFormError] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      const creditsRegex = /^[0-9]+$/;
      if (!creditsRegex.test(credits)) {
        setFormError('Credits must be a numeric value');
      } else {
        setFormError('');
        alert('Module registration successful');
      }
    };
    return (
      <form onSubmit={handleSubmit}>
        <h1>Module Form</h1>
        <input type="text" placeholder="Module Name" required />
        <input type="text" placeholder="Module Code" required />
        <textarea placeholder="Description" required></textarea>
        <input 
          type="text" 
          placeholder="Credits" 
          value={credits} 
          onChange={(e) => setCredits(e.target.value)} 
          required 
        />
        <button type="submit">Register</button>
        {formError && <p style={{ color: 'red' }}>{formError}</p>}
      </form>
    );
  }
  export default ModuleForm;
  
  
  