import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../redux/features/signInReducer";

const SignIn = () => {
  const [personalData, setPersonalData] = useState({});

  const dispatch = useDispatch()

    const error = useSelector(state => state.signIn.error)

    const handlePersonalData = {
        login: (login) => {
            setPersonalData({...personalData, login})
        },
        password: (password) => {
            setPersonalData({...personalData, password})
        }
    }

  const handleSabmit = (personalDate) => {
      dispatch(auth(personalData))
  }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
            onChange={(e)=>{
                handlePersonalData.login(e.target.value)
            }}
          type="email"
            value={personalData.login}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
            onChange={(e)=>{
                handlePersonalData.password(e.target.value)
            }}
            value={personalData.password}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
          <div id="emailHelp" className="form-text">
              {error}
          </div>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
          onClick={()=>{
              handleSabmit(personalData)
          }}
          type="submit"
          className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignIn;
