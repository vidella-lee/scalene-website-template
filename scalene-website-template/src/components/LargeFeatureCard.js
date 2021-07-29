import React from "react";

const LargeFeatureCard = ({image, title, description}) => (
    <div className="d-flex card bg-light mb-5 text-center justify-content-center align-items-center p-5 rounded-3" style={{width: "18rem"}}>
      <img className="large-feature-card-img rounded-circle" src={image} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
)

export default LargeFeatureCard;