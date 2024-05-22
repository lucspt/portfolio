import { ArrowButton } from "../common/ArrowButton";
import { projects } from "../../data/projects-data";

export const ProjectsNavigator = ({ nextProject }) => {
  return (
    <nav className="project-navigator">
      <div className="fixed-container">
        <div className="nav-btns">
          <ArrowButton back />
          <ArrowButton hoverText={`Next Project: ${nextProject.name}`}/>
        </div>
      </div>
    </nav>
  )
}