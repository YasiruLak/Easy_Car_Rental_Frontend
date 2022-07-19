import {Route, Routes} from "react-router-dom";
import WebPage from "../pages/webPage";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
function App() {
  return (
    <Routes>
      <Route exact path='/easy' element={<WebPage/>}/>
      <Route exact path='/login' element={<SignIn/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
