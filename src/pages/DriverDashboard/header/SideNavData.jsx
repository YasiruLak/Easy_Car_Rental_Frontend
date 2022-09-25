import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {useStyles} from "./HeaderStyles";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from "react-router-dom";


function SideNavData({handleDrawerClose}) {

    const classes = useStyles();
    const listItemData = [
        {label: "Schedule", to: "/driver", icon: <CalendarMonthIcon/>},
        {label: "Profile", to: "/driver/driverProfile", icon: <PersonIcon/>},
        // {label: "Log out", link: "/logOut", icon: <LogoutIcon/>},

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