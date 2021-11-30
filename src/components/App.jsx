import {Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";

function App() {
  return (
        <Routes>
          <Route path = "/" element={<HomePage/>}/>
          <Route path = "/login" element={<SignIn/>}/>
            <Route path = "/registry" element={<SignUp/>}/>
        </Routes>
      )
}

export default App;
