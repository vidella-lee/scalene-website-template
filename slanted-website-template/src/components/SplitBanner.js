const SplitBanner = ({ image, title, paragraph, paragraphColor, bgColor, titleColor }) => (
  <div className="d-flex flex-column flex-md-row p-0 m-0 vh-md-100 vw-100 overflow-hidden" data-aos="fade-down" data-aos-delay="400">
    <div
      className={`${bgColor ? bgColor : ""} w-100 h-100 w-md-50 p-0`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center"
      }}
    >
      {/* <img className="w-100 object-fit-fill h-100" src={image} alt="demo" /> */}
    </div>
    <div className={`${bgColor ? bgColor : ""} w-md-50 text-center text-sm-end d-flex flex-column justify-content-start justify-content-md-center p-4 p-sm-5`}>
      <div
        className="row"
        style={{ display: `${title ? "inline" : "none"}` }}>
        <h2 className={`${titleColor ? titleColor : ""} mb-3`}>
          {title}
        </h2>
      </div>
      <div
        style={{ display: `${paragraph ? "inline" : "none"}` }}
        className="row"
        data-aos="fade-down" data-aos-delay="500">
        <p
          className={`${paragraphColor ? paragraphColor : ""} display-5`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  </div>
)

export default SplitBanner;