import "./SlideUpAnimation.css";

const animDelay = .1;

export const SlideUpAnimation = ({ order=0, onFinished, shouldAnimate=true, children }) => {

  return (
    <div
     className={shouldAnimate ? "slide-up" : ""}
     style={{ animationDelay: `${order * animDelay}s` }}
    >
      { children }
    </div>
  )
}