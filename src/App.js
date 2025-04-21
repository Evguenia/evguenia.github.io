import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Form from "./components/Form";
import Skills from "./components/Skills";
import "./App.css";
import "aos/dist/aos.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  // Detect the active section when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Check if the section is in the viewport (middle of the screen)
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection); // Update active section
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check for the first section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header activeSection={activeSection} />{" "}
      {/* Pass activeSection to Header */}
      <div className="container">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Form />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
