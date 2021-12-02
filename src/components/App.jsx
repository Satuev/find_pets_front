import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import CategoryPets from './page/CategoryPets'
import HomePage from './page/HomePage'
import Pets from './page/Pets'
import SignIn from './page/SignIn'
import SignUp from './page/SignUp'
import ErrorPage from './page/errorPage'
import FormAddPet from './page/FormAddPet'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/category/:id" element={<CategoryPets />} />
        <Route path="/addPet" element={<FormAddPet />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registry" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
