import React from 'react'
import {Route, Routes} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import {Box} from "@mui/material";
import SideNav from "./SideNav";
import VehicleManage from "../bodyComponent/vehicleManage/VehicleManage";
import AdminProfile from "../bodyComponent/adminProfile/AdminProfile";
import AdminHome from "../bodyComponent/adminHome/AdminHome";
import DriverManage from "../bodyComponent/driverManage/DriverManage";
import CustomerManage from "../bodyComponent/customerManage/CustomerManage";
import Payment from "../bodyComponent/payment/Payment";
import Schedule from "../bodyComponent/schedule/Schedule";
import ViewBooking from "../bodyComponent/viewBooking/viewBooking";


export default function AdminDashboard() {
    const classes = useStyles()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setMobileOpen(!mobileOpen);
    }
    return (
        <div>
            <SideNav mobileOpen={mobileOpen} handleDrawerOpen={handleDrawerOpen}/>
            <Box className={classes.wrapper}>
                {/*<Routes>*/}
                {/*    <Route exact path="/" element={<AdminHome/>}/>*/}
                {/*    <Route exact path="/vehicleManage" element={<VehicleManage/>}/>*/}
                {/*    <Route exact path="/adminProfile" element={<AdminProfile/>}/>*/}
                {/*    <Route exact path="/driverManage" element={<DriverManage/>}/>*/}
                {/*    <Route exact path="/customerManage" element={<CustomerManage/>}/>*/}
                {/*    <Route exact path="/payment" element={<Payment/>}/>*/}
                {/*    <Route exact path="/schedule" element={<Schedule/>}/>*/}
                {/*    <Route exact path="/viewBooking" element={<ViewBooking/>}/>*/}
                {/*</Routes>*/}
            </Box>
        </div>
    );
}