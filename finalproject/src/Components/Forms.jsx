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

// Driver Form
export function DriverForm() {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!licenseNumber) {
      setFormError('License Number is required');
    } else if (!vehicleType) {
      setFormError('Vehicle type is required');
    } else {
      setFormError('');
      alert('Driver registration successful');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Driver Form</h1>
      <input type="text" placeholder="Name" required />
      <input 
        type="text" 
        placeholder="License Number" 
        value={licenseNumber} 
        onChange={(e) => setLicenseNumber(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Phone Number" 
        required 
      />
      <select 
        value={vehicleType} 
        onChange={(e) => setVehicleType(e.target.value)} 
        required
      >
        <option value="" disabled>Select Vehicle Type</option>
        <option value="car">Car</option>
        <option value="truck">Truck</option>
        <option value="motorcycle">Motorcycle</option>
      </select>
      <button type="submit">Register</button>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
    </form>
  );
}
// Book Form
export function BookForm() {
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
// Module Form
export function ModuleForm() {
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

