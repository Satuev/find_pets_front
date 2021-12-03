import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContentPets } from '../../../../redux/features/petsReducer'
import cl from "./contentPets.module.css"

const ContentPets = () => {
  const pets = useSelector((state) => state.pets.pets.reverse())
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContentPets())
  }, [dispatch])

  return (
    <div className="container ">
      <div className="row d-flex my-4  justify-content-around">
        {pets.map((pet, index) => {
          if (index < 3) {
            return (
              <div
                key={pet._id}
                className={`${cl.card} col-3 m-1 border-0  p-0 text-white`}
              >
                <img
                  src={`http://localhost:6557/${pet.img}`}
                  className={cl.cardImg}
                  alt="..."
                />
                <div className="card-img-overlay ">
                  <h5 className={`${cl.cardTitle} text-center text-bottom fs-2`}>
                    {pet.header}
                  </h5>
                </div>
              </div>

            )
          }
        })}
      </div>
    </div>
  )
}

export default ContentPets