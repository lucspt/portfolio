import chevronLeft from "../../vectors/chevron-left.svg";
import chevronRight from "../../vectors/chevron-right.svg";

export const ProjectsScroller = ({
  numProjects,
  next,
  prev,
  currentSlide,
  moveToIdx,
}) => {
  return (
    <div className="scroll">
      <button onClick={prev}>
        <img src={chevronLeft} />
      </button>
      <div className="scroll-position">
        {Array.from({ length: numProjects }).map((_, i) => (
          <button onClick={() => moveToIdx(i)}>
            <span
              className={`scroll-indicator${
                Math.abs(currentSlide) === i ? " active" : ""
              }`}
              key={i}
            ></span>
          </button>
        ))}
      </div>
      <button onClick={next}>
        <img src={chevronRight} />
      </button>
    </div>
  );
};
