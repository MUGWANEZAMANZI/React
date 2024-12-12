
import React, { useState } from "react";

function HoverChange() {
    const [isHovered, setIsHovered] = useState(false); 

    const divStyle = {
        backgroundColor: isHovered ? "brown" : "white", 
        padding: "20px",
        textAlign: "center",
        border: "1px solid black",
        borderRadius: "5px",
        color:"black",
        transition: "background-color 0.3s ease",
    };

    return (
        <>
        <p>Hover the division below to change to Brown</p>
        <div
            style={divStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        </div>
        </>
    );
}

export default HoverChange;
