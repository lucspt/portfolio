import "./Home.css";
import { InteractiveText } from "../common/InteractiveText";
import { GithubLink } from "../common/GithubLink";
import { EmailLink } from "../common/EmailLink";
import { useState } from "react";

let _linksRendered = false;
export const Home = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const [linksRendered, setLinksRendered] = useState(_linksRendered);
  const introDelay = .8;
  return (
    <div className="home">
      <div className="intro">
        <p>Hi,</p>
        <InteractiveText text="I'm Luca Caputo" delay={introDelay}/>
        <InteractiveText
          text="Make yourself at home!"
          order={2}
          block
          delay={introDelay}
          onAnimationEnd={() => {
            setIntroFinished(true);
          }}
        />
      </div>
      {introFinished && (
        <div
          className={linksRendered ? "" : "fade-in"}
          onAnimationEnd={() => {
            _linksRendered = true;
            setLinksRendered(true);
          }}
        >
          <GithubLink />
          <EmailLink />
        </div>
      )}
    </div>
  );
};
