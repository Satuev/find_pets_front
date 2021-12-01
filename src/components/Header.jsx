import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchPets } from '../redux/features/petsReducer'
import logo from './logo.png'

const Header = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPets())
  })

  const categories = useSelector((state) => state.categories.categories)

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand text-center" href="/">
          <img className="logo w-25" src={logo} alt="logo" />
          <h4>Новый дом</h4>
        </a>

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
              <NavLink to="/pets" className="nav-link" type="button">
                Все питомцы
              </NavLink>
            </li>
            {categories.map((category) => (
              <li className="nav-item" key={category._id}>
                <NavLink
                  to={`/${category.name}`}
                  className="nav-link"
                  type="button"
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-sm btn-outline-success my-2 my-sm-0"
            type="button"
          >
            Войти
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
