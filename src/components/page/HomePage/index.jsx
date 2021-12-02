import React from 'react'
import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'
import ContentPets from './ContentPets'

const HomePage = () => {
  return (
    <div className="">
      <div
        id="carouselExampleFade"
        className="carousel carousel-dark slide carousel-fade border-bottom border-1 mb-4"
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
    </div>
  )
}

export default HomePage
