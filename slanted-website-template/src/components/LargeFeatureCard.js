const LargeFeatureCard = ({ image, title, description, addDelay, bgColor, textColor }) => (
  <div
    className={`d-flex card shadow ${bgColor ? bgColor : "bg-light-faded"} ${textColor ? textColor : ""} text-center justify-content-center align-items-center p-3 p-sm-5 rounded-3 border-0`}
    data-aos="fade-down"
    data-aos-delay={400 + addDelay}
    style={{ width: "20rem" }}
  >
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <img
      className="large-feature-card-img rounded-circle bg-primary"
      src={image}
    />
    <div className={`card-body`}>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default LargeFeatureCard;
