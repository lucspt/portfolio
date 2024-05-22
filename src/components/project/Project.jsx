import "./Project.css";
import { useLoaderData, useLocation } from "react-router-dom";
import { Header } from "../common/Header";
import { GithubLink } from "../common/GithubLink";
import { BuiltWith } from "./BuiltWith";
import { SlideUpAnimation } from "../common/SlideUpAnimation";
import { ProjectsNavigator } from "./ProjectsNavigator";

export const Project = () => {
  const project = useLoaderData();
  const location = useLocation();

  return (
    <div className="project-page">
      <section className="project-info">
        <div className="container-grid padded-container">
          <SlideUpAnimation onlyAnimateOnce>
            <div className="title">
              <Header text={project.name} className="project-name" />
              <GithubLink to={project.url} />
            </div>
          </SlideUpAnimation>
          <div className="info-content">
            <div className="description">
              <SlideUpAnimation onlyAnimateOnce>
                <p>{project.description}</p>
              </SlideUpAnimation>
            </div>
            <BuiltWith tools={project.tools} />
          </div>
        </div>
      </section>
      <section className="project-images">
        <div className="images-container padded-container">
          {project.images.map(({ src, alt }) => (
            <span
              className="image fade-in"
              key={src}
              style={{
                "--fade-in-duration": "0.3s",
                "--fade-in-delay": "0.1s",
              }}
            >
              <img src={src} alt={alt} />
            </span>
          ))}
        </div>
      </section>
      <ProjectsNavigator 
        nextProjectIdx={project.nextProjectIdx} 
        previousProjectIdx={project.previousProjectIdx}
        key={location.pathname}
      />
    </div>
  );
};
