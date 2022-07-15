import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import homeImg from "../../assets/images/homeImg.png";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import driver1 from "../../assets/images/driver1.png";


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
                            <Button variant="outlined" endIcon={<AccountCircleIcon/>}
                                    style={{borderColor: 'red', color: 'red'}}>
                                SignIn
                            </Button>
                        </Tabs>
                    </Grid>
                    <Grid className={classes.home_container_right}>
                        <Grid className={classes.home_left}>
                            <Typography variant="h3" component="div" gutterBottom
                                        className={classes.home_container_right_p}
                                        style={{
                                            fontWeight: '600',
                                            marginLeft: '65px',
                                            marginTop: '150px',
                                            color: '#ff4529'
                                        }}>
                                Search, book,and rent vehicle easily
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{marginBottom: '10px', color: '#b35a2b'}}>
                                Rent an car for your travel needs wherever and whenever you want with your device!
                            </Typography>
                        </Grid>
                        <Grid className={classes.home_left}>
                            <Button variant="outlined" size="large"
                                    style={{
                                        marginBottom: '200px',
                                        marginRight: '370px',
                                        borderColor: 'red',
                                        color: 'red'
                                    }}>
                                Reserve Now
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className={classes.about_container}>
                    <Grid className={classes.about_container_left}>
                        <img src={homeImg} alt="" style={{width: '700px'}}/>

                    </Grid>
                    <Grid className={classes.about_container_right}>
                        <Grid className={classes.about_right}>
                            <Grid className={classes.about_right_1}>
                                <Typography variant="h5" gutterBottom component="div" style={{color: 'white'}}>
                                    About Us
                                </Typography>
                            </Grid>
                            <Grid className={classes.about_right_2}>
                                <Typography variant="h4" gutterBottom component="div"
                                            style={{fontWeight: '600', color: '#fff1f0'}}>
                                    Welcome to Car Rent Service
                                </Typography>
                                <Typography variant="body1" gutterBottom
                                            style={{paddingLeft: '27px', paddingTop: '20px', color: '#d4cccb'}}>
                                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                    quasi quidem quibusdam.
                                </Typography>
                            </Grid>

                            <Grid className={classes.about_right_3}>
                                <Grid>
                                    <Typography variant="overline" display="block" gutterBottom
                                                style={{paddingBottom: '20px', color: '#ffffff'}}>
                                        24/7 Service
                                    </Typography>
                                    <Typography variant="overline" display="block" gutterBottom
                                                style={{paddingBottom: '20px', color: '#ffffff'}}>
                                        Island Wide Service
                                    </Typography>
                                    <Typography variant="overline" display="block" gutterBottom
                                                style={{paddingBottom: '20px', color: '#ffffff'}}>
                                        Easy Payment
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="overline" display="block" gutterBottom
                                                style={{paddingBottom: '20px', color: '#ffffff'}}>
                                        Luxury Cars
                                    </Typography>
                                    <Typography variant="overline" display="block" gutterBottom
                                                style={{paddingBottom: '20px', color: '#ffffff'}}>
                                        Price Negotiable
                                    </Typography>
                                    <Typography variant="overline" display="block" gutterBottom
                                                style={{paddingBottom: '20px', color: '#ffffff'}}>
                                        Card Accepted
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid className={classes.service_container}>
                    <Grid className={classes.service_header}>
                        <Grid>
                            <Typography variant="h6" gutterBottom component="div" style={{color:'#ffd438',marginLeft:'80px'}}>
                                see our
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div" style={{color:'#ff4529'}}>
                                Popular Service
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid className={classes.service_card_content}>
                        <Grid className={classes.service_card_content_grid}>
                            <Grid className={classes.service_card_content_grid_row}>
                                <Grid>
                                    <LocationOnOutlinedIcon style={{fontSize: '45px', color: 'red',paddingLeft:'10px'}}/>
                                    <Typography variant="h4" gutterBottom component="div" style={{paddingLeft:'10px'}}>
                                        h3. Heading
                                    </Typography>
                                    <Typography variant="body1" gutterBottom style={{paddingLeft:'10px'}}>
                                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                        quasi quidem quibusdam.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid className={classes.service_card_content_grid_row}></Grid>
                            <Grid className={classes.service_card_content_grid_row}></Grid>
                        </Grid>
                        <Grid className={classes.service_card_content_grid}>
                            <Grid className={classes.service_card_content_grid_row}></Grid>
                            <Grid className={classes.service_card_content_grid_row}></Grid>
                            <Grid className={classes.service_card_content_grid_row}></Grid>
                        </Grid>
                    </Grid>


                </Grid>
                <Grid className={classes.driver_container}>
                    <Grid className={classes.driver_container_left}>
                        <Grid className={classes.driver_left_1}>
                            <Typography variant="h4" gutterBottom component="div" style={{
                                fontWeight: '600',
                                color: '#d4cccb',
                                marginTop: '60px',
                                marginLeft: '60px'
                            }}>
                                Do You Want To Earn With Us? So Don't Be Late.
                            </Typography>
                        </Grid>
                        <Grid className={classes.driver_left_1}>
                            <Button variant="outlined" size="large"
                                    style={{
                                        borderColor: 'white',
                                        color: 'white',
                                        marginBottom: '600px',
                                        marginRight: '360px'
                                    }}>
                                Become a Driver
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid className={classes.driver_container_right}>
                        <img src={driver1} alt="" style={{width: '700px'}}/>
                    </Grid>
                </Grid>

                <Grid className={classes.vehicle_container}>
                    <Grid className={classes.service_header}>
                        <Grid>
                            <Typography variant="h6" gutterBottom component="div">
                                h5. Heading
                            </Typography>
                            <Typography variant="h4" gutterBottom component="div">
                                h3. Heading
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid className={classes.vehicle}>
                        <Grid className={classes.vehicle_detail}>
                            <Grid className={classes.vehicle_detail_row}>
                                <div className={classes.vehicle_card}>
                                    <Card sx={{ maxWidth: 345 , minHeight: 380}}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={driver1}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" style={{marginLeft:'130px'}}>
                                                Tesla
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="div" style={{marginLeft:'80px'}}>
                                                $50.00/ Per Day
                                            </Typography>

                                            <Grid className={classes.vehicle_card_detail}>
                                                <Grid></Grid>
                                            </Grid>

                                            <Grid className={classes.vehicle_card_desc} >
                                                <Grid className={classes.desc_1}>
                                                    <Button variant="contained" fullWidth>Contained</Button>
                                                </Grid>
                                                <Grid className={classes.desc_1} style={{marginLeft:'5px'}}>
                                                    <Button variant="contained" fullWidth>Contained</Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className={classes.vehicle_card}>
                                    <Card sx={{ maxWidth: 345 , minHeight: 380}}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={driver1}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className={classes.vehicle_card}>
                                    <Card sx={{ maxWidth: 345 , minHeight: 380}}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={driver1}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid className={classes.vehicle_detail_row}>
                                <div className={classes.vehicle_card}>
                                    <Card sx={{ maxWidth: 345 , minHeight: 380}}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={driver1}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className={classes.vehicle_card}>
                                    <Card sx={{ maxWidth: 345 , minHeight: 380}}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={driver1}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className={classes.vehicle_card}>
                                    <Card sx={{ maxWidth: 345 , minHeight: 380}}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={driver1}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Lizard
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                                species, ranging across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(WebPage)