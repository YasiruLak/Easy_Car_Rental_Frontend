import React from 'react'
import {Route, Routes} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import {Box} from "@mui/material";
import SideNav from "./SideNav";
import VehicleManage from "../bodyComponent/vehicleManage/VehicleManage";
import AdminProfile from "../bodyComponent/adminProfile/AdminProfile";


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
                    <Route exact path="/vehicleManage" element={<VehicleManage/>}/>
                    <Route exact path="/adminProfile" element={<AdminProfile/>}/>

                </Routes>
            </Box>
        </div>
    );
}