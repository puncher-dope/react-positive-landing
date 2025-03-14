
import "../styles/index.css";
import "./modal.css";
import "../styles/stylesForButtons.css";
import { useState } from "react";
export default function ModalObj(props) {
  const [first, setFirst] = useState(false);

  // const newBackground = first ? "" : "part2";
  // const hidden = first ? "" : "hidden";
  // const btn = first ? "-" : "+";

  return (
    <div className={`fullCard1 ${first ? '' : 'part2'}`}>
      <div className="part1">
        <div className="prepart">
          <h2>{props.num}</h2>
          <p>{props.title}</p>
        </div>
        <button onClick={() => { setFirst(!first) }}>{first ? '-' : '+'}</button>
      </div>
      <div className={`podText1 ${first ? '' : 'hidden'}`}>
        <p>{props.desc}</p>
      </div>
    </div >
  )
}