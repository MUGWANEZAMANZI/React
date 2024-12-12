import React from "react";
import { Link } from "react-router-dom";
import Contact from "../routing/16Contact";
import About from "./16About";

const Routinglink=()=>{
    return(
        <div>
            <ul>
                <li><Link to="Contact" element={<Contact/>}>Contact</Link></li><li><Link to="About" element={<About/>}   >About us</Link></li>
            </ul>
        </div>
    )
}
export default Routinglink;
