import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from "@mui/icons-material/Logout";

export default function SideNavData({handleDrawerClose}) {

    handleDrawerClose = ()=>{

    }

    const classes = useStyles();
    const listItemData = [

        {label: "Schedule", link: "/driverSchedule", icon: <CalendarMonthIcon/>},
        {label: "Profile", link: "/driverProfile", icon: <PersonIcon/>},
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