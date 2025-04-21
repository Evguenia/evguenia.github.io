import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section">
      <div className="about-content" data-aos="zoom-in">
        <h2 className="karla gradient-text">About Me</h2>
        <p className="inconsolata">
          <span className="highlight">👋 Hi, I’m Evguenia</span> — a{" "}
          <span className="highlight">web developer</span> and{" "}
          <span className="highlight">designer</span> with a passion for
          creating meaningful digital experiences.
          <br />
          <br />
          I believe good design is about more than looks — it’s about how it
          makes people feel. My approach blends clean code, intuitive design,
          and a love for the small details that matter.
          <br />
          <br />
          Outside of work, I’m always in motion — quite literally. I run{" "}
          <span className="highlight">marathons</span>, practice{" "}
          <span className="highlight">yoga</span>, and get lost in{" "}
          <span className="highlight">painting</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
