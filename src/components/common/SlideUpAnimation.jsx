import "./SlideUpAnimation.css";

const animDelay = .1;

export const SlideUpAnimation = ({ order=0, onFinished, shouldAnimate=true, offsetY=50, children }) => {

  return (
    <div
     className={shouldAnimate ? "slide-up" : ""}
     style={{ 
      animationDelay: `${order * animDelay}s`, 
      transform: `translateY(${offsetY}px)`
    }}
    >
      { children }
    </div>
  )
}