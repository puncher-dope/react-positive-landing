


export default function CasesStudiesObj({ className, props }) {


  return (
    <>
      <div className={className}>
        <p>{props}</p>
        <div className="studiosLink">
          <a href="">Learn more </a><img src="./ImgForHome/arrowWthoutCircle.svg" alt="" />
        </div>
      </div>
    </>
  )
}