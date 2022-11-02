import images from "../../assets/images/index.js"
import './TestimonialSection.css'

function TestimonialSection() {
    return (
        <div className="testimonial-section">
            <h3>TESTIMONIALS</h3>
            <h1>Read What Other have to Say</h1>
            <div className="testimonial-section__wrapper">
                <div className="testimonial-section__wrapper__item">
                    <img src={images.wasternMan1} alt="" />
                    <h2>Andrew Rathore</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>
                <div className="testimonial-section__wrapper__item">
                    <img src={images.wasternMan2} alt="" />
                    <h2>Vera Duncan</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>
                <div className="testimonial-section__wrapper__item">
                    <img src={images.wasternMan3} alt="" />
                    <h2>Mark Smith</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection;