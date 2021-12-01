import React from 'react'
import './style.css'

const SignUp = () => {
  return (
    <div className="container">
      <div className="registar shadow p-5 rounded-3 mt-5 w-50 m-auto">
        <form className="row g-3">
          <h3 className="col-12 text-center mb-3">Регистарция</h3>

          <div className="col-md-6">
            <label htmlFor="inputName4" className="form-label">
              Имя
            </label>
            <input type="text" className="form-control" id="inputName4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastName4" className="form-label">
              Фамилия
            </label>
            <input
              type="password"
              className="form-control"
              id="inputLastName4"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputLogin4" className="form-label">
              Логин
            </label>
            <input type="text" className="form-control" id="inputLogin4" />
          </div>
          <div className="col-md-6">
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
            <label htmlFor="inputNumber" className="form-label">
              Номер телефона
            </label>
            <input
              type="email"
              className="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Создать аккаунт
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
