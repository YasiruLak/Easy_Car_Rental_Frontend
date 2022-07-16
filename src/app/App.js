import {Route, Routes} from "react-router-dom";
import WebPage from "../pages/webPage";
import SignIn from "../pages/signIn";
function App() {
  return (
    <Routes>
      <Route exact path='/easy' element={<WebPage/>}/>
      <Route exact path='/login' element={<SignIn/>}/>
    </Routes>
  );
}

export default App;
