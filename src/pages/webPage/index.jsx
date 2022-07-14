import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Button, Grid, Typography} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

class WebPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <Grid className={classes.container}>
                <Grid className={classes.home_container}>
                    <Grid className={classes.navBar}>
                        <Tabs
                            centered
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value="one" label="Home" className={classes.navItems}/>
                            <Tab value="two" label="Ride" className={classes.navItems}/>
                            <Tab value="three" label="Services" className={classes.navItems}/>
                            <Tab value="four" label="About" className={classes.navItems}/>
                            <Tab value="four" label="Reviews" className={classes.navItems}/>
                            <Button variant="outlined" endIcon={<AccountCircleIcon/>} style={{borderColor: 'red',color:'red'}}>
                                SignIn
                            </Button>
                        </Tabs>
                    </Grid>
                    <Grid className={classes.home_container_right}>
                        <Grid className={classes.home_left}>
                            <Typography variant="h3" component="div" gutterBottom
                                        className={classes.home_container_right_p}
                                        style={{fontWeight: '600', marginLeft: '65px', marginTop: '150px',color:'#ff4529'}}>
                                Search, book,and rent vehicle easily
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{marginBottom: '10px',color:'#b35a2b'}}>
                                Rent an car for your travel needs wherever and whenever you want with your device!
                            </Typography>
                        </Grid>
                        <Grid className={classes.home_left}>
                            <Button variant="outlined" size="large"
                                    style={{marginBottom: '200px', marginRight: '370px',borderColor: 'red',color:'red'}}>
                                Reserve Now
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className={classes.about_container}>
                    <Grid className={classes.about_container_left}>

                    </Grid>
                    <Grid className={classes.about_container_right}>
                        <Grid className={classes.about_right}>
                            <Grid className={classes.about_right_1}>
                                <Typography variant="h5" gutterBottom component="div" style={{color:'red'}}>
                                    About Us
                                </Typography>
                            </Grid>
                            <Grid className={classes.about_right_2}>
                                <Typography variant="h4" gutterBottom component="div" style={{fontWeight:'600',color:'#ff4529'}}>
                                    Welcome to Car Rent Service
                                </Typography>
                                <Typography variant="body1" gutterBottom style={{paddingLeft:'27px',paddingTop:'20px',color:'#b35a2b'}}>
                                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                    quasi quidem quibusdam.
                                </Typography>
                            </Grid>

                            <Grid className={classes.about_right_3}>
                                <Grid>
                                    <Typography variant="overline" display="block" gutterBottom style={{paddingBottom:'20px',color:'#ff0000'}}>
                                        24/7 Service
                                    </Typography>
                                    <Typography variant="overline" display="block" gutterBottom style={{paddingBottom:'20px',color:'#ff0000'}}>
                                       Island Wide Service
                                    </Typography>
                                    <Typography variant="overline" display="block" gutterBottom style={{paddingBottom:'20px',color:'#ff0000'}}>
                                        Easy Payment
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="overline" display="block" gutterBottom style={{paddingBottom:'20px',color:'#ff0000'}}>
                                        Luxury Cars
                                    </Typography>
                                    <Typography variant="overline" display="block" gutterBottom style={{paddingBottom:'20px',color:'#ff0000'}}>
                                        Price Negotiable
                                    </Typography>
                                    <Typography variant="overline" display="block" gutterBottom style={{paddingBottom:'20px',color:'#ff0000'}}>
                                        Card Accepted
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid className={classes.vehicle_container}>

                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(WebPage)