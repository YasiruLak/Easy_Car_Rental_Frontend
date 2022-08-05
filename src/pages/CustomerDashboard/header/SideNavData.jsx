import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


export default function SideNavData({handleDrawerClose}) {

    handleDrawerClose = ()=>{

    }

    const classes = useStyles();
    const listItemData = [

        {label: "Booking", link: "/booking", icon: <DirectionsCarIcon/>},
        {label: "Driver", link: "/driverView", icon: <ContactPhoneIcon/>},
        {label: "Profile", link: "/customerProfile", icon: <PersonIcon/>},
        {label: "Log out", link: "/logOut", icon: <LogoutIcon/>},


    ]
    return (<List>
        {listItemData.map((item, i) => (
            <Button size="small" className={classes.navButton} onClick={() => handleDrawerClose()}>
                <ListItem
                    exact
                    component={NavLink}
                    to={item.link}
                    className={classes.navLinks}
                    activeClassName={classes.activeNavLinks}
                    key={i}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                </ListItem>
            </Button>))}
    </List>);
}