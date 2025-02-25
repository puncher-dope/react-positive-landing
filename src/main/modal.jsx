import "./styles/index.css"
import "./styles/modal.css"
import "boxicons"

function Modal(){
    return (
        <>
        <div className="container">
            <div className="part1">
                <div className="prepart">
                    <h2>01</h2>
                    <p>Consultation</p>
                </div>
                <button className="btn"><i class='bx bx-plus-medical'></i></button>
            </div>
            <div className="part2">
                <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
            </div>
        </div>
        </>
    );
}









export default Modal