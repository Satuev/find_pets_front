<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import CategoryPets from './page/CategoryPets'
import HomePage from './page/HomePage'
import Pets from './page/Pets'
import SignIn from './page/SignIn'
import SignUp from './page/SignUp'
import ContentPets from './page/ContentPets';
=======
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import CategoryPets from "./page/CategoryPets";
import HomePage from "./page/HomePage";
import Pets from "./page/Pets";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./page/errorPage";
>>>>>>> a2e30c355b8c52604f66158a8c0c3f7aa3cc2328

function App() {
  const token = useSelector((state) => state.signIn.token);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/category/:id" element={<CategoryPets />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registry" element={<SignUp />} />
<<<<<<< HEAD
        <Route path="/content" element={<ContentPets />} />
=======
          <Route path="*" element={<ErrorPage />} />

>>>>>>> a2e30c355b8c52604f66158a8c0c3f7aa3cc2328
      </Routes>
    </>
  );
}

export default App;
