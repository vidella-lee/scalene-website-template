import React from 'react';

//Call To Action Banner with Button

const CTABanner = ({image, title, description, buttonCTA}) => (
  <div className="container-fluid mb-5 mt-5 shadow-sm" data-aos="fade-down" data-aos-delay="500">
    <div className="row">
      
      <div className="col d-flex flex-column justify-content-start justify-content-md-center p-3 p-sm-5">
         <div
          className="row"
          style={{display: `${title ? "inline" : "none"}`}}
          data-aos="fade-down" data-aos-delay="500"
          >
            <h1 className="mb-3">
              {title}
            </h1>
          </div>

          <div
           className="row"
           style={{display: `${description ? "inline" : "none"}`}}
           data-aos="fade-down" data-aos-delay="500">
            <p>{description}</p>
          </div>
          
          <div>
          <button
           style={{display: `${buttonCTA ? "inline" : "none"}`}} 
           type="button" 
           className="btn btn-info btn-lg mt-3 mb-3 shadow">
            {buttonCTA}
          </button>
        </div>
      </div>
      <div className="col p-0">
        <img className="cta-banner-img" src={image} />
      </div>
    </div>
       
  </div>
)

export default CTABanner;