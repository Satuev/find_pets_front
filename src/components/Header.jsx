import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchCategories } from "../redux/features/categoriesReducer";
import logo from "./logo.png";
import Profile from "./page/Profile";

const Header = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.signIn.token);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories.categories);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand text-center p-0 m-0" href="/">
          <img className="logo w-25" src={logo} alt="logo" />
          <h5>В добрые руки</h5>
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
          <ul className="navbar-nav m-auto pe-5">
            <li className="nav-item">
              <NavLink to="/pets" className="nav-link" type="button">
                Все питомцы
              </NavLink>
            </li>
            {categories.map((category) => (
              <li className="nav-item" key={category._id}>
                <NavLink
                  to={`/pets/category/${category._id}`}
                  className="nav-link"
                  type="button"
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {token ? (
            <NavLink to="/login" className="btn btn-lg ">
              <i className="bi bi-person-circle"></i>
            </NavLink>
          ) : (
            <button onClick={() => setShow(true)}>
              <i className="bi bi-person-check-fill"></i>
            </button>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Header;
