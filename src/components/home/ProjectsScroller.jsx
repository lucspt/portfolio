

export const ProjectsScroller = ({ numProjects, next, prev, currentSlide }) => {
  

  return (
    <div className="scroll">
      <button onClick={prev}>
        <span className="material-symbols-outlined arrow">chevron_left</span>
      </button>
      <div className="scroll-position">
        {Array.from({ length: numProjects }).map((_, i) => (
          <span className={`scroll-indicator${Math.abs(currentSlide) === i ? " active" : ""}`} key={i}></span>
        ))}
      </div>
      <button onClick={next}>
        <span className="material-symbols-outlined arrow">chevron_right</span>
      </button>
    </div>
  )
}