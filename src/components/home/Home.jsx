import "./Home.css";
import { InteractiveText } from "../common/InteractiveText";
import { MediaLinksFooter } from "../common/MediaLinksFooter";
import { useRef } from "react";
import { Projects } from "./Projects";
import { FullWidthSection } from "./FullWidthSection";
import { BorderContainedSection } from "./BorderContainedSection";
import { Tools } from "./Tools";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export const Home = () => {
  useScrollToTop();

  return (
    <div className="home">
      <BorderContainedSection className="intro home-section" borderTop={false}>
        <span>Hi, </span>
        <InteractiveText text="I'm Luca Caputo" order={1} />
        <InteractiveText
          text="Make yourself at home!"
          order={2}
          block
        />
      </BorderContainedSection>
      <FullWidthSection className="cliffhanger">
        <h2>
          <span>
            I'm a software engineer who likes turning ideas into reality,
            especially to help the world. I also love the environment.
          </span>
        </h2>
      </FullWidthSection>
      <Projects />
      <Tools />
      <MediaLinksFooter />
      <div className="scroll-padding-bottom container-border" />
    </div>
  );
};
