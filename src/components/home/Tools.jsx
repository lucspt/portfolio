import { JavaScriptLogo } from "../common/JavaScriptLogo";
import { PythonLogo } from "../common/PythonLogo";
import { ReactLogo } from "../common/ReactLogo";
import { FullWidthSection } from "./FullWidthSection";
import { TypeScriptLogo } from "../common/TypeScriptLogo";
import { CSSLogo } from "../common/CSSLogo";
import { MongoDBLogo } from "../common/MongoDBLogo";
import { SlideUpAnimation } from "../common/SlideUpAnimation";
import { useRef } from "react";

export const Tools = ({}) => {
  const visibilityRef = useRef();

  const logos = [
    PythonLogo,
    JavaScriptLogo,
    ReactLogo,
    TypeScriptLogo,
    CSSLogo,
    MongoDBLogo,
  ];

  return (
    <FullWidthSection className="tools" title="Tools">
      <div ref={visibilityRef} />
      <div className="logos">
        {logos.map((LogoComponent, i) => (
          <SlideUpAnimation order={i + 1} key={i} onlyAnimateOnce>
            <LogoComponent />
          </SlideUpAnimation>
        ))}
      </div>
    </FullWidthSection>
  );
};
