//COMPONENTS
import SplitHero from "../components/SplitBoxHero/SplitBoxHero";
import SplitBanner from "../components/SplitBanner";
import ImageBottomCard from "../components/ImageBottomCard.js";
import TeamMemberCard from "../components/TeamMemberCard";
import CTABanner from "../components/CTABanner";
import teamMembers from "../components/teamMembers";

//MATERIAL ICONS (FROM https://fonts.google.com/icons)
import visibilityIcon from "../images/icons/visibility-secondary.svg";
import treeIcon from "../images/icons/park-secondary.svg";
import volunteerIcon from "../images/icons/volunteer-activism-secondary.svg";
import recommendIcon from "../images/icons/recommend-secondary.svg";

//OTHER IMAGES
import heroImage from "../images/AdobeStock_477547119.jpeg";
import bannerImage from "../images/pexels-david-skyrius.jpg"
import bannerImage2 from "../images/AdobeStock_334979404.jpeg"

function About() {
  return (
    <div>
      <SplitHero
        logo={{
          src: "/static/logo.svg",
          alt: "a generic logo for a generic company"
        }}
        heading="About Us"
        titleColor="text-white"
        title="Mission Statement"
        subheading="A Great and Catchy Tagline Goes Here"
        paragraph2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
        leftBgImg={{
          src: heroImage,
          title: 'background image'
        }}
        reverse={false}
      />
      <div className="container-fluid d-flex flex-column p-0">
        {/***** VALUES SECTION *****/}
        <div
          className="d-flex vh-100 p-0"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <SplitBanner
            image={bannerImage}
            title="Our Values"
            bgColor="bg-light-faded"
            paragraphColor="text-info"
            titleColor="text-primary"
            paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
        </div>
        {/* </div> */}
        <div
          className="row d-flex justify-content-center align-items-center bg-secondary text-white h-50 shadow mb-5 p-5 g-4"
          data-aos="fade-down"
          data-aos-delay="500"
        >
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

        <div
          className="row justify-content-center bg-secondary-faded text-white h-50 shadow mt-5 mb-5 p-5"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <div className="text-center">
            <h1 className="m-5">
              <b>Meet the Team</b>
            </h1>
          </div>
          <div className="row gx-5 gy-4 gy-md-0">
            {teamMembers.map((teamMember) => (
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
            image={bannerImage2}
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
