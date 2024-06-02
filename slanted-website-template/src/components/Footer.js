const Footer = ({ bgColor, textColor, linkColor }) => {
  return (
    <div
      className={`container-fluid d-flex flex-column justify-content-center ${
        bgColor ? bgColor : "bg-primary"
      } ${textColor ? textColor : "text-light"} p-5 min-vh-50`}
    >
      <div className="row">
        <div className="d-none d-sm-block col-2 col-sm-4 p-5">
          <h5>
            <b>About Us</b>
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </p>
        </div>
        <div className="col-12 col-sm-4 p-5 text-center">
          <p>
            <b>Connect With Us!</b>
          </p>
          <a className="link-light text-decoration-none m-2 fs-4 text" href="/">
            <i className="bi bi-facebook"></i>
          </a>
          <a className="link-light text-decoration-none m-2 fs-4 text" href="/">
            <i className="bi bi-instagram"></i>
          </a>
          <a className="link-light text-decoration-none m-2 fs-4 text" href="/">
            <i class="bi bi-linkedin"></i>
          </a>
          <a className="link-light text-decoration-none m-2 fs-4 text" href="/">
            <i class="bi bi-twitter"></i>
          </a>
        </div>
        <div className="col-6 col-sm-2 p-5 text-center text-sm-start">
          <p>
            <b>Resources</b>
          </p>
          <ul className="no-bullets">
            <li>
              <a className="link-light text-decoration-none" href="/">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="link-light text-decoration-none" href="/">
                FAQ
              </a>
            </li>
            <li>
              <a className="link-light text-decoration-none" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-sm-2 p-5 text-center text-sm-start">
          <p>
            <b>Company</b>
          </p>
          <ul className="no-bullets">
            <li>
              <a className={`link-light text-decoration-none`} href="/">
                Careers
              </a>
            </li>
            <li>
              <a className={`link-light text-decoration-none`} href="/about-us">
                About Us
              </a>
            </li>
            <li>
              <a className={`link-light text-decoration-none`} href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className={`row text-center`}>
          <p>
            <b>©2024</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
