import React from 'react'
import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'
import img from "./pes.png";
import img2 from "./koshki.png";
import ContentPets from './ContentPets'

const HomePage = () => {
  return (
    <div className="">
      <div
        id="carouselExampleFade"
        className="carousel carousel-dark slide carousel-fade border-bottom border-1 "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img src={slide1} className="d-block  w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Следующий</span>
        </button>
      </div>
      <ContentPets />
  <div class="container">
    <div class="row g-0">
      <div class="col-md-4">
        <img src={img} class="img-fluid rounded-end align-items-start rounded-pill" alt="..." />
      </div>
      <div class="col-md-8 border border-2 rounded-start rounded-pill">
        <div class="card-body ">
          <p class="card-text py-4  fs-6 pe-4">
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
    <div class="row g-0  ">
      <div class="col-md-8 border border-2 rounded-end rounded-pill">
        <div class="card-body">
          <p class="card-text ps-5 py-4 fs-6 ">
            Не бросайте животных , они самые преданные и любят вас
            независимо от того, кто вы и сколько у вас денег.
          </p>
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
    </div>
  )
}

export default HomePage
