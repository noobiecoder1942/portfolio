import React from 'react'
import projects from "./featured.json";
import "./projects.css"
import { FaExternalLinkAlt } from "react-icons/fa";
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
        <div className="project-list text-2xl">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className='top-bar'>
                <div>{project.project}</div>
                <div className='space-x-1'>
                  <a href={project.githuburl} target="_blank" rel="noopener noreferrer" className='outside-link'>
                    <SiGithub /> 
                    {project.repo}
                  </a>
                  <a href={project.liveurl} target="_blank" rel="noopener noreferrer" className='outside-link'>
                  <FaExternalLinkAlt /> 
                    Demo
                  </a>
                </div>
              </div>
              <h3 className='mt-10'>{project.descriptionTitle}</h3>
              <p className='mt-5'>{project.description}</p>
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
