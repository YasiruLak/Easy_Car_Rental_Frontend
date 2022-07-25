import React from 'react'
import {Route, Routes} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import {Box} from "@mui/material";
import SideNav from "./SideNav";
import CustomerProfile from "../bodyComponent/customerProfile/CustomerProfile";
import Booking from "../bodyComponent/booking/Booking";




export default function CustomerDashboard() {
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
                    <Route exact path="/booking" element={<Booking/>}/>
                    <Route exact path="/customerProfile" element={<CustomerProfile/>}/>
                </Routes>
            </Box>
        </div>
    );
}