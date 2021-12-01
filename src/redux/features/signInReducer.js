const initialState = {
  signingIn: false,
  error: null,
  token: localStorage.getItem("token")
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signInReducer/signIn/pending":
      return {
        ...state,
        signingIn: true,
        error: null,
      };
    case "signInReducer/signIn/fulfilled":
      return{
        ...state, error: null, signingIn: false, token: action.payload
      }
    case "signInReducer/signIn/rejected":
      return {
        ...state, signingIn: false, error: action.error
      }
    default:
      return state;
  }
};

export const auth = (userDate) => {
  return (dispatch) => {
    console.log(userDate)
    dispatch({ type: "signInReducer/signIn/pending"});
    fetch("http://localhost:6557/users/login", {
      method: "POST",
      body: JSON.stringify(userDate),
      headers: {
        "Content-type": "application/json"
      }
    })
        .then((res) => res.json())
        .then((data)=> {
          if (data.error){
            dispatch({type: "signInReducer/signIn/rejected", error: data.error})
          }
          else{
            dispatch({type: "signInReducer/signIn/fulfilled", payload: data})
            localStorage.setItem("token", data)
          }
        })
  };
};
