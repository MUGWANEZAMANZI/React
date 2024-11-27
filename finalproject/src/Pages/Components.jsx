import React from "react";
import { Welcome,CurrentDate } from "../Components/1";
import ListHob from "../Components/2";
import Profile from "../Components/4";
import MapDisp from "../Components/5";
import ReuseBt1 from "../Components/3.1";

const Components = () =>{
    return (
        <>
        <h1>Components</h1>
        <Welcome/>
        <CurrentDate/>  
        <ListHob /> 
        <ReuseBt1/>
        <div>
          <Profile name="Manzi Audace" age={23} email="mmaudace@gmail.com"/>
          <Profile name="Jane Smith" age={25} email="Janes@gmail.com" />
          </div>  
          <div>
          <MapDisp />  
            </div> 
            </>
    );
};
export default Components;