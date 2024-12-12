import React, { useState } from 'react';

const ControlledForm = () => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <form>
                <h2>Controlled Form</h2>
                <div>
                    <label htmlFor="inputField">Enter Text:</label>
                    <input
                        type="text"
                        id="inputField"
                        name="inputField"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <div>
                <strong>Entered Value:</strong> {inputValue}
            </div>
        </div>
    );
};

export default ControlledForm;
