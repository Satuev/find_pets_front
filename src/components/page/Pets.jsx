import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPets } from '../../redux/features/petsReducer'

const Pets = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPets())
  }, [])

  const pets = useSelector((state) => state.pets.pets)

  return (
    <div className="container">
      <div className="row justify-content-between">
        {pets.map((pet) => (
          <div className="card col-3 m-2" key={pet._id}>
            <img
              src={`http://localhost:6557/${pet.img}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{pet.header}</h5>
              <p className="card-text">{pet.description}</p>
              <span href="#" className="btn btn-primary w-100">
                Перейти куда-нибудь
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pets
