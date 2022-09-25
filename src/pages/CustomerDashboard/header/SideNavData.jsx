import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {useStyles} from "./HeaderStyles";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Link } from "react-router-dom";



function SideNavData({handleDrawerClose}) {

    const classes = useStyles();
    const listItemData = [

        {label: "Booking", to: "/customer", icon: <DirectionsCarIcon/>},
        {label: "Driver", to: "/customer/driverView", icon: <ContactPhoneIcon/>},
        {label: "Profile", to: "/customer/customerProfile", icon: <PersonIcon/>},
        // {label: "Log out", to: "/customer/logOut", icon: <LogoutIcon/>},


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

export default (SideNavData)