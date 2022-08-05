import {Route, Routes} from "react-router-dom";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import VehicleManage from "../pages/AdminDashboard/bodyComponent/vehicleManage/VehicleManage";
import CustomerProfile from "../pages/CustomerDashboard/bodyComponent/customerProfile/CustomerProfile";
import WebPage from "../pages/webPage";
import {Fragment} from "react";
import AdminDashboard from "../pages/AdminDashboard/header/HeaderComponent";
import CustomerDashboard from "../pages/CustomerDashboard/header/HeaderComponent";
import DriverDashboard from "../pages/DriverDashboard/header/HeaderComponent";
function App() {
  return (
    <Routes>
      <Route exact path='/easy' element={<WebPage/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      {/*<Route path='/adminDashBoard' element={<AdminDashboard/>}/>*/}
      {/*<Route path='/customerDashBoard' element={<CustomerDashboard/>}/>*/}
      {/*<Route path='/driverDashBoard' element={<DriverDashboard/>}/>*/}
    </Routes>

      // <Fragment>
      //     {/*<AdminDashboard/>*/}
      //     <CustomerDashboard/>
      //     {/*<DriverDashboard/>*/}
      // </Fragment>
  );
}

export default App;
