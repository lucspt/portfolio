import "./Home.css";
import { InteractiveText } from "../common/InteractiveText";
import { GithubLink } from "../common/GithubLink";
import { EmailLink } from "../common/EmailLink";
import { useState } from "react";
import { Projects } from "./Projects";
import { FullWidthSection } from "./FullWidthSection";
import { BorderContainedSection } from "./BorderContainedSection";
import { Languages } from "./Languages";

let _contentRendered = false;
export const Home = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const [contentRendered, setContentRendered] = useState(_contentRendered);

  return (
    <div className="home">
      <BorderContainedSection className="intro home-section" borderTop={false}>
        <span>Hi, </span>
        <InteractiveText text="I'm Luca Caputo" order={1} />
        <InteractiveText
          text="Make yourself at home!"
          order={2}
          block
          onAnimationEnd={() => {
            setIntroFinished(true);
          }}
        />
      </BorderContainedSection>
      <FullWidthSection className="cliffhanger">
        <div className="spacing">
          <p>
            I'm a software engineer who likes turning ideas into reality,
            especially to 
            <br />
            help the world. I also love the environment.
          </p>
        </div>
      </FullWidthSection>
      <Projects />
      <div
        className={contentRendered ? "" : "fade-in"}
        onAnimationEnd={() => {
          _contentRendered = true;
          setContentRendered(true);
        }}
      ></div>
      <Languages />
      <FullWidthSection className="media-links" containWidth bordered={false}>
        <GithubLink />
        <EmailLink />
      </FullWidthSection>
      <div className="scroll-padding-bottom container-border" />
    </div>
  );
};
