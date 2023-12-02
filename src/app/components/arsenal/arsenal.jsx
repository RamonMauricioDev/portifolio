import React from "react";
import Image from 'next/image'
import './arsenal.css';

const IconList = ["/css.png", "/figma.png", "/firebase.png", "/github.png", "/html-5.png", "/jest.png", "/js.png", 
"/next-js.png", "/reactjs.png", "/webpack.png"]

const ArsenalList = ["The Basic: HTML, CSS.", "Programming Languages: Javascript.", 
"Frameworks: React JS", "Tools: Figma, Firebase, Git, Webpack."]

const Arsenal = () =>{
    return(
        <div className="arsenal">
            <h2>Arsenal</h2>
            <div className="arsenal-flex">
                <p>
                    {ArsenalList.map((arsenal) => 
                    <div key={arsenal.toString()}>
                        <span className="smallbr" />
                        {arsenal}
                    </div>)}
                </p>
                <div className="icon-grid">
                {IconList.map((icon) =>
                    <Image src={icon} key={icon.toString()} width={32} height={32}/>)}
                </div>
            </div>
        </div>
    )
}

export default Arsenal