import React from 'react';
import '../assets/Css/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" loading='lazy' />
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>Technologies:</strong> {project.technologies}</p>
        <p><strong>Impact:</strong> {project.impact}</p>
        <p>LINK: <a href={project.link}>Click here</a></p>
      </div>
    </div>
  );
};

export default ProjectCard;
