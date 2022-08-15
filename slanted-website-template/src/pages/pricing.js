import RightTriangleHero from "../components/RightTriangleHero";
import PricingCard from "../components/PricingCard";

//IMAGES
import heroImage from "../images/business-meeting-1.jpg";
import logo from "../logo.svg";

function Pricing() {
  return (
    <div>
      <RightTriangleHero
        image={heroImage}
        title="Pricing"
        logo={logo}
        heading="Get Started With BusinessName's Product"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      />
      <div className="container-fluid d-flex flex-column align-items-center">
        <div className="row w-100 d-flex mb-5 gx-5 gy-2 justify-content-md-center">
          <div className="col-lg-4 col-md-6 mt-5 mb-lg-5 d-flex flex-column justify-content-start align-items-center">
            <div className="row w-100 vh-10 mb-lg-3 d-none d-sm-flex justify-content-center text-center align-items-center">
              {/**SPACE FOR PROMO TEXT, IF NEEDED**/}
            </div>
            <PricingCard
              title="Basic"
              titleColor="text-white"
              titleBgColor="bg-secondary-faded"
              description="Best for individuals or hobbyists"
              //descriptionColor=""
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
          <div className="col-lg-4 col-md-6 mt-5 mb-lg-5 d-flex flex-column justify-content-start align-items-center">
            <div className="row w-100 vh-10 mb-lg-3 d-flex justify-content-center text-center align-items-center">
              <p className="fs-1 text-uppercase text-secondary">
                <b>Most Popular</b>
              </p>
            </div>
            <PricingCard
              //bgColor="bg-light-faded"
              title="Pro"
              titleColor="text-white"
              titleBgColor="bg-primary"
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
          <div className="col-lg-4 col-md-6 mt-5 mb-lg-5 d-flex flex-column justify-content-start align-items-center">
            <div className="row w-100 vh-10 mb-lg-3  d-none d-sm-flex justify-content-center text-center align-items-center">
              {/**SPACE FOR PROMO TEXT, IF NEEDED. Remove "d-none" class from this div element to use**/}
            </div>
            <PricingCard
              title="Premium"
              titleColor="text-white"
              titleBgColor="bg-secondary-faded"
              description="Best for large teams and enterprises"
              descriptionColor=""
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
