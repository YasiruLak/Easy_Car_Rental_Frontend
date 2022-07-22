import {Route, Routes} from "react-router-dom";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import VehicleManage from "../pages/AdminDashboard/bodyComponent/vehicleManage/VehicleManage";
import CustomerProfile from "../pages/customerProfile";
import WebPage from "../pages/webPage";
import AlertDialogSlide from "../pages/popUp";
import {Fragment} from "react";
import AdminDashboard from "../pages/AdminDashboard/header/HeaderComponent";
function App() {
  return (
    // <Routes>
    //   <Route exact path='/easy' element={<WebPage/>}/>
    //   <Route exact path='/login' element={<SignIn/>}/>
    //   <Route exact path='/signup' element={<SignUp/>}/>
    //   <Route exact path='/vehicleManage' element={<VehicleManage/>}/>
    //   <Route exact path='/cusProfile' element={<CustomerProfile/>}/>
    //   <Route exact path='/popup' element={<AlertDialogSlide/>}/>
    // </Routes>

      <Fragment>
          <AdminDashboard/>

      </Fragment>
  );
}

export default App;
