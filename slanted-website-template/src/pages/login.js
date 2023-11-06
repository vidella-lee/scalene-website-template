//COMPONENTS
import LoginCard from "../components/LoginCard";

import meeting from "../images/business-meeting-1.jpg";
import city from "../images/pexels-david-skyrius.jpg";
import logo from "../logo.svg";

function Login() {
  return (
    <div
      className="container-fluid p-0 min-vh-100 d-flex justify-content-center overflow-hidden bg-primary bg-gradient"
    >
      <div className="full-overlay position-relative min-h-100">
        <div className="row d-flex flex-column ms-1 flex-xl-row h-100 w-100 align-items-center justify-content-center ">
          <div className="col-12 col-lg-4 p-5 d-flex flex-column justify-content-center align-items-center text-center">
            <h1
              className="display-4 text-white"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Welcome back!
            </h1>
            <div
              className="display-2 text-white m-3"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <img className="logo" src={logo} alt="example logo" />
            </div>
          </div>
          <div className="col-12 col-md-9 col-lg-6 col-xxl-4 mb-5 mt-lg-5 d-flex flex-column align-items-center">
            <LoginCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
