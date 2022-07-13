import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Button, Grid} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

class WebPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes}=this.props
        return(
        <Grid className={classes.container}>
            <Grid className={classes.home_container}>
                <Grid className={classes.navBar}>
                    <Tabs
                        centered
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="Home"/>
                        <Tab value="two" label="Ride"/>
                        <Tab value="three" label="Services"/>
                        <Tab value="four" label="About"/>
                        <Tab value="four" label="Reviews"/>
                        <Button variant="contained" style={{marginLeft: '700px', marginTop: '12px', height: '32px'}}
                        >Sing In</Button>
                        <Button variant="contained" style={{marginLeft: '20px', marginTop: '12px', height: '32px'}}>Sing
                            Up</Button>

                    </Tabs>
                </Grid>
            </Grid>

            <Grid className={classes.home_container}>
                <Grid className={classes.navBar}>
                    <Tabs
                        centered
                        textColor="#2196f3"
                        indicatorColor="#2196f3"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="Home"/>
                        <Tab value="two" label="Ride"/>
                        <Tab value="three" label="Services"/>
                        <Tab value="four" label="About"/>
                        <Tab value="four" label="Reviews"/>
                        <Button variant="contained" style={{marginLeft: '700px', marginTop: '12px', height: '32px'}}
                        >Sing In</Button>
                        <Button variant="contained" style={{marginLeft: '20px', marginTop: '12px', height: '32px'}}>Sing
                            Up</Button>

                    </Tabs>
                </Grid>
            </Grid>
        </Grid>
        )
    }
}

export default withStyles(styleSheet)(WebPage)