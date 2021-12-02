import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPets } from "../../redux/features/petsReducer";

const FormAddPet = () => {
  const [header, setHeader] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);
  const [file, setFile] = useState(null);

  const categories = useSelector((state) => state.categories.categories);

  const dispatch = useDispatch();

  const handleChangeHeader = (e) => {
    setHeader(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  console.log(file)

  const handleChangePet = {
    handleChangeImage: (e) => {
      setFile(e.target.files[0]);
    },

    handleAddPet: () => {
      dispatch(uploadPets(header, description, category, file));
      setFile(this.element.reset())
    },
  };

  return (
    <div>
      <div className="container">
        <div>
          <h1 className="text-center">
            Запишите данные питомца
          </h1>
        </div>
        <form>

        <div className="row mt-5 container justify-content-center">
          <div className="col-4">
            <div className="form-floating">
              <input
                  type="text"
                  className="form-control d-block w-100"
                  id="floatingPassword"
                  placeholder="petName"
                  onChange={handleChangeHeader}
                  value={header}
                  name="header"
              />
                <label htmlFor="floatingPassword">Заголовок</label>
            </div>
            <div className="form-floating">
              <textarea
                  className="form-control d-block mt-5 mb-5 w-100"
                  placeholder="petDesc"
                  id="floatingTextarea"
                  onChange={handleChangeDescription}
                  value={description}
                  name="description"
              />
              <label htmlFor="floatingTextarea">Описание питомца</label>
            </div>
            <div className="mb-5">
              <input
                  className="form-control form-control-sm img-input"
                  type="file"
                  id="formFile"
                  accept="image/*"
                  onChange={handleChangePet.handleChangeImage}
                  name="img"
              />
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                name="category"
              >
                Категория
              </button>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="dropdownMenuButton1"
              >
                {categories.map((category) => (
                  <li>
                    <span
                      type="button"
                      className="dropdown-item"
                      onClick={() => setCategory(category._id)}
                    >
                      {category.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-4">

            <img src="" alt=""/>

            <div className="text-end mt-5">
              <button
                  disabled={header === null || description === null || category === null || file === null}
                  className="btn btn-primary"
                  onClick={handleChangePet.handleAddPet}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
              >
                Добавить
              </button>
            </div>
          </div>
          <div>

          </div>
        </div>
        </form>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content align-items-center">
            <div className="modal-header">
              <h2 className="modal-title text-success" id="exampleModalLabel">Добавленно</h2>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddPet;
