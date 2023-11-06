import SplitHero from "../components/SplitBoxHero/SplitBoxHero";
import PricingCard from "../components/PricingCard";

function Pricing() {
  return (
    <div
      className="bg-primary"
    >
      <SplitHero
        logo={{
          src: "/static/logo.svg",
          alt: "a generic logo for a generic company"
        }}
        title="Split Template"
        titleColor="text-white"
        heading="Pricing Plans"
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
