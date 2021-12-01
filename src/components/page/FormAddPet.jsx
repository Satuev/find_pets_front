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

  const handleChangePet = {
    handleChangeImage: (e) => {
      setFile(e.target.files[0]);
    },

    handleAddPet: () => {
      dispatch(uploadPets(header, description, category, file));
    },
  };

  return (
    <div>
      <div className="container w-50">
        <div>
          <h1 className="text-center">Форма для добавления питомца</h1>
        </div>
        <div className="row mt-5">
          <div className="col">
            <input
              className="d-block mb-5 w-75"
              type="text"
              placeholder="Введите имя питомца"
              onChange={handleChangeHeader}
              value={header}
              name="header"
            />
            <textarea
              className="d-block mb-5 w-75"
              type="text"
              placeholder="Введите описание питомца"
              onChange={handleChangeDescription}
              value={description}
              name="description"
            />
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
          <div className="col">
            <input
              accept="image/*"
              type="file"
              onChange={handleChangePet.handleChangeImage}
              name="img"
            />
          </div>
        </div>
        <div className="text-end mt-5">
          <button
            className="btn btn-primary"
            onClick={handleChangePet.handleAddPet}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormAddPet;
