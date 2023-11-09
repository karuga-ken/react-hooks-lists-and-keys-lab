import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const ProjectItems = projects.map((proj)=>(
    <ProjectItem
      key={proj.id}
      name={proj.name}
      about={proj.about}
      technologies={proj.technologies}
    
    />
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {ProjectItems}
      </div>
    </div>
  );
}

export default ProjectList;
