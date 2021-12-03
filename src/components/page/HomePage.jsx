<<<<<<< HEAD
import React from "react";
import slide1 from "../pets1.jpg";
import img from "../pes.png";
import img2 from "../koshki.png";
=======
import React from 'react'
import slide1 from '../pets11.jpg'
import slide2 from '../pets22.jpg'
import slide3 from '../pets33.jpg'

>>>>>>> f1ec03e3cc878dd38de4b7ed08054c542a0e9f8d
const HomePage = () => {

  return (
    <>
      <div>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={slide1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Метка первого слайда</h5>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={slide1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Метка второго слайда</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slide1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Метка третьего слайда</h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Предыдущий</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Следующий</span>
          </button>
        </div>
      </div>

      <div class="container">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={img} class="img-fluid rounded-end align-items-start rounded-pill" alt="..." />
          </div>
<<<<<<< HEAD
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Герман Гессе. </h5>
              <p class="card-text">
                Животные более настоящие, чем люди. Они не хотят тебе льстить,
                не хотят производить на тебя какое-то впечатление. Ничего
                показного. Какие они есть, такие и есть, как камни и цветы или
                как звезды на небе.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-8 border border-light">
            <div class="card-body">
              <h5 class="card-title"> </h5>
              <p class="card-text">
                Не бросайте животных , они самые преданные и любят вас
                независимо от того, кто вы и сколько у вас денег.
              </p>
=======
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Метка второго слайда</h5>
            </div>
          </div>
          <div className="carousel-item ">
            <img src={slide3} className="d-block w-100 " alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Метка третьего слайда</h5>
>>>>>>> f1ec03e3cc878dd38de4b7ed08054c542a0e9f8d
            </div>
          </div>
          <div class="col-md-4 text-end">
            <img
              src={img2}
              class="img-fluid rounded-start align-items-end rounded-pill"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
