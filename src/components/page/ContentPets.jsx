import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentPets } from "../../redux/features/petsReducer";
import "./contentPets.css";
const ContentPets = () => {
  const pets = useSelector((state) => state.pets.pets.reverse());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContentPets());
  }, [dispatch]);

  return (
    <div className="container ">
      <div className="row d-flex justify-content-around">
        {pets.reverse().map((pet, index) => {
          if (index < 4) {
            return (
              <div className="card col-5 m-3 p-0 ">
                <div className="row g-0 p-0 m-0">
                  <div className="col-md-6 p-0 ">
                    <img
                      src={`http://localhost:6557/${pet.img}`}

                      className="img-fluid rounded-start p-0 "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{pet.header}</h5>
                      <p className="card-text">
                        {pet.description}
                      </p>
                      <p className="card-text">
                        <button type="button" className="btn btn-success">Описание</button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ContentPets;
