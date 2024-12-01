import React, { useState } from 'react';

export function LecturerForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const phoneRegex = /^[0-9]+$/;
    if (!emailRegex.test(email)) {
      setFormError('Invalid email format');
    } else if (!phoneRegex.test(phone)) {
      setFormError('Phone number should be numeric');
    } else {
      setFormError('');
      alert('Lecturer registration successful');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Lecturer Form</h1>
      <input type="text" placeholder="Name" required />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Phone Number" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required 
      />
      <input type="text" placeholder="Subject" required />
      <button type="submit">Register</button>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
    </form>
  );
}

export function StudentForm() {
  const [studentId, setStudentId] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentIdRegex = /^[a-zA-Z0-9]+$/;
    if (!studentIdRegex.test(studentId)) {
      setFormError('Student ID must contain only alphanumeric characters');
    } else {
      setFormError('');
      alert('Student registration successful');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Student Form</h1>
      <input type="text" placeholder="First Name" required />
      <input type="text" placeholder="Last Name" required />
      <input 
        type="text" 
        placeholder="Student ID" 
        value={studentId} 
        onChange={(e) => setStudentId(e.target.value)} 
        required 
      />
      <button type="submit">Register</button>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
    </form>
  );
}

// Add DriverForm, BookForm, and ModuleForm similarly...
