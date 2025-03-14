import "../styles/index.css"
import "./casesStudies.css"
import CasesStudiesObj from "./CasesStudiesObj";
import { text } from "../../data"

export default function CasesStudies() {
    return (
        <div className="caseStudies">
            <CasesStudiesObj className='studies1' props={text[0].title} />
            <CasesStudiesObj className='studies2' props={text[1].title} />
            <CasesStudiesObj className='studies3' props={text[2].title} />
        </div>
    );
}