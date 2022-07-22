import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from "react-router-dom";
import {useStyles} from "./HeaderStyles";

export default function SideNavData({handleDrawerClose}) {
    const classes = useStyles();
    const listItemData = [
        {label: "Vehicle Manage", link: "/vehicleManage", icon: <HomeIcon/>},
        {label: "Admin Profile", link: "/adminProfile", icon: <HomeIcon/>},

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