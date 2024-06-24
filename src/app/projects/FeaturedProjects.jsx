import React from 'react'
import projects from "./featured.json";
import "./projects.css"

import { SiJavascript, SiHtml5, SiCss3, SiSass, SiGithub, SiHugo, SiFramer, SiReact, SiNextdotjs} from "react-icons/si";

// Mapping of keys to corresponding react-icons components
const iconMapping = {
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss3,
  sass: SiSass,
  git: SiGithub,
  hugo: SiHugo,
  framermotion: SiFramer,
  reactJS: SiReact,
  nextJS: SiNextdotjs
};

const FeaturedProjects = ( ) => {

    return (
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2>{project.project}</h2>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.url}
              </a>
              <p>{project.repo}</p>
              <h3>{project.descriptionTitle}</h3>
              <p>{project.description}</p>
              <div className="stack">
                {project.stack.map((tech, techIndex) => {
                  const IconComponent = iconMapping[tech.key];
                  return (
                    <div key={techIndex} className="tech">
                      {IconComponent ? (
                        <>
                          <IconComponent />
                          <span>{tech.key}</span>
                        </>
                      ) : (
                        <span>{tech.key}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      );
    };

export default FeaturedProjects;
