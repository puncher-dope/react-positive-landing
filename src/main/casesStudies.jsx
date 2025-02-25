import "./styles/index.css"
import "./styles/casesStudies.css"

function CasesStudies(){
    return(
        <>
        <div className="caseStudies">
        <div className="studies1">
            <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <div className="studiosLink">
                <a href="">Learn more </a><img src="/arrowWthoutCircle.svg" alt=""/>
            </div>
        </div>
        <div className="studies2">
            <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
            <div className="studiosLink">
                <a href="">Learn more </a><img src="/arrowWthoutCircle.svg" alt=""/>
            </div>
        </div>
        <div className="studies3">
            <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
            <div className="studiosLink">
                <a href="">Learn more </a><img src="/arrowWthoutCircle.svg" alt=""/>
            </div>
            
        </div>
    </div>
        </>
    );
}

export default CasesStudies