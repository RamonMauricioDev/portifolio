import React from "react";
import './contact.css';

const Contact = () =>{
    return(
        <div className="contact">
            <h2>Contact Me</h2>
            <div className="contact-input-div">
                <input type="text" id="name" className="contact-input" placeholder="Name"/>
                <input type="text" id="email" className="contact-input" placeholder="email"/>
                <input type="text" id="subject" className="contact-input" placeholder="subject"/>
                <textarea type="text" id="message" className="contact-input big-input" placeholder="message"/>
                <button className="contact-button">Send</button>
                <div className="contact-links">
                    <img src="./github.png" alt="github" width={64}/>
                    <img src="./linkedin.png" alt="github" width={64}/>
                </div>
            </div>
        </div>
    )
}

export default Contact