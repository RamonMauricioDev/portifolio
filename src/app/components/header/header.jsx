import React from "react";
import './header.css';

const Header = () =>{
    return(
        <div className="header">
            <h6 className="header-button">Home</h6>
            <h6 className="header-button">Arsenal</h6>
            <h6 className="header-button">Projects</h6>
            <h6 className="header-button">Contact</h6>
        </div>
    )
}

export default Header