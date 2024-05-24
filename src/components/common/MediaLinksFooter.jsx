import { NoBorderSection } from "../home/NoBorderSection"
import { GithubLink } from "./GithubLink"
import { EmailLink } from "./EmailLink";
import { LinkedInLink } from "./LinkedInLink";

export const MediaLinksFooter = () => {

  return (
    <NoBorderSection className="media-links footer" bordered={false}>
      <GithubLink />
      <EmailLink />
      <LinkedInLink />
    </NoBorderSection>
  )
}