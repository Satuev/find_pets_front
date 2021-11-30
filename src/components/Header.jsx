import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const categories = useSelector((state) => state.categories.categories)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            Logo
          </a>
          <button
            className="btn btn-sm btn-outline-success my-2 my-sm-0"
            type="button"
          >
            Войти
          </button>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <span className="nav-link" type="button">
                  Все питомцы
                </span>
              </li>
              {categories.map((category) => (
                <li className="nav-item" key={category._id}>
                  <span className="nav-link" type="button">
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
