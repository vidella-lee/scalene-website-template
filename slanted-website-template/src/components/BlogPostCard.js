const BlogPostCard = ({
  image,
  title,
  description,
  addDelay,
  alt,
  tags,
  href,
}) => (
  <div
    className="d-flex card h-100 p-1 pt-2 p-md-4 shadow bg-light-faded text-primary text-center justify-content-center align-items-center rounded-3 border-0 w-100"
    data-aos="fade-down"
    data-aos-delay={400 + addDelay}
    style={{ width: "20rem" }}
  >
    <a href={href}>
      <img
        className="card-img-top bg-primary rounded-pill"
        src={image}
        alt={alt}
      />
    </a>

    <div className="card-body">
      <a className="card-link" href={href}>
        <h3 className="card-title m-3 card-link">{title}</h3>
      </a>
      <p className="card-text">{description}</p>
    </div>
    {tags ? (
      <div className="card-footer text-muted bg-transparent w-100">
        <p>
          <div className="d-none d-sm-flex align-items-center">
            <small>tags:</small>{" "}
            <div className="d-flex ms-2 mt-2">
              {tags.map((tag) => (
                <div className="rounded-pill bg-light pt-1 pb-1 ps-2 pe-2 ms-2 blog-tag">
                  <a
                    className=" text-decoration-none blog-tag-link"
                    href="/blog"
                  >
                    {tag}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </p>
      </div>
    ) : null}
  </div>
);

export default BlogPostCard;
