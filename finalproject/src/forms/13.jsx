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
        <div >
            <form 
                onSubmit={handleSubmit}>
                <h2>Login Form</h2>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password" >Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoginFormWithValidation;
