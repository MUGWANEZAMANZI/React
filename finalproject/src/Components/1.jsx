import React from "react";

function Welcome(){
    return (
        <p className="m-4">Welcome to the final Project Page1</p>
    );
}
function CurrentDate(){
    
    return (
        <p className="m-4">Current date is: {Date()}</p>
    )
}
export {CurrentDate, Welcome};