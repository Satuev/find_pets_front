import React from "react"
import { useSelector } from "react-redux"

const Header = () => {
  const categories = useSelector((state) => state.categories.categories)

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            Logo
          </a>
          <button
            class="btn btn-sm btn-outline-success my-2 my-sm-0"
            type="button"
          >
            Войти
          </button>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light ">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <span class="nav-link" type="button">
                  Все питомцы
                </span>
              </li>
              {categories.map((category) => (
                <li class="nav-item">
                  <span class="nav-link" type="button">
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
