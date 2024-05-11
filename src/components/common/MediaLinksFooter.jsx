import { FullWidthSection } from "../home/FullWidthSection"
import { GithubLink } from "./GithubLink"
import { EmailLink } from "./EmailLink";

export const MediaLinksFooter = () => {

  return (
    <FullWidthSection className="media-links footer" bordered={false}>
      <GithubLink />
      <EmailLink />
    </FullWidthSection>
  )
}