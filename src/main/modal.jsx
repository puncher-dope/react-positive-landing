import Button from "./buttons.jsx";
import "./styles/index.css"
import "./styles/modal.css"
import "boxicons"
import "./buttons.jsx"
import "./styles/stylesForButtons.css"

function Modal(){
    return (
        <>
        <div className="containerManual">
            <div className="fullCard1">
                <div className="part1">
                    <div className="prepart">
                        <h2>01</h2>
                        <p>Consultation</p>
                    </div>
                    <Button>-</Button>
                </div>
                <div className="podText1">
                    <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
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














export default Modal