/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar() {
  return (
    <nav className="nav d-flex flex-row">
      <a
        className="nav-link active text-decoration-underline"
        aria-current="page"
        href="#"
      >
        Blog Topic 1
      </a>
      <a className="nav-link text-decoration-underline" href="#">
        Blog Topic 2
      </a>
      <a className="nav-link text-decoration-underline" href="#">
        Blog Topic 3
      </a>
      <a className="nav-link text-decoration-underline" href="#">
        Blog Topic 4
      </a>
    </nav>
  );
}
