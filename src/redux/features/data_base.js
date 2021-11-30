const initialState = {
  users: [],
  categories: [],
  pets:[],
  pending: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/pending":
      return {
        ...state, pending: true
      }

      case "categories/load/fulfilled":
      return {
        ...state, categories: action.payload, pending: false
      }
      case "users/load/fulfilled":
      return {
        ...state, users: action.payload, pending: false
      }
      case "pets/load/fulfilled":
      return {
        ...state, pets: action.payload, pending: false
      }

    default:
      return state;
  }
}

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch({type: "load/pending"})
    fetch("http://localhost:6557/categories/")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "categories/load/fulfilled", payload: data });
        });
  };
};
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({type: "load/pending"})
    fetch("http://localhost:6557/users")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "users/load/fulfilled", payload: data });
        });
  };
};
export const fetchPets = () => {
  return (dispatch) => {
    dispatch({type: "load/pending"})
    fetch("http://localhost:6557/pets")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "pets/load/fulfilled", payload: data });
        });
  };
};




