import React from "react";

const ScaleneHero = ({title, heading, subheading, image, description, logo, buttonLabel}) => (
  <div className="d-flex flex-column bg-primary vh-100 shadow">
    <div className="d-flex flex-row w-100 justify-content-between z-index-3">
      <div className="d-flex flex-row align-self-end justify-content-end align-items-end text-white hero-left-content-mobile h-100 w-50">
        <div className="d-flex flex-column ">
            <h1 
             style={{display: `${heading ? "inline" : "none"}`}} 
             data-aos="fade-down" 
             data-aos-delay="500" 
             className="ms-3 ms-md-5">
          <b>{heading}</b>
        </h1>
        <h2 
         style={{display: `${subheading ? "inline" : "none"}`}}  
         className="ms-3 ms-md-5">
          {subheading}
        </h2>
        <p
         style={{display: `${description ? "block" : "none"}`}} 
         className="ms-3 ms-md-5">
          {description}
        </p>
        <div class="d-grid gap-2 d-md-block">
          <button
           style={{display: `${buttonLabel ? "inline" : "none"}`}} 
           type="button" 
           className="btn btn-info btn-md mt-4 mb-4 ms-3 ms-md-5 shadow">
            {buttonLabel}
          </button>
        </div>
        </div>
        
      </div>
      <div className="d-flex flex-column w-50 align-self-end justify-content-center text-light vh-80 p-3">
        <div
         style={{display: `${logo ? "inline" : "none"}`}}
         className="mb-4 mt-3 me-2 align-self-end d-none d-sm-inline"
        >
          {logo} 
        </div>
          <div
           className="text-end w-60 align-self-end"
           style={{display: `${title ? "inline" : "none"}`}}
          >
             <h1 className="display-5 me-md-4 " data-aos="fade-down" data-aos-delay="500">{title}</h1>
           </div>
      </div>
    </div>
    <div className="d-flex flex-row w-100 z-index-2">
        <div className="overlay"></div>
    
    </div>
    <img src={image} className="scalene-hero-img"/>
  </div>

)
export default ScaleneHero;