import React, { useState } from 'react';

const ControlledForm = () => {
    // State to manage the input field
    const [inputValue, setInputValue] = useState('');

    // Handle changes to the input field
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', background: '#f5f5f5', padding: '20px' }}>
            <form style={{ padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Controlled Form</h2>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="inputField" style={{ display: 'block', marginBottom: '5px' }}>Enter Text:</label>
                    <input
                        type="text"
                        id="inputField"
                        name="inputField"
                        value={inputValue}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', color: 'black' }}
                    />
                </div>
            </form>
            <div style={{ marginTop: '20px', fontSize: '16px', color: '#333' }}>
                <strong>Entered Value:</strong> {inputValue}
            </div>
        </div>
    );
};

export default ControlledForm;
