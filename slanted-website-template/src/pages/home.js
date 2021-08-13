import "../styles/App.css";

//COMPONENTS
import ScaleneHero from "../components/ScaleneHero";
import LargeFeatureCard from "../components/LargeFeatureCard";
import SmallFeatureCard from "../components/SmallFeatureCard";
import StatsFeatureCard from "../components/StatsFeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import SlantedBanner from "../components/SlantedBanner";
import ClientsCarousel from "../components/ClientsCarousel";
import OwlCarousel from 'react-owl-carousel';


//MATERIAL ICONS (FROM https://fonts.google.com/icons)
import visibilityIcon from "../images/icons/visibility-light.svg";
import bookmarkIcon from "../images/icons/bookmark-light.svg";
import dashbooardIcon from "../images/icons/dashboard-light.svg";
import lockIcon from "../images/icons/lock-light.svg";
import accountSettingsIcon from "../images/icons/account-settings-light.svg";
import groupsIcon from "../images/icons/groups-dark.svg";
import recommendIcon from "../images/icons/recommend-dark.svg";

//OTHER IMAGES
import logo from "../logo.svg"
import heroImage from "../images/business-meeting-1.jpg";

import testimonialUsers from "../components/testimonialUsers";
import { clientLogos } from "../components/clientLogos";

const options ={
  //dots: true,
  //autoHeight: true,
  responsive: {
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:3
    },
    1500: {
      items:4
    }
  }
}

function Home() {
  
  return (
    <div className="w-100 justify-content-center">
      <ScaleneHero
       image={heroImage}
       logo={<img src={logo} />}
       title="A Tagline for a Business Goes Here"
       heading="An H1 Title for a Home Page"
       //subheading="An H2 Subheading"
       description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
       buttonLabel="Get Started"
      />
     <div className="container-fluid">
       <div className="row align-items-center justify-content-center" data-aos="fade-down" data-aos-delay="500">
          <div className="col-lg-7">
            <div className="text-center">
              <h1 className="m-5"><b>Describe Your Service</b></h1>
            </div>
            
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.
              </p>
          </div>
       </div>

{/***** KEY FEATURES SECTION *****/}
       <div className="container-fluid d-flex justify-content-center align-items-center p-5">
         <div className="row d-flex justify-content-center align-items-center g-5">
           <div className="d-flex col-lg-4 justify-content-center align-items-center">
             <LargeFeatureCard
              image={visibilityIcon}
              title="A Key Aspect"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
             />
           </div>
           <div className="d-flex col-lg-4 justify-content-center align-items-center">
             <LargeFeatureCard
              image={bookmarkIcon}
              title="A Key Aspect"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              addDelay={50}
             />
           </div>
           <div className="d-flex col-lg-4 justify-content-center align-items-center">
             <LargeFeatureCard
              image={dashbooardIcon}
              title="A Key Aspect"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              addDelay={300}
             />
           </div>
          </div>        
       </div>
{/***** END KEY FEATURES SECTION *****/}

       <SlantedBanner
        image={heroImage}
        title="A Key Aspect"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        />

{/***** FEATURES SECTION *****/}
        <div className="container-fluid">
          <div className="row d-flex justify-content-evenly gx-5 m-5">
            <div className="col-sm-4 w-md-30 vw-sm-100 d-flex justify-content-center">
              <SmallFeatureCard
               image={accountSettingsIcon}
               title="Feature"
               description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
               addDelay={200}
               />
            </div>
            <div className="col-sm-4 w-md-30 vw-sm-100 d-flex justify-content-center">
              <SmallFeatureCard
               image={bookmarkIcon}
               title="Feature"
               description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
               addDelay={200}
               />
            </div>
            <div className="col-sm-4 w-md-30 vw-sm-100 d-flex justify-content-center">
              <SmallFeatureCard
               image={lockIcon}
               title="Feature"
               description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
               addDelay={200}
               />
            </div>
          </div>
          <div className="row m-5">
            <div className="col-sm-4 w-md-30 vw-sm-100 d-flex justify-content-center">
              <SmallFeatureCard
               image={visibilityIcon}
               title="Feature"
               description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
               addDelay={200}
               />
            </div>
            <div className="col-sm-4 w-md-30 vw-sm-100 d-flex justify-content-center">
              <SmallFeatureCard
               image={accountSettingsIcon}
               title="Feature"
               description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
               addDelay={200}
               />
            </div>
            <div className="col-sm-4 w-md-30 vw-sm-100 d-flex justify-content-center">
              <SmallFeatureCard
               image={dashbooardIcon}
               title="Feature"
               description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
               addDelay={200}
               />
            </div>
          </div>
        </div>
{/***** END FEATURES SECTION *****/}

        <div className="row align-items-center justify-content-center m-5" data-aos="fade-down" data-aos-delay="500">
          <div className="col-lg-7">
            <div className="text-center mt-5 mb-5">
              <h1 className=""><b>Get Real Results Fast</b></h1>
            </div>
            
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.
              </p>
          </div>
        </div>
        <div className="row justify-content-center bg-dark text-light h-50 shadow mt-5 mb-5" data-aos="fade-down" data-aos-delay="500">
         <div className="col-5 h-100 w-50 d-flex justify-content-center">
           <StatsFeatureCard
            image={groupsIcon}
            header="240,000"
            description="happy customers"
            addDelay={200}
               />
         </div>
         <div className="col-5 h-100 w-50 d-flex justify-content-center">
           <StatsFeatureCard
            image={recommendIcon}
            header="98%"
            description="approval rate"
            addDelay={200}
               />
         </div>
        </div>
{/***** TESTIMONIALS CAROUSEL *****/}
        <div className="container-fluid bg-light mb-5 mt-5 w-100 d-flex flex-column justify-content-center align-items-center">
          <div className="row text-center p-3">
            <h3>Testimonials</h3>
          </div>
          <div className="row w-100 justify-content-center align-items-center">
            <div className="col">
              <OwlCarousel className="owl-theme" loop autoplay margin={10} responsive={options.responsive}>              
              {testimonialUsers.map(testimonial => (
                <div className="item">
                  <TestimonialCard
                   quote={testimonial.quote}
                   name={testimonial.name}
                   image={testimonial.img}
                  />
                </div>
              ))}  
          </OwlCarousel>
            </div>
            
          </div>
        </div>   
{/***** END TESTIMONIALS CAROUSEL *****/}

{/***** CLIENTS CAROUSEL *****/}
        <div className="container-fluid bg-white mb-5 mt-5">
          {/* <div className="row text-center p-3">
            <h3>Clients</h3>
          </div> */}
          <div className="row">
            <ClientsCarousel clients={clientLogos} />
          </div>
        </div>
{/***** END CLIENTS CAROUSEL *****/}

      </div>
      
</div>
     
  );
}

export default Home;
