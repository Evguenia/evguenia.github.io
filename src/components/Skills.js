import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Skills.css";

// Reusable SkillCategory Component
const SkillCategory = ({ title, skills, animation }) => (
  <div className="skill-category" data-aos={animation}>
    <h3 className="karla">{title}</h3>
    <ul className="inconsolata">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillCategories = [
    {
      title: "UI/UX Design",
      skills: [
        "Wireframing & Prototyping",
        "User Research & Usability Testing",
        "Interaction Design",
        "Design Systems & Style Guides",
        "Mobile & Responsive Design",
      ],
      animation: "fade-up-right",
    },
    {
      title: "Development",
      skills: [
        "HTML, CSS, JavaScript",
        "React.js",
        "Version Control (Git)",
        "API Integration (REST, GraphQL)",
        "Robot Framework (Test Automation)",
      ],
      animation: "fade-up-left",
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Figma, Adobe XD, Sketch",
        "GitHub, GitLab",
        "Jira, Trello, Notion",
        "Docker, CI/CD",
        "Automation (Robot Framework)",
      ],
      animation: "fade-up-right",
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem-Solving",
        "Communication & Presentation",
        "Collaboration & Teamwork",
        "Time Management & Organization",
      ],
      animation: "fade-up-left",
    },
  ];

  return (
    <section className="skills">
      <h2 className="karla gradient-text">My Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            animation={category.animation}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
