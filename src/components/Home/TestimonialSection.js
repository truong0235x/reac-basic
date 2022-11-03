import { useEffect, useState } from "react";
import { getUsers } from "../../sevices/users.js";
import './TestimonialSection.css'

function TestimonialSection() {
    const [listUsers, setListUsers] = useState([])
    
    useEffect(()=>{
        getUsers().then((res)=>{
            setListUsers(res)
        })
    },[])

    return (
        <div className="testimonial-section">
            <h3>TESTIMONIALS</h3>
            <h1>Read What Other have to Say</h1>
            <div className="testimonial-section__wrapper">
                {
                    listUsers.map((item, index)=>(
                        <div key={index} className="testimonial-section__wrapper__item">
                            <img src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TestimonialSection;