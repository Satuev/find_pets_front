import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { fetchPets } from "../../redux/features/petsReducer"

const CategoryPets = () => {
  const pets = useSelector((state) => state.pets.pets.reverse())

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPets())
  }, [dispatch])

  const { id } = useParams()

  return (
    <div>
      <div className="container mt-4">
        <div className="row row-cols-lg-3  row-cols-md-2 row-cols-sm-1 row-cols-1 g-4">
          {pets.map((pet) =>
            pet.category === id ? (
              <div className="col" key={pet._id}>
                <div className="card h-100  border-0 shadow">
                  <img
                    src={`http://localhost:6557/${pet.img}`}
                    className="card-img-top rounded   h-50"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pet.header}</h5>
                    <hr />
                    <p className="card-text h-25">
                      {pet.description.substring(0, 65)} . . .
                    </p>
                    <hr />
                    <Link
                      to={`/pet/${pet._id}`}
                      className="btn btn-primary w-100 fs-4 mt-3"
                    >
                      Описание
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryPets
