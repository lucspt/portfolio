import { useRef, useState } from "react";
import { useElementInViewport } from "../../hooks/useElementInViewport";
import { ProjectWidget } from "./ProjectWidget";
import { BorderContainedSection } from "./BorderContainedSection";
import { projects } from "../../data/projects-data";
import { ProjectsScroller } from "./ProjectsScroller";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";

export const Projects = () => {
  const ref = useRef();
  const isVisible = useElementInViewport(ref, (e) => {
    const { current } = ref;
    return (
      window.scrollY > current.offsetTop + current.offsetHeight ||
      e.isIntersecting
    );
  });
  const [widgetScrollPosition, setWidgetScrollPosition] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      spacing: 20,
    },
    loop: true,
    slideChanged(slider) {
      setWidgetScrollPosition(slider.track.details.rel)
    },
    mode: "snap",
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1050px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    // disabled: !(projects.length > 3 || window.innerWidth < 1050)
  })

  return (
    <BorderContainedSection
      className="projects-section"
      sectionTitle="Projects"
      padded={false}
    >
      <div ref={ref} className="full-space" style={{ minHeight: "inherit" }}>
        {isVisible && (
          <div className="projects keen-slider" ref={sliderRef}>
            {projects.map((p, i) => (
              <div className="keen-slider__slide">
                <ProjectWidget
                  name={p.name}
                  key={p.name}
                  slideIndex={i + 1}
                  index={i}
                  translateFactor={widgetScrollPosition}
                  imageSrc={p.thumbnail}
                  id={p.id}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <ProjectsScroller
        numProjects={projects.length}
        currentSlide={widgetScrollPosition}
        next={() => instanceRef.current.next()}
        prev={() => instanceRef.current.prev()}
      />
    </BorderContainedSection>
  );
};
