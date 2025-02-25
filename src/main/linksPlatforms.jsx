import "./styles/index.css"
import "./styles/linksPlatforms.css"
import amazon from "/amazonLogo.svg"
import dribble from "/dribbleLogo.svg"
import hubspot from '/hubspotLogo.svg'
import notion from "/notionLogo.svg"
import netflix from "/netflixLogo.svg"
import zoom from "/zoom.svg"

function LinksPlatforms(){
    return(
        <>
             <div className="links" >
        <a href="https://www.amazon.com/" target="_blank">
            <img src={amazon} alt="amazon" />
        </a>
        <a href="https://dribbble.com/?/" target="_blank">
            <img src={dribble} alt="dribble" />
        </a>
        <a href="https://www.hubspot.com/" target="_blank">
            <img src={hubspot} alt="hubspot" />
        </a>
        <a href="https://www.notion.com/?ref=website-popularity" target="_blank">
            <img src={notion} alt="notion" />
        </a>
        <a href="https://www.netflix.com/ru/" target="_blank">
            <img src={netflix} alt="netflix" />
        </a>
        <a href="https://www.zoom.com/ru" target="_blank">
           <img src={zoom} alt="zoom" />
        </a>
    </div>
        </>
    );
}

export default LinksPlatforms