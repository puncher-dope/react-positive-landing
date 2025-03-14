export default function OurTeamObj(props) {
  return (<>
    <div className="member">
      <div className="bio">
        <img src={props.avatar} alt="" />
        <span>
          <strong>{props.name}</strong>
          <br />
          {props.profession}
        </span>
        <img src="./ImgForHome//SocialIcon.svg" alt="" />
      </div>
      <div className="skills1">
        <p>
          {props.skills}
        </p>
      </div>
    </div>
  </>)
}