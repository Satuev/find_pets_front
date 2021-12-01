import React from "react";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="container">
        <div className="registar shadow p-5 rounded-3 mt-5 w-50 m-auto">
          <form className="row g-3">
            <div className="col- 12 md-6">
              <label htmlFor="inputLogin4" className="form-label">
                Логин
              </label>
              <input type="text" className="form-control" id="inputLogin4" />
            </div>
            <div className="col-12 md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Пароль
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <NavLink to="/registry">Создать аккаунт</NavLink>
            </div>
              <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                      Войти
                  </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
