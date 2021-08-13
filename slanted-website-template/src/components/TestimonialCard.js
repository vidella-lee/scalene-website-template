import React from "react";

const TestimonialCard = ({quote, name, image, addDelay}) => (
    <div className="d-flex card bg-transparent text-center justify-content-center align-items-center p-5 rounded-3 border-0" data-aos="fade-down" data-aos-delay={400 + addDelay} style={{width: "20rem"}}>     
      <div className="card-body">
        <blockquote class="blockquote mb-5">
          <p className="card-title">"{quote}"</p>
        </blockquote>
        <footer className="d-flex align-items-center align-self-end w-100">
          <img className="testimonial-card-img rounded-circle me-2" src={image} />
          <p className="blockquote-footer m-0 text-nowrap">{name}</p>
        </footer>
      </div>
      
    </div>
)

export default TestimonialCard;