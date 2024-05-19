import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { Header } from "../common/Header";
import "./Project.css";
import { GithubLink } from "../common/GithubLink";
import backArrow from "../../vectors/arrow-back.svg";

export const Project = () => {
  const project = useLoaderData();
  const nav = useNavigate();
  const location = useLocation();

  return (
    <div className="project-page">
      {location.key !== "default" && (
        <button className="back" onClick={() => nav(-1)}>
          <img src={backArrow} />
          <span>Back</span> 
        </button>
      )}
      <section className="project-info">
        <div className="container-grid padded-container">
          <div className="title">
            <Header text={project.name} />
            <GithubLink to={project.url} />
          </div>
          <div className="info-content">
            <div className="description">
              <p>{ project.description }</p>
            </div>
            <div className="built-with">
              <span className="title vertical-text">Built with:</span>
              <div className="tools">
                {project.tools.map(({ name, LogoComponent }) => (
                  <span className="logo" key={name}>
                    <LogoComponent />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="project-images">
        <div className="images-container padded-container">
          {project.images.map(({ src, alt }) => (
            <span className="image" key={src}>
              <img src={src} alt={alt} />
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}