import {Route, Routes} from "react-router-dom";
import HomePage from "./page/HomePage";
import SignUp from './page/SignUp';
import SignIn from './page/SignIn';

function App() {
  return (
        <Routes>
          <Route path = "/" element={<HomePage/>}/>
          <Route path = "/login" element={<SignIn/>}/>
            <Route path = "/registr" element={<SignUp/>}/>
        </Routes>
      )
}

export default App;
