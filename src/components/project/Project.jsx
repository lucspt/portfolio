import { useLoaderData, useNavigate } from "react-router-dom";
import { Header } from "../common/Header";
import "./Project.css";
import { GithubLink } from "../common/GithubLink";
import backArrow from "../../vectors/arrow-back.svg";
import nextArrow from "../../vectors/arrow-forward.svg";
import { BuiltWith } from "./BuiltWith";
import { SlideUpAnimation } from "../common/SlideUpAnimation";
import { ArrowButton } from "./ArrowButton";

export const Project = () => {
  const project = useLoaderData();
  const nav = useNavigate();

  return (
    <div className="project-page">
      <ArrowButton
        onClick={() => nav(-1)}
        text="Back"
        className="back"
        arrowImageSrc={backArrow}
      />
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
      {project.nextProjectId && (
        <ArrowButton
          text="Next"
          className="next"
          onClick={() => nav(`/project/${project.nextProjectId}`)}
          arrowImageSrc={nextArrow}
        />
      )}
    </div>
  );
};
