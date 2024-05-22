import { JavaScriptLogo } from "../common/JavaScriptLogo";
import { PythonLogo } from "../common/PythonLogo";
import { ReactLogo } from "../common/ReactLogo";
import { FullWidthSection } from "./FullWidthSection";
import { TypeScriptLogo } from "../common/TypeScriptLogo";
import { CSSLogo } from "../common/CSSLogo";
import { MongoDBLogo } from "../common/MongoDBLogo";
import { SlideUpAnimation } from "../common/SlideUpAnimation";
import { useElementInViewport } from "../../hooks/useElementInViewport";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

export const Tools = ({}) => {
  const visibilityRef = useRef();
  const alreadyAnimated = useRef(false);
  const location = useLocation();

  const isVisible = useElementInViewport(visibilityRef, ([e]) => {
    const { isIntersecting } = e;
    if (isIntersecting) {
      alreadyAnimated.current = true;
    }
    return isIntersecting;
  });

  return (
    <FullWidthSection className="tools" title="Tools">
      <div ref={visibilityRef} />
      <div className="logos">
      {(isVisible || alreadyAnimated.current) && (
        <>
          <SlideUpAnimation order={1}>
            <PythonLogo />
          </SlideUpAnimation>
          <SlideUpAnimation order={2}>
            <JavaScriptLogo />
          </SlideUpAnimation>
          <SlideUpAnimation order={3}>
            <ReactLogo />
          </SlideUpAnimation>
          <SlideUpAnimation order={4}>
            <TypeScriptLogo />
          </SlideUpAnimation>
          <SlideUpAnimation order={5}>
            <CSSLogo />
          </SlideUpAnimation>
          <SlideUpAnimation order={6}>
            <MongoDBLogo />
          </SlideUpAnimation>
        </>
      )}
      </div>
    </FullWidthSection>
  );
};
