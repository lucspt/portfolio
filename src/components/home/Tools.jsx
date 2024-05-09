import { JavaScriptLogo } from "../common/JavaScriptLogo"
import { PythonLogo } from "../common/PythonLogo"
import { ReactLogo } from "../common/ReactLogo"
import { FullWidthSection } from "./FullWidthSection"
import { TypeScriptLogo } from "../common/TypeScriptLogo";
import { CSSLogo } from "../common/CSSLogo";
import { MongoDBLogo } from "../common/MongoDBLogo";


export const Tools = ({ }) => {

  return (
    <FullWidthSection className="tools" title="Tools">
      <div className="logos">
        <PythonLogo />
        <JavaScriptLogo />
        <ReactLogo />
        <TypeScriptLogo />
        <CSSLogo />
        <MongoDBLogo />
      </div>
    </FullWidthSection>
  )
}