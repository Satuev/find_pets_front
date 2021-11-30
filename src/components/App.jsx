import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import HomePage from './page/HomePage'
import Pets from './page/Pets'
import SignIn from './page/SignIn'
import SignUp from './page/SignUp'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registry" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
