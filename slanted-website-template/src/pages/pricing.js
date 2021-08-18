import ScaleneHero from '../components/ScaleneHero';

//IMAGES
import heroImage from '../images/business-meeting-1.jpg';
import logo from "../logo.svg"

function Pricing() {
  return (
    <div>
       <ScaleneHero
       image={heroImage}
       title="Pricing"
       logo={<img src={logo} />}
       heading="Start using BusinessName's Product"
       description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
    </div>
    

  );
}

export default Pricing;