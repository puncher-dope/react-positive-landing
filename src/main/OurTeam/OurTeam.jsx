import "./Team.css";
import { card } from "../../data";
import OurTeamObj from "./OurTeamObj";
export default function OurTeam() {
  return (
    <div className="container-team">

      <OurTeamObj {...card[0]} />
      <OurTeamObj {...card[1]} />
      <OurTeamObj {...card[2]} />
      <OurTeamObj {...card[3]} />
      <OurTeamObj {...card[4]} />
      <OurTeamObj {...card[5]} />
      {/* <div className="member">
        <div className="bio">
          <img src= alt="" />
          <span>
            <strong>John Smith</strong>
            <br />
            CEO and Founder
          </span>
          <img src="./SocialIcon.svg" alt="" />
        </div>
        <div className="skills1">
          <p>
            10+ years of experience in digital marketing. Expertise in SEO, PPC,
            and content strategy
          </p>
        </div>
      </div> */}
      {/* <div className="member">
        <div className="bio">
          <img src="./JaneDoe.svg" alt="" />
          <span>
            <strong>Jane Doe</strong>
            <br />
            Director of Operations
          </span>
          <img src="./SocialIcon.svg" alt="" />
        </div>
        <div className="skills1">
          <p>
            7+ years of experience in project management and team leadership.
            Strong organizational and communication skills
          </p>
        </div>
      </div>
      <div className="member">
        <div className="bio">
          <img src="./MichaelBrown.svg" alt="" />
          <span>
            <strong>Michael Brown</strong>
            <br />
            Senior SEO Specialist
          </span>
          <img src="./SocialIcon.svg" alt="" />
        </div>
        <div className="skills1">
          <p>
            5+ years of experience in SEO and content creation. Proficient in
            keyword research and on-page optimization
          </p>
        </div>
      </div>
      <div className="member">
        <div className="bio">
          <img src="./EmilyJohnson.svg" alt="" />
          <span>
            <strong>Emily Johnson</strong>
            <br />
            PPC Manager
          </span>
          <img src="./SocialIcon.svg" alt="" />
        </div>
        <div className="skills1">
          <p>
            3+ years of experience in paid search advertising. Skilled in
            campaign management and performance analysis
          </p>
        </div>
      </div>
      <div className="member">
        <div className="bio">
          <img src="./BrianWilliams.svg" alt="" />
          <span>
            <strong>Brian Williams</strong>
            <br />
            Social Media Specialist
          </span>
          <img src="./SocialIcon.svg" alt="" />
        </div>
        <div className="skills1">
          <p>
            4+ years of experience in social media marketing. Proficient in
            creating and scheduling content, analyzing metrics, and building
            engagement
          </p>
        </div>
      </div>
      <div className="member">
        <div className="bio">
          <img src="./SarahKim.svg" alt="" />
          <span>
            <strong>Sarah Kim</strong>
            <br />
            PPC Manager
          </span>
          <img src="./SocialIcon.svg" alt="" />
        </div>
        <div className="skills1">
          <p>
            2+ years of experience in writing and editing. Skilled in creating
            compelling, SEO-optimized content for various industries
          </p>
        </div>
      </div> */}


      <div className="btn1">
        <div className="btn">
          <a href="#">Book a consultation</a>
        </div>
      </div>
    </div>
  );
}
