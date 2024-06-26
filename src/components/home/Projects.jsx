import { useRef, useState } from "react";
import { ProjectWidget } from "./ProjectWidget";
import { BorderedSection } from "./BorderedSection";
import { projects } from "../../data/projects-data";
import { ProjectsScroller } from "./ProjectsScroller";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const Projects = () => {
  const visibilityRef = useRef();
  const [widgetScrollPosition, setWidgetScrollPosition] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      spacing: 20,
      perView: 1.15,
    },
    loop: true,
    slideChanged(slider) {
      setWidgetScrollPosition(slider.track.details.rel);
    },
    mode: "snap",
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1.15, spacing: 25 },
      },
      "(min-width: 700px)": {
        slides: { perView: 1.25, spacing: 25 },
      },
      "(min-width: 920px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
    renderMode: "performance",
  });

  return (
    <BorderedSection
      className="projects-section"
      sectionTitle="Projects"
      padded={false}
    >
      <div
        className="full-space min-height-contain"
        style={{ minHeight: "inherit" }}
      >
        <span 
        ref={visibilityRef} 
        style={{ 
          top: "100px", position: "absolute", height: "100%", width: "100%"
        }} 
          />
        <div className="projects keen-slider" ref={sliderRef}>
          {projects.map((p, i) => (
            <div
              className="keen-slider__slide project-widget-container"
              style={{ "--translate-factor": i }}
              key={p.name}
            >
              <ProjectWidget
                name={p.name}
                visibilityRef={visibilityRef}
                slideIndex={i + 1}
                index={i}
                translateFactor={widgetScrollPosition}
                imageSrc={p.thumbnail}
                id={p.id}
              />
            </div>
          ))}
        </div>
      </div>
      <ProjectsScroller
        numProjects={projects.length}
        currentSlide={widgetScrollPosition}
        next={() => instanceRef.current.next()}
        prev={() => instanceRef.current.prev()}
        moveToIdx={(idx) => instanceRef.current.moveToIdx(idx)}
      />
    </BorderedSection>
  );
};
