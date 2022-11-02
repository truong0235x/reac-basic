import images from "../../assets/images/index.js"
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-section__text">
                <h1>Building digital products, brands & experience</h1>
                <p>Digital Agency is your online team mangement tool that easy and prompt</p>
                <button>Contact Us</button>
            </div>
            <div className="hero-section__img">
                <img src={images.businessPeople} alt="" />
            </div>
        </div>
    )
}

export default HeroSection;