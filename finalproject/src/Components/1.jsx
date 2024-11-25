import React from "react";

function Welcome(){
    return (
        <p>Welcome to the final Project Page1</p>
    );
}
function CurrentDate(){
    let a = new Date().toLocaleString;
    return (
        <p>Current date is: {a}</p>
    )
}
export {CurrentDate, Welcome};