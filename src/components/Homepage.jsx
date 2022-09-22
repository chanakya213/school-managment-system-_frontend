import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Homepage() {
  const [events, setevents] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Navigate("/");
    }
    try {
      axios
        .get("http://localhost:5000/events", {
          headers: {
            "x-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setevents(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="homepage">
      <div class="row homepage-items g-0">
        <div class="col-md-7 col-sm-12">
          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://blog.wiziq.com/wp-content/uploads/2014/08/back-to-school.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img
                  src="https://blog.21kschool.com/wp-content/uploads/2021/10/21k-school-blog-02.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://noida.cambridgeschool.edu.in/wp-content/uploads/sites/4/2021/07/WhatsApp-Image-2021-07-25-at-12.26.14-PM.jpeg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-5 col-sm-12 px-5">
          <div class="card events event-card">
            <div class="card-header">
              <h3 className="text-center">Events</h3>
            </div>
            <div class="card-body">
              {events.map((item) => {
                return <h5 class="card-title">{item.title}</h5>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="principals">
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://www.ommel.fi/content/uploads/2019/03/dummy-profile-image-male.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4>T . Srinivas</h4>
            <h5>Principal</h5>
            <p>school pricipal from 1980s good managment skills</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://www.ommel.fi/content/uploads/2019/03/dummy-profile-image-male.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4>m . Srinivas</h4>
            <h5>Corespondent</h5>
            <p>Joined as a teacher now at managment position success achiver</p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="https://www.ommel.fi/content/uploads/2019/03/dummy-profile-image-male.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
