import React from 'react';

const SlantedBanner = ({image, title, description}) => (
  <div className="container-fluid mb-5 mt-5 shadow-sm" data-aos="fade-down" data-aos-delay="500">
    <div className="row">
      <div className="col-12 col-sm-7 p-0">
        <img className="slanted-banner-img" src={image} />
      </div>
      <div className="col-12 col-sm-5 text-center text-sm-end d-flex flex-column justify-content-start justify-content-md-center p-4 p-sm-5">
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

    </div>
       
  </div>
)

export default SlantedBanner;