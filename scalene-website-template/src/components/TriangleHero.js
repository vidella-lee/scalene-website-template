import React from "react";

const TriangleHero = ({title, heading, subheading, image, description, logo, buttonLabel}) => (
  <div
   className="full-page-hero"
   style={{
    background: `url(${image})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
     }}
    >
      <div className="hero-overlay"></div>
      <div
       className="hero-content"
       >
        <h1 
         style={{display: `${heading ? "inline" : "none"}`}} 
         data-aos="fade-up" 
         data-aos-delay="500" 
         className="hero-text">
             <b>{heading}</b>
        </h1>
        <h2 
         style={{display: `${subheading ? "inline" : "none"}`}} 
         id="hero-subheading" 
         className="hero-text">
             <b>{subheading}</b>
        </h2>
        <p
         style={{display: `${description ? "inline" : "none"}`}} 
         className="hero-text">
             {description}
        </p>
        <div class="d-grid gap-2 d-md-block">
          <button
           style={{display: `${buttonLabel ? "inline" : "none"}`}} 
           type="button" 
           className="btn btn-info btn-md mt-4 mb-4">
             {buttonLabel}
          </button>
        </div>
      
      </div>
    <div className="hero-triangle-content-row">
      <div
       className="hero-triangle-content"
      >
        <div
         style={{display: `${logo ? "flex" : "none"}`}}
         className="hero-triangle-logo"
        >
          {logo} 
        </div>
          <div
           className="hero-triangle-title"
           style={{display: `${title ? "flex" : "none"}`}}
          >
             <h1 class="display-6" data-aos="fade-up" data-aos-delay="500">{title}</h1>
           </div>
        
        </div>
      </div>
  <div className="hero-triangle-container">
    <div className="hero-triangle">
   
    </div>
    </div>
 </div>
)

export default TriangleHero;

