import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={ props.src} alt = "My Project" className="project-image"/>
      </div>
      <div className="project-description">
        <h5>{props.projectTitle}</h5>
        <p style={{color:'#ccc'}}>
        {props.projectDetail}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
