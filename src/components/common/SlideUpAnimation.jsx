import "./SlideUpAnimation.css";

const animDelay = .1;

export const SlideUpAnimation = ({ order=0, offsetY=50, children }) => {

  return (
    <div
     className={"slide-up"}
     style={{ 
      animationDelay: `${order * animDelay}s`, 
      transform: `translateY(${offsetY}px)`
    }}
    >
      { children }
    </div>
  )
}