import React, { useState } from "react";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Form Data:", formData);
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    padding: "20px",
                    background: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    maxWidth: "400px",
                    margin: "auto",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: "20px", color: "black" }}>Login</h2>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="username" style={{ display: "block", marginBottom: "5px", color: "black" }}>
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            color: "black",
                        }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="password" style={{ display: "block", marginBottom: "5px", color: "black" }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            color: "black",
                        }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        background: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
