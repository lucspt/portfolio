import { InteractiveLink } from "../common/InteractiveLink";
import { MediaLinksFooter } from "../common/MediaLinksFooter";
import "./About.css";

export const About = () => {


  return (
    <div className="about">
      <header className="contained-width padded-container">
        <div className="header-container">
          <span className="about">about</span>
          <div className="desc-container">
            <h1>Hey,</h1>
            <p>
              my name is Luca. 
              I'm recognized by many as one of the best coders in the world. 
              Lol, just kidding. 
              Actually, I'm an ever aspiring learner, and I like to code because of the way it engages my mind.
              The idea of impact always catches my attention, and usually excites me profoundly. I could say 
              that I am calmy confident, intriguingly innovative and kindly outgoing, though I think it would 
              be even better to
            </p>
            <InteractiveLink className="prove-it-link">
              <a href="mailto:lucacaputodev@gmail.com" className="prove-it">Prove it</a> 
            </InteractiveLink>
          </div>
        </div>
      </header>
      <MediaLinksFooter />
    </div>  
  )
}