import { useRef, useState } from "react";
import { useElementInViewport } from "../../hooks/useElementInViewport";
import { ProjectWidget } from "./ProjectWidget";
import { BorderContainedSection } from "./BorderContainedSection";
import { projects } from "../../data/projects-data";
import { ProjectsScroller } from "./ProjectsScroller";

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

  return (
    <BorderContainedSection
      className="projects-section"
      sectionTitle="Projects"
      padded={false}
    >
      <div ref={ref} className="full-space">
        {isVisible && (
          <div className="projects">
            {projects.map((p, i) => (
              <ProjectWidget
                name={p.name}
                key={p.name}
                slideIndex={i + 1}
                index={i}
                translateFactor={widgetScrollPosition}
                imageSrc={p.thumbnail}
                id={p.id}
              />
            ))}
          </div>
        )}
      </div>
      <ProjectsScroller
        numProjects={projects.length}
        currentSlide={widgetScrollPosition}
        next={() => setWidgetScrollPosition((prev) => {
          return Math.abs(prev) === projects.length - 1
            ? 0
            : prev - 1
        }
        )
        }
        prev={() => setWidgetScrollPosition((prev) => {
          console.log(prev, projects.length);
          return prev === 0
            ? projects.length - 1
            : prev + 1
        })}
      />
    </BorderContainedSection>
  );
};
