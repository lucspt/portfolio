import "./Project.css";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../common/Header";
import { GithubLink } from "../common/GithubLink";
import { BuiltWith } from "./BuiltWith";
import { SlideUpAnimation } from "../common/SlideUpAnimation";
import { ArrowButton } from "../common/ArrowButton";
import { ProjectsNavigator } from "./ProjectsNavigator";
import { projects } from "../../data/projects-data";

export const Project = () => {
  const project = useLoaderData();
  const nav = useNavigate();
  const location = useLocation();

  return (
    <div className="project-page">
      {location.key !== "default" && (
        <ArrowButton
          onClick={() => nav("/")}
          hoverText="Home"
          className="home"
          back
        />
      )}
      <section className="project-info">
        <div className="container-grid padded-container">
          <SlideUpAnimation>
            <div className="title">
              <Header text={project.name} />
              <GithubLink to={project.url} />
            </div>
          </SlideUpAnimation>
          <div className="info-content">
            <div className="description">
              <SlideUpAnimation>
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
