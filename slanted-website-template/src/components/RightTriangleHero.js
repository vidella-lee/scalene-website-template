import React from "react";

const RightTriangleHero = ({
  title,
  heading,
  subheading,
  image,
  description,
  logo,
  buttonLabel,
  alt,
}) => (
  <div className="d-flex flex-column vh-100 hero-container">
    <div className="d-flex flex-row w-100 justify-content-between z-index-3">
      <div className="d-flex flex-row align-self-end justify-content-end align-items-end text-white hero-left-content-mobile hero-left-content vh-80 w-100 pe-sm-5 me-sm-5">
        <div
          className="d-flex flex-column ps-3 p-5 w-100 text-break rounded-pill hero-main-content"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <h1
            style={{
              display: `${heading ? "inline" : "none"}`,
              paddingLeft: "3%",
              paddingRight: "3%",
            }}
            className="ms-3 ms-md-5"
          >
            <b>{heading}</b>
          </h1>
          <h2
            style={{ display: `${subheading ? "inline" : "none"}` }}
            className="ms-3 ms-md-5"
          >
            {subheading}
          </h2>
          <p
            style={{ display: `${description ? "block" : "none"}` }}
            className="ms-3 ms-md-5 w-100 hero-description"
          >
            {description}
          </p>
          <div class="d-grid gap-2 d-md-block">
            <button
              style={{ display: `${buttonLabel ? "inline" : "none"}` }}
              type="button"
              className="btn btn-info btn-md mt-4 mb-4 ms-3 ms-md-5 shadow"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex w-50 flex-column align-self-start align-self-sm-center justify-content-end align-items-center text-white pt-3 mt-5">
        <div
          style={{ display: `${logo ? "inline" : "none"}` }}
          className="mb-5 mt-5 me-2 logo-box"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img className="logo" src={logo} alt="example logo" />
        </div>
        <div
          className="align-self-center text-center ms-0 ms-sm-5 pe-2 pe-sm-0"
          style={{ display: `${title ? "inline" : "none"}` }}
        >
          <h1
            className="me-md-4 mr-5 display-1 "
            data-aos="fade-down"
            data-aos-delay="500"
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
    <div className="d-flex flex-row w-100 z-index-2">
      <div className="right-overlay"></div>
    </div>
    <img src={image} className="right-triangle-hero-img" alt={alt} />
  </div>
);
export default RightTriangleHero;
