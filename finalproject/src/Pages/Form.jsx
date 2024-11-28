import React from "react";
import LoginForm from "../forms/login"; // Ensure this path is correct
import ControlledForm from "../forms/12"; // Ensure this path is correct
import LoginFormWithValidation from "../forms/13"; // Ensure this path is correct
import FormContainer from "../forms/14container"; // Ensure this path is correct
import CheckboxForm from "../forms/15"; // New component

function Forms() {
    return (
        <div style={{ textAlign: "center", padding: "20px", background: "#ff7364" }}>
            <h1>Forms Page</h1>
            <LoginForm />
            <ControlledForm />
            <LoginFormWithValidation />
            <FormContainer />
            <CheckboxForm /> {/* Added CheckboxForm component */}
        </div>
    );
}

export default Forms;
