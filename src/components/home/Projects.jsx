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
              link={p.url} 
              name={p.name} 
              key={p.name}
              slideIndex={i + 1}
              imageSrc={p.image}
            />
          ))}
        </div>
      )}
      </div>
    </BorderContainedSection>
  )
}