import React from 'react'
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import {NavLink} from "react-router-dom";
import {useStyles} from "./HeaderStyles";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/Person';
import HandymanIcon from '@mui/icons-material/Handyman';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function SideNavData({handleDrawerClose}) {

    handleDrawerClose = ()=>{

    }

    const classes = useStyles();
    const listItemData = [

        {label: "Profile", link: "/driverProfile", icon: <PersonIcon/>},



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