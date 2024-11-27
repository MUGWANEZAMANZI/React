import React from "react";
import { useState } from "react";

function States(){
    const [color, setColor] = useState("Running");
    return (
        
        <>
            <h2>Hi! Am :{color}</h2>
            <button className="bg-red-500 rounded-md" type="button" onClick={() => setColor("Iddle")}>Change state</button>
        </>
    );

}

export default States;