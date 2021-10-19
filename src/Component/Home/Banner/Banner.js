import React from "react";
import img1 from "../../../images/banner1.jpg";
import img2 from "../../../images/banner2.jpg";
import img3 from "../../../images/banner3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="crousel   pb-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="img d-block img-fluid w-100" src={img1} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>We are trusted and friendly medical professions</h2>
              <h5> Heappy to see you healthy</h5>
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block img w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>High quality ,Approciate and Accessable medical care</h2>
              <h5> Heappy to see you healthy</h5>
              <p>We aim to delevery for our</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block img w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2> The art of our medical service and amuses the patient</h2>
              <h5> Heappy to see you healthy</h5>

              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
