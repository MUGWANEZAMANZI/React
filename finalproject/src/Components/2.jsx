import React from "react";

//This function creates a list of hobbies
function ListHob(){
    
    const a = ["Dancing", "singing", "Reading"];
    return (
        <div>
            <h1>My hobies</h1>
            <ol>
            { a.map((hobby,index) => ( <DisplayHob key={index} hobby={hobby} /> 
        ))}
            </ol>
        </div>
    );
}


function DisplayHob(props){
        return <li>{props.hobby}</li>;
    }
export default ListHob;
