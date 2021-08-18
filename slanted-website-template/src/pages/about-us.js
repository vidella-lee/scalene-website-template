
//COMPONENTS
import ScaleneHero from '../components/ScaleneHero';
import ImageBottomCard from '../components/ImageBottomCard.js';
import TeamMemberCard from '../components/TeamMemberCard';
import CTABanner from "../components/CTABanner";
import teamMembers from '../components/teamMembers';

//MATERIAL ICONS (FROM https://fonts.google.com/icons)
import visibilityIcon from "../images/icons/visibility-secondary.svg";
import treeIcon from "../images/icons/park-secondary.svg";
import volunteerIcon from "../images/icons/volunteer-activism-secondary.svg";
import recommendIcon from "../images/icons/recommend-secondary.svg";

//OTHER IMAGES
import heroImage from '../images/business-meeting-1.jpg';
import handshake from "../images/handshake.jpg";
import logo from "../logo.svg"


function About() {
  return (
    <div>
      <ScaleneHero
       image={heroImage}
       title="About Us"
       logo={<img src={logo} />}
       heading="Mission Statement"
       description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
        <div className="container-fluid d-flex flex-column">
          
{/***** VALUES SECTION *****/}          
         <div className="row align-items-center justify-content-center" data-aos="fade-down" data-aos-delay="500">
          <div className="col-lg-7">
            <div className="text-center">
              <h1 className="m-5"><b>Our Values</b></h1>
            </div>
              <p className="mb-5 text-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.
              </p>
          </div>
         </div>
         <div className="row d-flex justify-content-center align-items-center bg-secondary text-white h-50 shadow mt-5 mb-5 p-5 g-4" data-aos="fade-down" data-aos-delay="500">
           <div className="col-md-6 col-lg-3 d-flex justify-content-center align-items-center m-3 m-md-0">
             <ImageBottomCard
              title="Transparency."
              description="Lorem ipsum dolor sit amet, 
              consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor."
              image={visibilityIcon}
              />
           </div>
           <div className="col-md-6 col-lg-3 d-flex justify-content-center align-items-center m-3 m-md-0">
             <ImageBottomCard
              title="Sustainability."
              description="Lorem ipsum dolor sit amet, 
              consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor."
              image={treeIcon}
              />
           </div>
           <div className="col-md-6 col-lg-3 d-flex justify-content-center align-items-center m-3 m-md-0">
             <ImageBottomCard
              title="Collaboration."
              description="Lorem ipsum dolor sit amet, 
              consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor."
              image={volunteerIcon}
              />
           </div>
           <div className="col-md-6 col-lg-3 d-flex justify-content-center align-items-center m-3 m-md-0">
             <ImageBottomCard
              title="Customer Satisfaction."
              description="Lorem ipsum dolor sit amet, 
              consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor."
              image={recommendIcon}
              />
           </div>

         </div>

{/***** END VALUES SECTION *****/}

{/***** TEAM MEMBERS SECTION *****/}

         <div className="row justify-content-center bg-secondary-faded text-white h-50 shadow mt-5 mb-5 p-5" data-aos="fade-down" data-aos-delay="500">
           <div className="text-center">
              <h1 className="m-5"><b>Meet the Team</b></h1>
            </div>
            <div className="row">
              {teamMembers.map(teamMember => (
                <div className="col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
                <TeamMemberCard
                 image={teamMember.img}
                 name={teamMember.name}
                 title={teamMember.title}
                 href={teamMember.href}
                 />
              </div>
              ))}
              
            </div>
         </div>
         <div className="row">
           <CTABanner
            image={handshake}
            title="Want to know more? Get in touch."
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            buttonCTA="Contact us"
           />
      </div>
{/***** END TEAM MEMBERS SECTION *****/}
       </div>
            
        </div>
    

  );
}

export default About;