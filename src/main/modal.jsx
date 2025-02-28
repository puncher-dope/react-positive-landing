import "./styles/index.css";
import "./styles/modal.css";
import "boxicons";
import "./styles/stylesForButtons.css";
import { useState } from "react";

export default function Modal() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);

  const changeBg = () => {
    setFirst(!first);
  };
  const newBackground = first ? "" : "part2";
  const hidden = first ? "" : "hidden";
  const btn = first ? "-" : "+";

  const changeBg1 = () => {
    setSecond(!second);
  };
  const newBackground1 = second ? "" : "part2";
  const hidden1 = second ? "" : "hidden";
  const btn1 = second ? "-" : "+";

  const changeBg2 = () => {
    setThird(!third);
  };
  const newBackground2 = third ? "" : "part2";
  const hidden2 = third ? "" : "hidden";
  const btn2 = third ? "-" : "+";

  const changeBg3 = () => {
    setFour(!four);
  };
  const newBackground3 = four ? "" : "part2";
  const hidden3 = four ? "" : "hidden";
  const btn3 = four ? "-" : "+";

  const changeBg4 = () => {
    setFive(!five);
  };
  const newBackground4 = five ? "" : "part2";
  const hidden4 = five ? "" : "hidden";
  const btn4 = five ? "-" : "+";

  const changeBg5 = () => {
    setSix(!six);
  };
  const newBackground5 = six ? "" : "part2";
  const hidden5 = six ? "" : "hidden";
  const btn5 = six ? "-" : "+";

  return (
    <>
      <div className="containerManual">
        <div className={`fullCard1 ${newBackground}`}>
          <div className="part1">
            <div className="prepart">
              <h2>01</h2>
              <p>Consultation</p>
            </div>
            <button onClick={changeBg}>{btn}</button>
          </div>
          <div className={`podText1 ${hidden}`}>
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>

        <div className={`fullCard1 ${newBackground1}`}>
          <div className="part1">
            <div className="prepart">
              <h2>02</h2>
              <p>Research and Strategy Development</p>
            </div>
            <button onClick={changeBg1}>{btn1}</button>
          </div>
          <div className={`podText1 ${hidden1}`}>
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>

        <div className={`fullCard1 ${newBackground2}`}>
          <div className="part1">
            <div className="prepart">
              <h2>03</h2>
              <p>Implementation</p>
            </div>
            <button onClick={changeBg2}>{btn2}</button>
          </div>
          <div className={`podText1 ${hidden2}`}>
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>

        <div className={`fullCard1 ${newBackground3}`}>
          <div className="part1">
            <div className="prepart">
              <h2>04</h2>
              <p>Monitoring and Optimization</p>
            </div>
            <button onClick={changeBg3}>{btn3}</button>
          </div>
          <div className={`podText1 ${hidden3}`}>
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>
        <div className={`fullCard1 ${newBackground4}`}>
          <div className="part1">
            <div className="prepart">
              <h2>05</h2>
              <p>Reporting and Communication</p>
            </div>
            <button onClick={changeBg4}>{btn4}</button>
          </div>
          <div className={`podText1 ${hidden4}`}>
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>
        <div className={`fullCard1 ${newBackground5}`}>
          <div className="part1">
            <div className="prepart">
              <h2>06</h2>
              <p>Continual Improvement</p>
            </div>
            <button onClick={changeBg5}>{btn5}</button>
          </div>
          <div className={`podText1 ${hidden5}`}>
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// function openManual(){
//         const btn1 = document.querySelector('.btn1')
//         const fullCard1 = document.querySelector('.fullCard1')
//         const podText1 = document.querySelector('.podText1')
//         let count = 1
//         btn1.addEventListener('click', () => {
//             count++
//             console.log(count);

//             fullCard1.style.background = 'white'
//             podText1.style.display = 'none'
//         })
// }
// openManual()
