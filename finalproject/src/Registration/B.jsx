import { useState } from "react";
function BookForm() {
    const [publishedYear, setPublishedYear] = useState('');
    const [formError, setFormError] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      const yearRegex = /^\d{4}$/;
      if (!yearRegex.test(publishedYear)) {
        setFormError('Published Year must be a four-digit number');
      } else {
        setFormError('');
        alert('Book registration successful');
      }
    };
    return (
      <form onSubmit={handleSubmit}>
        <h1>Book Form</h1>
        <input type="text" placeholder="Book Title" required />
        <input type="text" placeholder="Author" required />
        <input type="text" placeholder="ISBN" required />
        <input 
          type="text" 
          placeholder="Published Year" 
          value={publishedYear} 
          onChange={(e) => setPublishedYear(e.target.value)} 
          required 
        />
        <button type="submit">Register</button>
        {formError && <p style={{ color: 'red' }}>{formError}</p>}
      </form>
    );
  }
  export default BookForm;