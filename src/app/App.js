import {Route, Routes} from "react-router-dom";
import WebPage from "../pages/webPage";
function App() {
  return (
    <Routes>
      <Route exact path='/easy' element={<WebPage/>}/>
    </Routes>
  );
}

export default App;
