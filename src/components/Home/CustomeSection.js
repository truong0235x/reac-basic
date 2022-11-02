import images from "../../assets/images/index.js"
import "./CustomeSection.css"

function CustomeSection() {
    return (
        <div className="custom-section">
            <div className="custom-section__text">
                <h1>Custome & Plugin Development</h1>
                <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
                <img src={images.arrow} alt="" />
            </div>
            <div className="custom-section__img">
                <img src={images.businessman} alt="" />
            </div>
        </div>
    )
}

export default CustomeSection;