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
        <div className="widget">
          <div className="image hover-lift">
            <img src={imageSrc} alt={`A photo of the ${name} project`}/>
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
