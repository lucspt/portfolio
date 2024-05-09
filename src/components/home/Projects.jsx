import { useEffect, useRef } from "react";
import { useElementInViewport } from "../../hooks/useElementInViewport";
import { ProjectWidget } from "./ProjectWidget";
import { BorderContainedSection } from "./BorderContainedSection";
import { projects } from "../../data/projects-data";

export const Projects = () => {
  const ref = useRef();
  const isVisible = useElementInViewport(ref, (e) => {
    const { current } = ref;
    return (
      window.scrollY > (current.offsetTop + current.offsetHeight)
      || e.isIntersecting
    );
  });
  console.log(projects[1]);

  return (
    <BorderContainedSection 
      className="projects-section"
      sectionTitle="Projects"
    >
      <div ref={ref}>
      {isVisible && (
        <div className="projects">
          {projects.map((p, i) => (
            <ProjectWidget 
              name={p.name} 
              key={p.name}
              slideIndex={i + 1}
              imageSrc={p.thumbnail}
              id={p.id}
            />
          ))}
        </div>
      )}
      </div>
    </BorderContainedSection>
  )
}