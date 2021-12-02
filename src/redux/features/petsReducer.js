const initialState = {
  pets: [],
  pending: false,
};

export const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "pets/load/pending":
      return {
        ...state,
        pending: true,
      };

    case "pets/load/fulfilled":
      return {
        ...state,
        pets: action.payload,
        pending: false,
      };

    case 'pets/content/pending' :
      return {
        ...state,
        pending: false
      }

    case 'content/pets/fulfilled':
      return {
        ...state,
        pets: action.payload,
        pending: false
      }

    default:
      return state;
  }
};

export const fetchPets = () => {
  return (dispatch) => {
    dispatch({ type: "pets/load/pending" });
    fetch("http://localhost:6557/pets")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "pets/load/fulfilled", payload: data });
      });
  };
};

export const uploadPets = (header, description, category, file) => {
  return (dispatch) => {
    dispatch({ type: "pets/load/pending" });
    const formData = new FormData();
    formData.append("img", file);
    formData.append("header", header);
    formData.append("description", description);
    formData.append("category", category);

    fetch("http://localhost:6557/pets/add", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
};

export const fetchContentPets = () => {
  return (dispatch) => {
    dispatch({type: 'pets/content/pending'})
    fetch('http://localhost:6557/pets/')
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'content/pets/fulfilled', payload:data})
    })
  }
}
