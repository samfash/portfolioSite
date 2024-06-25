import React from 'react';
import ProjectCard from '../components/projectCard';
import '../assets/Css/Projects.css';
import Projects from '../components/projectItems';


const Work = ()=>{
    return(
        <div>
             <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
        </div>
    )
}
export default Work

