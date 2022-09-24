import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import { Outlet, Link } from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/Person';
import HandymanIcon from '@mui/icons-material/Handyman';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DvrIcon from '@mui/icons-material/Dvr';
import PaidIcon from '@mui/icons-material/Paid';
import LogoutIcon from "@mui/icons-material/Logout";

export default function SideNavData({handleDrawerClose}) {

    const classes = useStyles();
    const listItemData = [
        {label: "Home", to: "/admin", icon: <HomeIcon/>},
        {label: "View Booking", to: "/admin/viewBooking", icon: <DvrIcon/>},
        {label: "Schedule", to: "/admin/schedule", icon: <CalendarMonthIcon/>},
        {label: "Vehicle Manage", to: "/admin/vehicleManage", icon: <DirectionsCarIcon/>},
        {label: "Driver Manage", to: "/admin/driverManage", icon: <HandymanIcon/>},
        {label: "User Manage", to: "/admin/customerManage", icon: <SupportAgentIcon/>},
        {label: "Payment", to: "/admin/payment", icon: <PaidIcon/>},
        {label: "Profile", to: "/admin/adminProfile", icon: <PersonIcon/>},
        // {label: "Log out", to: "/admin/logOut", icon: <LogoutIcon/>},


    ]
    return (<List>
        {listItemData.map((item, i) => (
            <Button size="small" className={classes.navButton} onClick={() => handleDrawerClose()}>
                <ListItem
                    exact
                    component={Link}
                    to={item.to}
                    className={classes.navLinks}
                    activeClassName={classes.activeNavLinks}
                    key={i}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                </ListItem>
            </Button>))}
    </List>);
}