import React from "react";

const StatsFeatureCard = ({ image, header, description, addDelay, alt, textColor = "text-primary", SVGIconColor = "text-primary" }) => (
  <div className={`${textColor} d-flex card bg-transparent text-center justify-content-center align-items-center p-5 rounded-3 border-0`} data-aos="fade-down" data-aos-delay={400 + addDelay} style={{ width: "20rem" }}>
    <div className={`${SVGIconColor}`}><img className="stats-feature-card-img rounded-circle" alt={alt} src={image} /></div>
    <div className="card-body">
      <b><p className="card-title display-6">{header}</p></b>
      <p className="card-text">{description}</p>
    </div>
  </div>
)

export default StatsFeatureCard;