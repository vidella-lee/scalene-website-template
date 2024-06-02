// COMPONENTS
import Hero from "../components/Hero/Hero";
import BlogPostCard from "../components/BlogPostCard";
import BlogNavbar from "../components/BlogNavbar";

// IMAGES
import post1 from "../images/blog-post-1.jpg";
import post2 from "../images/blog-post-2.jpg";
import post3 from "../images/blog-post-3.jpg";

function Blog() {
  return (
    <div>
      <Hero
        logo={{
          src: "/static/logo.svg",
          alt: "a generic logo for a generic company",
        }}
        rightHeading="Split Template"
        rightHeadingColor="text-white"
        heading="Blog"
        rightParagraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
        leftBgImg={{
          src: "/static/pexels-kaique-rocha.jpg",
          title: "background image",
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
                  Lorem ipsum <span className="text-info">dolor sit amet</span>.
                </b>
              </h1>
            </div>
          </div>
          <BlogNavbar textColor="text-white" />
          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post1}
              title="Blog Post Title 1"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              tags={["tag 1", "tag 2", "tag 3", "tag 4", "tag 5"]}
              href="/blog"
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post2}
              title="Blog Post Title 2"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              tags={["tag 1", "tag 2", "tag 3"]}
              href="/blog"
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post3}
              title="Blog Post Title 3: The Bloggers Returns"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              tags={["tag 1", "tag 2", "tag 3", "tag 4"]}
              href="/blog"
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
              href="/blog"
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post2}
              title="Blog Post Title 2"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              href="/blog"
              tags={["tag 1", "tag 2", "tag 3"]}
            />
          </div>
          <div className="d-flex col-lg-4 justify-content-center align-items-center">
            <BlogPostCard
              image={post3}
              title="Blog Post Title 6"
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              href="/blog"
              tags={["tag 1", "tag 2", "tag 3"]}
            />
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="/blog">
              {"<<"}
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/blog">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/blog">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/blog">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/blog">
              {">>"}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Blog;
