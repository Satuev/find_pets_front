import React from "react";
import "./style.css"

const SignUp = () => {
  return (
    <div className='registar'>
      <form className="form">
        <h4>Зарегистрироваться</h4>
        <div>
          <input
            placeholder="Имя"
            id="first_name"
            type="text"
            className="validate"
          />
          <input
            id="last_name"
            placeholder="Фамилия"
            type="text"
            className="validate"
          />
          <input
            id="last_number"
            placeholder="Номер телефона"
            type="text"
            className="validate"
          />
        </div>
        <div className="form-group">
          <input className="form-input" placeholder="Логин" />
          <input className="form-input" type="password" placeholder="Пароль" />
          <input className="form-input" placeholder="email" />
        </div>
        <button type="button" className="form_button btn btn-primary">
          войти
        </button>
      </form>
    </div>
  );
};

export default SignUp;
