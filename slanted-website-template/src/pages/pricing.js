import RightTriangleHero from "../components/RightTriangleHero";
import SplitHero from "../components/SplitBoxHero/SplitBoxHero";
import PricingCard from "../components/PricingCard";

//IMAGES
//import heroImage from "../images/business-meeting-1.jpg";
import heroImage from "../images/AdobeStock_477547119.jpeg";
import logo from "../logo.svg";

function Pricing() {
  return (
    <div
      className="bg-primary"
    >
      {/* <RightTriangleHero
        image={heroImage}
        title="Pricing"
        logo={logo}
        heading="Get Started With This Product"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      /> */}
      {/* <div
        className="d-flex flex-column w-100 vh-20 justify-content-center p-2"
        data-aos="fade-down"
        data-aos-delay="500"
      // style={{
      //   backgroundImage: `url(${heroImage})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundAttachment: "fixed",
      //   backgroundPosition: "center"
      // }}
      // title="hero image"
      >
        <h1
          className="ms-3 ms-md-5 display-1 fw-bold text-white text-center">
          <b>Pricing Plans</b>
        </h1>
      </div> */}
      <SplitHero
        image={'/static/pexels-kaique-rocha.jpg'}
        //logo={<img src={logo} alt="a generic logo for a generic company" />}
        logo={{
          src: "/static/logo.svg",
          alt: "a generic logo for a generic company"
        }}
        title="Split Template"
        titleColor="text-white"
        heading="Pricing Plans"
        //subheading="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
        //paragraph1="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        paragraph2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
        buttonLabel="Get Started"
        btnHref="#pricing"
        leftBgImg={{
          src: '/static/pexels-kaique-rocha.jpg',
          title: 'background image'
        }}
        rightBgColor="bg-dark"
        reverse={false}
        reverseContent={false}
      />
      <div
        className="container-fluid d-flex flex-column align-items-center"

      >
        <div id="pricing" className="row w-100 d-flex mb-5 gx-5 gy-2 justify-content-md-center">
          <div className="col-lg-3 col-md-6 mt-5 mb-lg-5 d-flex flex-column justify-content-start align-items-center">
            <div className="row w-100 vh-10 mb-lg-3 d-none d-sm-flex justify-content-center text-center align-items-center">
              {/**SPACE FOR PROMO TEXT, IF NEEDED**/}
            </div>
            <PricingCard
              bgColor="bg-white"
              title="Basic"
              titleColor="text-white"
              titleBgColor="bg-dark"
              description="Best for individuals or hobbyists"
              descriptionColor="text-white"
              overview="Lorem ipsum dolor sit amet, consetetur."
              price="$19.99"
              buttonLabel="Get Started"
              listItems={[
                "Selling point 1",
                "Selling point 2",
                "Selling point 3",
              ]}
            />
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mb-lg-5 d-flex flex-column justify-content-start align-items-center">
            <div className="row w-100 vh-10 mb-lg-3 d-flex justify-content-center text-center align-items-center">
              <p className="fs-1 text-uppercase text-info">
                <b>Most Popular</b>
              </p>
            </div>
            <PricingCard
              bgColor="bg-white"
              focus={true}
              //bgColor="bg-light-faded"
              title="Pro"
              titleColor="text-white"
              titleBgColor="bg-info"
              description="Best for small teams and professionals"
              descriptionColor="text-white"
              overview="Lorem ipsum dolor sit amet, consetetur."
              price="$29.99"
              buttonLabel="Get Started"
              listItems={[
                "Selling point 1",
                "Selling point 2",
                "Selling point 3",
              ]}
            />
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mb-lg-5 d-flex flex-column justify-content-start align-items-center">
            <div className="row w-100 vh-10 mb-lg-3  d-none d-sm-flex justify-content-center text-center align-items-center">
              {/**SPACE FOR PROMO TEXT, IF NEEDED. Remove "d-none" class from this div element to use**/}
            </div>
            <PricingCard
              bgColor="bg-white"
              title="Premium"
              titleColor="text-white"
              titleBgColor="bg-dark"
              description="Best for large teams and enterprises"
              descriptionColor="text-white"
              overview="Lorem ipsum dolor sit amet, consetetur."
              price="$39.99"
              buttonLabel="Get Started"
              listItems={[
                "Selling point 1",
                "Selling point 2",
                "Selling point 3",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
