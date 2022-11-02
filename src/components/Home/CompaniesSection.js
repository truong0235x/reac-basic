import images from "../../assets/images/index.js"
import'./CompaniesSection.css'

function CompaniesSection() {
    return (
        <div className="compenies-section">
            <div className="compenies-section__text">
                Trusted by 4,000+ companies
            </div>
            <div className="compenies-section__img">
                <img src={images.logosPC} alt=""/>
            </div>
            <div className="compenies-section__img-mobile">
                <img src={images.logosMobile} alt="" />
            </div>
        </div>
    )
}

export default CompaniesSection;