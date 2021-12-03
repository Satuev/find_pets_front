import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPets } from '../../redux/features/petsReducer'

const Pets = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPets())
  }, [dispatch])

  const pets = useSelector((state) => state.pets.pets)

  return (
    <div className="container">
      <div className="row justify-content-between">
        {pets.map((pet) => (
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
                Описание
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pets
