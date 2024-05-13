import chevronLeft from "../../vectors/chevron-left.svg";
import chevronRight from "../../vectors/chevron-right.svg";

export const ProjectsScroller = ({ numProjects, next, prev, currentSlide }) => {
  

  return (
    <div className="scroll">
      <button onClick={prev}>
        <img src={chevronLeft} />
      </button>
      <div className="scroll-position">
        {Array.from({ length: numProjects }).map((_, i) => (
          <span className={`scroll-indicator${Math.abs(currentSlide) === i ? " active" : ""}`} key={i}></span>
        ))}
      </div>
      <button onClick={next}>
        <img src={chevronRight} />
      </button>
    </div>
  )
}