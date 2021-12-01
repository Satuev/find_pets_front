import React from 'react'
import { useSelector } from 'react-redux'

const CategoryPets = (id) => {
  const pets = useSelector((state) => state.pets)

  return (
    <div>
      <div className="container"></div>
    </div>
  )
}

export default CategoryPets
