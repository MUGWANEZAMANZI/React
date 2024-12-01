import React, { useState } from 'react';

const LoginFormWithValidation = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    // Handle changes to input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate inputs
    const validate = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format.';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required.';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log('Form submitted successfully:', formData);
            // Clear form
            setFormData({ email: '', password: '' });
            setErrors({});
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', background: '#f5f5f5', padding: '20px' }}>
            <form 
                onSubmit={handleSubmit}
                style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Form</h2>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', color: 'black' }}
                    />
                    {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', color: 'black' }}
                    />
                    {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>}
                </div>

                <button
                    type="submit"
                    style={{ width: '100%', padding: '10px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginFormWithValidation;
