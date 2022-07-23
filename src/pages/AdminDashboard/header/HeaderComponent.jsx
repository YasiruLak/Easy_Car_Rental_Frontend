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
                <Routes>
                    <Route path="/vehicleManage" element={<VehicleManage/>}/>
                    <Route path="/adminProfile" element={<AdminProfile/>}/>
                    <Route exact path="/adminHome" element={<AdminHome/>}/>
                    <Route exact path="/driverManage" element={<DriverManage/>}/>
                    <Route exact path="/customerManage" element={<CustomerManage/>}/>

                </Routes>
            </Box>
        </div>
    );
}