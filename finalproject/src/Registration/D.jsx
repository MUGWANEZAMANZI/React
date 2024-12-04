import { useState } from "react";
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