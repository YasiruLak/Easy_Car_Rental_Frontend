import {Route, Routes} from "react-router-dom";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import VehicleManage from "../pages/AdminDashboard/bodyComponent/vehicleManage/VehicleManage";
import CustomerProfile from "../pages/CustomerDashboard/bodyComponent/customerProfile/CustomerProfile";
import WebPage from "../pages/webPage";
import AdminDashboard from "../pages/AdminDashboard/header/HeaderComponent";
import CustomerDashboard from "../pages/CustomerDashboard/header/HeaderComponent";
import DriverDashboard from "../pages/DriverDashboard/header/HeaderComponent";
import AdminHome from "../pages/AdminDashboard/bodyComponent/adminHome/AdminHome";
import AdminProfile from "../pages/AdminDashboard/bodyComponent/adminProfile/AdminProfile";
import DriverManage from "../pages/AdminDashboard/bodyComponent/driverManage/DriverManage";
import CustomerManage from "../pages/AdminDashboard/bodyComponent/customerManage/CustomerManage";
import Payment from "../pages/AdminDashboard/bodyComponent/payment/Payment";
import Schedule from "../pages/AdminDashboard/bodyComponent/schedule/Schedule";
import ViewBooking from "../pages/AdminDashboard/bodyComponent/viewBooking/viewBooking";
import Booking from "../pages/CustomerDashboard/bodyComponent/booking/Booking";
import DriverView from "../pages/CustomerDashboard/bodyComponent/driverView/driverView";
import DriverProfile from "../pages/DriverDashboard/bodyComponent/driverProfile/DriverProfile";
import DriverSchedule from "../pages/DriverDashboard/bodyComponent/driverSchedule/DriverSchedule";
function App() {
  return (
    <Routes>
        <Route exact index element={<WebPage />} />
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route exact path='/admin' element={<AdminDashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="vehicleManage" element={<VehicleManage/>}/>
            <Route path="adminProfile" element={<AdminProfile/>}/>
            <Route path="driverManage" element={<DriverManage/>}/>
            <Route path="customerManage" element={<CustomerManage/>}/>
            <Route path="payment" element={<Payment/>}/>
            <Route path="schedule" element={<Schedule/>}/>
            <Route path="viewBooking" element={<ViewBooking/>}/>
        </Route>
        <Route exact path='/customer' element={<CustomerDashboard />}>
            <Route index element={<Booking />} />
            <Route path="customerProfile" element={<CustomerProfile/>}/>
            <Route path="driverView" element={<DriverView/>}/>
        </Route>
        <Route exact path='/driver' element={<DriverDashboard />}>
            <Route index element={<DriverSchedule />} />
            <Route path="driverProfile" element={<DriverProfile/>}/>
        </Route>
    </Routes>



      // <Routes>
      //     <Route exact path='/easy' element={<WebPage/>}/>
      //     <Route path='/login' element={<SignIn/>}/>
      //     <Route path='/signup' element={<SignUp/>}/>
      //     {/*<Route path='/adminDashBoard' element={<AdminDashboard/>}/>*/}
      //     {/*<Route path='/customerDashBoard' element={<CustomerDashboard/>}/>*/}
      //     {/*<Route path='/driverDashBoard' element={<DriverDashboard/>}/>*/}
      // </Routes>

      // <Fragment>
      //     {/*<AdminDashboard/>*/}
      //     <CustomerDashboard/>
      //     {/*<DriverDashboard/>*/}
      // </Fragment>


  );
}

export default App;
