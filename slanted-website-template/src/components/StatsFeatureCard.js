import React from "react";

const StatsFeatureCard = ({image, header, description, addDelay}) => (
    <div className="d-flex card bg-transparent text-center justify-content-center align-items-center p-5 rounded-3 border-0" data-aos="fade-down" data-aos-delay={400 + addDelay} style={{width: "20rem"}}>
      <img className="stats-feature-card-img rounded-circle" src={image} />
      <div className="card-body">
        <b><p className="card-title display-6">{header}</p></b>
        <p className="card-text">{description}</p>
      </div>
    </div>
)

export default StatsFeatureCard;