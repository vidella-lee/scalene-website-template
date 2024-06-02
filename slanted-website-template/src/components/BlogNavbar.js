import { useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function BlogNavbar({ textColor }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav
      className={`nav navbar navbar-dark navbar-expand-lg d-flex flex-row bg-primary ${
        dropdownOpen ? "rounded" : "rounded-pill"
      } p-3`}
    >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#blogNavbarSupportedContent"
        aria-controls="blogNavbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          setDropdownOpen(!dropdownOpen);
        }}
      >
        <span className={`navbar-toggler-icon`}></span>
      </button>
      <div className="collapse navbar-collapse" id="blogNavbarSupportedContent">
        <a
          className={`nav-link ${
            textColor ? textColor : ""
          } text-white active `}
          aria-current="page"
          href="#"
        >
          Blog Topic 1
        </a>
        <a className={`nav-link ${textColor ? textColor : ""} `} href="#">
          Blog Topic 2
        </a>
        <a className={`nav-link ${textColor ? textColor : ""} `} href="#">
          Blog Topic 3
        </a>
        <a className={`nav-link ${textColor ? textColor : ""} `} href="#">
          Blog Topic 4
        </a>
      </div>
      <form className={`d-flex ${dropdownOpen ? "w-100" : "w-80"} w-lg-30`}>
        <input
          type="search"
          className="form-control rounded-pill border-0 px-4 py-2 mx-2"
          id="search-control"
          placeholder="Search"
        />
        <button
          className={`btn btn-outline-success rounded-pill text-white`}
          type="submit"
        >
          Search
        </button>
      </form>
    </nav>
  );
}
