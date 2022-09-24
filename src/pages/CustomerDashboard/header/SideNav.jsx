import React from "react";
import {Drawer, Hidden} from "@material-ui/core";
import {useStyles} from "./HeaderStyles";
import SideNavData from "./SideNavData";
import {Outlet} from "react-router-dom";

export default function SideNav({mobileOpen, handleDrawerOpen}) {
    const classes = useStyles();

    return (
        <nav className={classes.drawer} aria-label='mailbox folders'>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden mdUp implementation='css'>
                <Drawer
                    variant='temporary'
                    anchor={"left"}
                    open={mobileOpen}
                    onClose={handleDrawerOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}>
                    <SideNavData/>
                </Drawer>
            </Hidden>
            <Outlet />
            <Hidden smDown implementation='css'>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant='permanent'
                    open>

                    <SideNavData />
                </Drawer>
            </Hidden>
        </nav>
    );
}