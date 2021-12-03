import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchPets } from '../../redux/features/petsReducer'

const CategoryPets = () => {
  const pets = useSelector((state) => state.pets.pets)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPets())
  }, [dispatch])

  const { id } = useParams()

  return (
    <div>
      <div className="container">
        <div className="row justify-content-between">
          {pets.map((pet) =>
            pet.category === id ? (
              <div
                className="card col-lg-3 col-md-5 col-sm-12  m-2 border-0 shadow"
                key={pet._id}
              >
                <img
                  src={`http://localhost:6557/${pet.img}`}
                  className="card-img-top mt-1 rounded  shadow"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{pet.header}</h5>
                  <p className="card-text">{pet.description}</p>
                  <a href={`http://localhost:3000/pet/${pet._id}`} className="btn btn-primary w-100">
                    Перейти куда-нибудь
                  </a>
                </div>
              </div>
            ) : (
              ''
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryPets
