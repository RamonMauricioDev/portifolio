import React from "react";
import './header.css';

const Header = () =>{
    return(
        <div className="header">
            <h6><a href="#home" className="header-button">Home</a></h6>
            <h6><a href="#arsenal" className="header-button">Arsenal</a></h6>
            <h6><a href="#projects" className="header-button">Projects</a></h6>
            <h6><a href="#contact" className="header-button">Contact</a></h6>
        </div>
    )
}

export default Header