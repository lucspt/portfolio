import { ArrowButton } from "../common/ArrowButton";
import { projects } from "../../data/projects-data";
import { useCallback, useEffect, useState } from "react";
import { SlideUpAnimation } from "../common/SlideUpAnimation";
import { useLocation, useNavigate } from "react-router-dom";

export const ProjectsNavigator = ({ nextProjectIdx, previousProjectIdx }) => {
  const nextProject = nextProjectIdx !== null ? projects[nextProjectIdx] : null;
  const previousProject =
    previousProjectIdx !== null ? projects[previousProjectIdx] : null;
  const [thumbnailImage, setThumbnailImage] = useState(null);

  const onHover = (e, imgSrc) => {
    e.stopPropagation();
    setThumbnailImage(imgSrc);
  };

  const nav = useNavigate();

  return (
    <nav className="project-navigator">
      <div className="grid">
        {thumbnailImage && (
          <SlideUpAnimation>
            <div className="thumbnail-wrapper">
              <img src={thumbnailImage} className="thumbnail" />
            </div>
          </SlideUpAnimation>
        )}
        <div className="fixed-container">
          <div className="nav-btns">
            <ArrowButton
              back
              hoverText={previousProject?.name}
              disabled={!previousProject}
              style={{ opacity: previousProject ? 1 : 0.1 }}
              onMouseEnter={(e) => onHover(e, previousProject?.thumbnail)}
              onMouseLeave={() => setThumbnailImage(null)}
              onClick={() => nav(`/project/${previousProject?.id}`)}
            />
            <ArrowButton
              hoverText={nextProject?.name}
              disabled={!nextProject}
              style={{ opacity: nextProject ? 1 : 0.1 }}
              onMouseEnter={(e) => onHover(e, nextProject?.thumbnail)}
              onMouseLeave={() => setThumbnailImage(null)}
              onClick={() => nav(`/project/${nextProject?.id}`)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
