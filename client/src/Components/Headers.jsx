import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Headers = ()=>{
    return(
       <header>
        <nav>
            <div className="left">
                <h1>Cheminos</h1>
            </div>
            <div className="rigt">
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink> 
                    </li>
                    <li>
                    <NavLink to="/login">
                            Login
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard">
                            Dashboard
                    </NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
       </header>
    )
}
export default Headers;