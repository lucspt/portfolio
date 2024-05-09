import { useNavigate } from "react-router-dom";
import { SlideUpAnimation } from "../common/SlideUpAnimation";

export function ProjectWidget({ id, name, imageSrc, slideIndex }) {
  const nav = useNavigate();

  return (
    <SlideUpAnimation order={slideIndex}>
      <div
        className="project"
        role="button"
        onClick={() => nav(`/project/${id}`)}
      >
        <div className="container">
          <div className="image hover-lift">
            <img src={imageSrc} />
          </div>
          <div className="info">
            <p className="hover-lift">{name}</p>
          </div>
        </div>
        <div className="bg"></div>
        <div className="hover-bg"></div>
      </div>
    </SlideUpAnimation>
  );
}
