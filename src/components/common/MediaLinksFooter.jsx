import { FullWidthSection } from "../home/FullWidthSection"
import { GithubLink } from "./GithubLink"
import { EmailLink } from "./EmailLink";
import { LinkedInLink } from "./LinkedInLink";

export const MediaLinksFooter = () => {

  return (
    <FullWidthSection className="media-links footer" bordered={false}>
      <GithubLink />
      <EmailLink />
      <LinkedInLink />
    </FullWidthSection>
  )
}