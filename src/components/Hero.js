import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/Hero.css";

const Hero = () => {
  const animationSequence = [
    "I am Evguenia",
    1000,
    "I am a creative",
    1000,
    "I am a UX designer",
    1000,
    "I am a developer",
    1000,
    "I am a passionate professional",
    1000,
  ];

  return (
    <div className="hero-section lacquer-regular">
      <TypeAnimation
        sequence={animationSequence}
        wrapper="span"
        className="hero-text"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default Hero;
