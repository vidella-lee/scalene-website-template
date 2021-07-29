import React from "react";

const TriangleBanner = ({image, title, description}) => (
    <div 
     className="triangle-banner w-100 d-flex bg-light mt-5 mb-5"
     style={{
      background: `url(${image})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
       }}
      >
    <div className="d-flex w-100 justify-content-end ">
      <div
       className="triangle-banner-content w-35"
      >
        <div
         className="text-end"
         style={{display: `${title ? "flex" : "none"}`}}
        >
          <h1 class="display-6" data-aos="fade-up" data-aos-delay="500">{title}</h1>
        </div>
         <div
          style={{display: `${description ? "flex" : "none"}`}}
          className=""
         >
          {description} 
        </div>
        </div>
      </div>
      <div className="banner-triangle">

      </div>
    </div>
)

export default TriangleBanner;