import '../styles/App.css';
import HeroTriangle from '../components/HeroTriangle';
import LargeFeatureCard from '../components/LargeFeatureCard';
import logo from '../logo.svg'
import heroImage from '../images/business-meeting-1.jpg';
import visibilityIcon from '../images/visibility-light.svg';
import bookmarkIcon from '../images/bookmark-light.svg';
import dashbooardIcon from '../images/dashboard-light.svg';
import TriangleBanner from '../components/TriangleBanner';

function Home() {
  return (
    <div>

      <HeroTriangle
       logo={<img src={logo} />}
       title="A Tagline for a Business Goes Here"
       heading="An H1 Title for a Home Page"
       //subheading="An H2 Subheading"
       description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
       image={heroImage}
       buttonLabel="Get Started"
      />
     <div className="container">
       <div className="row align-items-center justify-content-center">
          <div className="col-lg-7">
            <div className="text-center">
              <h1 className="m-5 display-5"><b>Describe Your Service</b></h1>
            </div>
            
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.
              </p>
          </div>
       </div>
       <div className="container">
       <div className="row justify-content-md-center align-items-center">
         <div className="col">
           <LargeFeatureCard
            image={visibilityIcon}
            title="A Key Aspect"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
             />
         </div>
         <div className="col">
           <LargeFeatureCard
            image={bookmarkIcon}
            title="A Key Aspect"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
             />
         </div>
         <div className="col">
         <LargeFeatureCard
            image={dashbooardIcon}
            title="A Key Aspect"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
             />
         </div>
         </div>
         <div className="row">
           <TriangleBanner
            image={heroImage}
            title="A Key Aspect"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd."
             />
         </div>
       </div>
      </div>
      
</div>
     
  );
}

export default Home;
