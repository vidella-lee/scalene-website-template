import React from 'react';

//Call To Action Banner with Button

const CTABanner = ({image, title, description, buttonCTA}) => (
  <div className="container-fluid mb-5 mt-5 shadow" data-aos="fade-down" data-aos-delay="500">
    <div className="row">
      
      <div className="col text-end d-flex flex-column justify-content-start justify-content-md-center p-md-5">
         <div
          className="row"
          style={{display: `${title ? "inline" : "none"}`}}>
            <h1 className="mb-3">
              {title}
            </h1>
          </div>
          <div
           style={{display: `${description ? "inline" : "none"}`}}
           className="row"
           data-aos="fade-down" data-aos-delay="500">
            {description}
          </div>
      </div>
<div className="col p-0">
        <img className="slanted-banner-img" src={image} />
      </div>
    </div>
       
  </div>
)

export default CTABanner;