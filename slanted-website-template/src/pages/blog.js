// COMPONENTS
import RightTriangleHero from "../components/RightTriangleHero";
import SplitHero from "../components/SplitBoxHero/SplitBoxHero";
import BlogPostCard from "../components/BlogPostCard";
import BlogNavbar from "../components/BlogNavbar";

// IMAGES
import heroImage from "../images/business-meeting-1.jpg";
import post1 from "../images/blog-post-1.jpg";
import post2 from "../images/blog-post-2.jpg";
import post3 from "../images/blog-post-3.jpg";
import logo from "../logo.svg";

const options = {
  //dots: true,
  //autoHeight: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
    1500: {
      items: 3,
    },
  },
};

function Blog() {
  return (
    <div>
      {/* <RightTriangleHero
        image={heroImage}
        title="Blog"
        logo={logo}
        heading="Lorem ipsum dolor sit amet"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      /> */}
      <SplitHero
        logo={{
          src: "/static/logo.svg",
          alt: "a generic logo for a generic company"
        }}
        title="Split Template"
        titleColor="text-white"
        heading="Blog"
        paragraph2="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
        leftBgImg={{
          src: '/static/pexels-kaique-rocha.jpg',
          title: 'background image'
        }}
        rightBgColor="bg-primary"
        reverse={false}
        reverseContent={false}
      />
      <div className="container-fluid d-flex justify-content-center align-items-center p-lg-5">
        <div className="row d-flex w-100 justify-content-center align-items-center g-5">
          <div className="col-lg-7">
            <div className="text-center">
              <h1 className="m-3">
                <b>
                  Lorem ipsum{" "}
                  <span className="text-info">dolor sit amet</span>.
                </b>
              </h1>
            </div>
          </div>
          <div className="d-flex w-100 justify-content-between bg-primary rounded-pill p-3">
            <BlogNavbar
              textColor="text-white"
            />
            <input
              type="search"
              className="form-control rounded-pill w-30 border-0"
              id="search-control"
              placeholder="Search"
            ></input>
          </div>

          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post1}
              title="Blog Post Title 1"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              tags={["tag 1", "tag 2", "tag 3", "tag 4", "tag 5"]}
              href="#"
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post2}
              title="Blog Post Title 2"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              tags={["tag 1", "tag 2", "tag 3"]}
              href="#"
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post3}
              title="Blog Post Title 3: The Bloggers Returns"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              tags={["tag 1", "tag 2", "tag 3", "tag 4"]}
              href="#"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center p-5">
        <div className="row d-flex w-100 justify-content-center align-items-center g-5">
          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post1}
              title="Blog Post Title 4: A Blog of Two Cities"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
              tags={["tag 1", "tag 2", "tag 3", "tag 4", "tag 5"]}
              href="#"
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post2}
              title="Blog Post Title 2"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              href="#"
              tags={["tag 1", "tag 2", "tag 3"]}
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post3}
              title="Blog Post Title 6"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              href="#"
              tags={["tag 1", "tag 2", "tag 3"]}
            />
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">
              {"<<"}
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              {">>"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Blog;
