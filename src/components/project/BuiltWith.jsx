import { SlideUpAnimation } from "../common/SlideUpAnimation";

export const BuiltWith = ({ tools }) => {

  return (
    <div className="built-with">
      <SlideUpAnimation>
          <span className="title vertical-text">Built with:</span>
          <div className="tools">
              {tools.map(({ name, LogoComponent }, i) => (
                <SlideUpAnimation order={i + 1} offsetY={30} key={name}>
                  <span className="logo">
                    <LogoComponent />
                  </span>
                </SlideUpAnimation>
              ))}
          </div>
      </SlideUpAnimation>
    </div>
  )
}