import React from "react";
import "./landingpage.css";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import TextSpan from "./TextSpan";

const LandingPage = () => {
  const controls = useAnimationControls();
  //const [isPlaying, setIsPlaying] = useState(false);
  const sentence = ["Hello.".split(""), "I am".split(""), "Ramon".split("")];

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        ease: "linear",
        duration: 0.6,
      },
    });
    setIsPlaying(true);
  };

  /*
    <motion.h1 animate={controls} onMouseOver={() => {if(!isPlaying) rubberBand() }} onAnimationComplete={() => setIsPlaying(false)} className="primary-color">
                                {letter === " " ? "\u00A0" : letter}
                            </motion.h1>
    */

  return (
    <div id="home" className="landingpage">
      <div className="front-end-developer">
        <h2 className="roles">Front end developer</h2>
        <h2 className="roles">Designer</h2>
      </div>
      <div className="hello">
        <section className="hello--letters primary-color">
          {sentence[0].map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </section>
        <section className="hello--letters">
          {sentence[1].map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </section>
        <section className="hello--letters">
          {sentence[2].map((letter, index) => {
            return (
              <TextSpan key={index}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default LandingPage;