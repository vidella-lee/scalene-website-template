import ScaleneHero from '../components/ScaleneHero';
import heroImage from '../images/business-meeting-1.jpg';
import logo from "../logo.svg"

function About() {
  return (
    <div style={{color: "red"}}>
      <ScaleneHero
       image={heroImage}
       title="About Us"
       logo={<img src={logo} />}
       heading="Who We Are"
       subheading="Mission Statement"
       description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
            
        </div>
    

  );
}

export default About;