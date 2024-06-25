import React from "react";
import "../assets/Css/Skills.css";
import CategoryList from "../components/categoryList";
import skillz from "../components/skill-items";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills-section">
        <div className="container">
          <h2>Skills</h2>
          <CategoryList categories={skillz} />
        </div>
      </section>
    </div>
  );
};

export default Skills;
