import React from "react";

const SmallFeatureCard = ({image, title, description, addDelay}) => (
    <div className="d-flex card text-center justify-content-center align-items-center p-3 rounded-3 border-0" data-aos="fade-down" data-aos-delay={400 + addDelay} style={{width: "15rem"}}>
      <img className="small-feature-card-img rounded-circle" src={image} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
)

export default SmallFeatureCard;