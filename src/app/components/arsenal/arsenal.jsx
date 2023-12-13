import React from "react";
import Image from 'next/image'
import './arsenal.css';

const IconList = ["/reactjs.png", "/js.png",
"/next-js.png", "/firebase.png", "/html-5.png", "/css.png", "/github.png", "/jest.png", "/webpack.png", "/figma.png"]

const ArsenalList = ["Programming Languages: Javascript.", 
"Frameworks: React JS, NextJS, Jest.", "Tools: Figma, Firebase, Git, Webpack.", "The Basic: HTML, CSS."]

const IconStyle = {
    width: "clamp(32px, 5vw, 64px)",
    height: "clamp(32px, 5vw, 64px)"
}

const Arsenal = () =>{
    return(
        <div id="arsenal" className="arsenal">
            <h2 className="arsenal-title">Arsenal</h2>
            <div className="arsenal-flex">
                <span className="arsenal-span">
                    {ArsenalList.map((arsenal) => 
                    <div className="arsenal-list" key={arsenal.toString()}>
                        <span className="iconbr" />
                        <h5>{arsenal}</h5>
                    </div>)}
                </span>
                <div className="icon-grid">
                {IconList.map((icon) =>
                    <Image src={icon} key={icon.toString()} width={64} height={64} style={IconStyle} quality={100} alt={icon.toString()}/>)}
                </div>
            </div>
        </div>
    )
}

export default Arsenal