import { useNavigate } from "react-router-dom";
import { SlideUpAnimation } from "../common/SlideUpAnimation";
import { containerWidth } from "../../constants";

export function ProjectWidget({ index, id, name, imageSrc, slideIndex, translateFactor }) {
  const nav = useNavigate();

  return (
    <SlideUpAnimation order={slideIndex}>
      <div
        className="project"
        role="button"
        onClick={() => nav(`/project/${id}`)}
      >
        <div className="widget">
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
