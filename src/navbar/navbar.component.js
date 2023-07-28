import React from "react";
import "./navbar.style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Paperplane
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="buynowpaylater">
                Buy Now Pay Later
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="videos">
                Videos
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="blogs">
                Blogs
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="Abha">
                Abha
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="AboutUs">
                About Us
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <Link className="btn btn-outline-primary" to="/login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
