import images from "../../assets/images/index.js"
import'./ContacSection.css'

function ContacSection() {
    return (
        <div className="contect-section">
            <div className="contect-section__img">
                <img src={images.customerSupport} alt="" />
            </div>
            <div className="contect-section__text">
                <h1>Be a part of the next big thing</h1>
                <p>We work with Brans, Startups, to SMEs. Colaborate for more impact and growt</p>
                <button>Contact Us</button>
            </div>
        </div>
    )
}

export default ContacSection;