import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  fetchCategories,
  fetchPets,
  fetchUsers,
} from "../../redux/features/data_base"
import Header from "../Header"

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  })
  useEffect(() => {
    dispatch(fetchUsers())
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
