import { ArrowButton } from "../common/ArrowButton";
import { projects } from "../../data/projects-data";
import { useState } from "react";
import { SlideUpAnimation } from "../common/SlideUpAnimation";
import { useNavigate } from "react-router-dom";

const imageAndTextMinWidth = 800;
export const ProjectsNavigator = ({ nextProjectIdx, previousProjectIdx, slideUpOrder }) => {
  const nextProject = nextProjectIdx !== null ? projects[nextProjectIdx] : null;
  const previousProject =
    previousProjectIdx !== null ? projects[previousProjectIdx] : null;
  const [thumbnailImage, setThumbnailImage] = useState(null);

  const showImageOnHover = window.innerWidth >= imageAndTextMinWidth,
  showHoverText = showImageOnHover;

  const onHover = (e, imgSrc) => {
    e.stopPropagation();
    if (showImageOnHover) {
      setThumbnailImage(imgSrc);
    };
  };

  const nav = useNavigate();

  return (
    <nav className="project-navigator">
      <div className="grid">
        {thumbnailImage && (
          <SlideUpAnimation key={thumbnailImage}>
            <div className="thumbnail-wrapper">
              <img src={thumbnailImage} className="thumbnail" />
            </div>
          </SlideUpAnimation>
        )}
        <div className="fixed-container">
          <div className="nav-btns">
            <ArrowButton
              back
              hoverText={showHoverText ? previousProject?.name : ""}
              disabled={!previousProject}
              style={{ opacity: previousProject ? 1 : 0.1 }}
              onMouseEnter={(e) => onHover(e, previousProject?.thumbnail)}
              onMouseLeave={() => setThumbnailImage(null)}
              onClick={() =>
                nav(`/projects/${previousProject?.id}`, { replace: true })
              }
            />
            <ArrowButton
              hoverText={showHoverText ? nextProject?.name : ""}
              disabled={!nextProject}
              style={{ opacity: nextProject ? 1 : 0.1 }}
              onMouseEnter={(e) => onHover(e, nextProject?.thumbnail)}
              onMouseLeave={() => setThumbnailImage(null)}
              onClick={() =>
                nav(`/projects/${nextProject?.id}`, { replace: true })
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
