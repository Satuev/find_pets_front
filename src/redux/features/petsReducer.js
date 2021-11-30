const initialState = {
  pets:[],
  pending:false
}

export const petsReducer = (state = initialState,action) => {
      switch (action.type) {
        case "pets/load/pending":
          return {
            ...state, pending: true
          }

        case "pets/load/fulfilled":
          return {
            ...state, pets: action.payload, pending: false
          }
        default:
          return state
      }
}

export const fetchPets = () => {
  return (dispatch) => {
    dispatch({type: "pets/load/pending"})
    fetch("http://localhost:6557/pets")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "pets/load/fulfilled", payload: data });
    });
  };
};