import images from "../../assets/images/index.js"
import './BrandingSection.css'

function BrandingSection() {
    return (
        <div className="branding-section">
            <div className="branding-section__img">
                <img src={images.designerTeamWorking} alt="" />
            </div>
            <div className="branding-section__text">
                <h1>Branding & Design system</h1>
                <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups</p>
                <img src={images.arrow} alt="" />
            </div>
        </div>
    )
}

export default BrandingSection;