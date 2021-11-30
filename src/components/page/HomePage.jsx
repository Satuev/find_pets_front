import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  fetchCategories,
 } from "../../redux/features/categoriesReducer"
import Header from "../Header"
import { fetchPets } from '../../redux/features/petsReducer';

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  })

  useEffect(() => {
    dispatch(fetchPets())
  })

  return (
    <div>
      <Header />
    </div>
  )
}

export default HomePage
