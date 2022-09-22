/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home-bar">
        <div className="school-name">
          <div className="logo">
            <img
              src="https://www.pngitem.com/pimgs/m/161-1612384_maa-saraswati-hd-hd-png-download.png"
              alt="image not found"
            />
          </div>
          <div className="veenadhari-name text-center">
            <h1>VEENADHARI HIGH SCHOOL</h1>
            <h5>Dist : karimnagar Vill : Choppadandi</h5>
          </div>
          <div className="logo">
            <img
              src="https://www.pngitem.com/pimgs/m/161-1612384_maa-saraswati-hd-hd-png-download.png"
              alt="image not found"
            />
          </div>
        </div>
      </div>
      <div className="nav">
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style={{ "background-color": "#1E3163" }}
        >
          <div class="container-fluid text-center">
            <a class="navbar-brand" href="/">
              Home
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Students
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item nav-link" href="/administration">
                        Administration
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item nav-link" href="/achivements">
                        Achivements
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item nav-link" href="/students">
                        OLD Students
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Academic
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item nav-link" href="/faculty">
                        Faculty
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item nav-link" href="/managment">
                        Managment
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Home;
