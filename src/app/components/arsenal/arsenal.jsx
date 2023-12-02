import React from "react";
import Image from 'next/image'
import './arsenal.css';

const IconList = ["/css.png", "/figma.png", "/firebase.png", "/github.png", "/html-5.png", "/jest.png", "/js.png", 
"/next-js.png", "/reactjs.png", "/webpack.png"]

const ArsenalList = ["Programming Languages: Javascript.", 
"Frameworks: React JS", "Tools: Figma, Firebase, Git, Webpack.", "The Basic: HTML, CSS."]

const IconStyle = {
    width: "clamp(32px, 5vw, 64px)",
    height: "clamp(32px, 5vw, 64px)"
}

const Arsenal = () =>{
    return(
        <div className="arsenal">
            <h2 className="arsenal-title">Arsenal</h2>
            <div className="arsenal-flex">
                <p>
                    {ArsenalList.map((arsenal) => 
                    <div className="arsenal-list" key={arsenal.toString()}>
                        <span className="iconbr" />
                        <h5>{arsenal}</h5>
                    </div>)}
                </p>
                <div className="icon-grid">
                {IconList.map((icon) =>
                    <Image src={icon} key={icon.toString()} width={64} height={64} style={IconStyle} quality={100}/>)}
                </div>
            </div>
        </div>
    )
}

export default Arsenal