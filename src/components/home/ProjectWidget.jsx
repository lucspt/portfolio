import { useNavigate } from "react-router-dom";
import { SlideUpAnimation } from "../common/SlideUpAnimation";
import { containerWidth } from "../../constants";

export function ProjectWidget({ index, id, name, imageSrc, slideIndex, translateFactor }) {
  const nav = useNavigate();
  const width = (containerWidth / 3) - 20;
  
  let baseTranslation;
  if (index + translateFactor === 0) baseTranslation = 0
  else baseTranslation = 20 * index;

  const translation = baseTranslation + (width * translateFactor)

  return (
    <SlideUpAnimation order={slideIndex}>
      <div
        className="project"
        role="button"
        onClick={() => nav(`/project/${id}`)}
        style={{
          minWidth: width,
          maxWidth: width,
          transform: `translateX(${translation}px)`,
          // transitionDelay: baseTranslation === 0 ? `.${index}s` : 0
        }}
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
