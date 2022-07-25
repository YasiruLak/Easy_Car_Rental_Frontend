import React from 'react'
import {Route, Routes} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import {Box} from "@mui/material";
import SideNav from "./SideNav";
import DriverProfile from "../bodyComponent/driverProfile/DriverProfile";
import Booking from "../../CustomerDashboard/bodyComponent/booking/Booking";



export default function DriverDashboard() {
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
                    <Route exact path="/driverProfile" element={<DriverProfile/>}/>

                </Routes>
            </Box>
        </div>
    );
}