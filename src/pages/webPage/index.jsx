import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Button, Card, CardContent, CardMedia, Grid, TextField, Typography} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import homeImg from "../../assets/images/homeImg.png";
import c1 from "../../assets/images/c1.png";
import vehicle3 from "../../assets/images/vehicle3.png";
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';

import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ChairIcon from '@mui/icons-material/Chair';

import AutorenewIcon from '@mui/icons-material/Autorenew';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SupportIcon from '@mui/icons-material/Support';
import TaxiAlertIcon from '@mui/icons-material/TaxiAlert';
import CommuteIcon from '@mui/icons-material/Commute';
import GarageIcon from '@mui/icons-material/Garage';
import SpeedIcon from '@mui/icons-material/Speed';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


class WebPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <>
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
                                <Button variant="outlined" size="small" endIcon={<AccountCircleIcon/>}
                                        style={{
                                            borderColor: 'white',
                                            color: 'white',
                                            borderRadius: '50px',
                                            height: '35px',
                                            justifyContent: 'center',
                                            width: '100px',
                                            margin: '2px 10px 0 10px'
                                        }}>
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
                                <Typography variant="body2" gutterBottom
                                            style={{marginBottom: '10px', color: '#b35a2b'}}>
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
                                <Typography variant="h4" gutterBottom component="div"
                                            style={{color: '#ff4529', marginLeft: '180px'}}>
                                    WHY CHOOSE US?
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div"
                                            style={{color: '#EE5A24', marginLeft: '80px'}}>
                                    Reasons why we are the best car rental company in Sri lanka
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid className={classes.service_card_content}>
                            <Grid className={classes.service_card_content_grid}>
                                <Grid className={classes.service_card_content_grid_row}>
                                    <Grid container
                                          direction="column"
                                          justifyContent="center"
                                          alignItems="center">
                                        <BookmarkBorderIcon
                                            style={{fontSize: '60px', color: '#fcbf5b', marginBottom: '20px'}}/>
                                        <Typography variant="h6" gutterBottom component="div" style={{
                                            fontWeight: '600',
                                            color: '#ff4529',
                                            marginLeft: '20px',
                                            marginRight: '20px',
                                            marginBottom: '20px'

                                        }}>
                                            Easy and secure online booking capability
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid className={classes.service_card_content_grid_row}>
                                    <Grid container
                                          direction="column"
                                          justifyContent="center"
                                          alignItems="center">
                                        <DoNotDisturbIcon
                                            style={{fontSize: '60px', color: '#fcbf5b', marginBottom: '20px'}}/>
                                        <Typography variant="h6" gutterBottom component="div" style={{
                                            fontWeight: '600',
                                            color: '#ff4529',
                                            marginLeft: '20px',
                                            marginRight: '20px',
                                            marginBottom: '20px'

                                        }}>
                                            Free cancellation and booking amendments
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid className={classes.service_card_content_grid_row}>
                                    <Grid container
                                          direction="column"
                                          justifyContent="center"
                                          alignItems="center">
                                        <SupportIcon
                                            style={{fontSize: '60px', color: '#fcbf5b', marginBottom: '20px'}}/>
                                        <Typography variant="h6" gutterBottom component="div" style={{
                                            fontWeight: '600',
                                            color: '#ff4529',
                                            marginLeft: '20px',
                                            marginRight: '20px',
                                            marginBottom: '20px'

                                        }}>
                                            24/7 customer support and breakdown assistance
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid className={classes.service_card_content_grid_row}>
                                    <Grid container
                                          direction="column"
                                          justifyContent="center"
                                          alignItems="center">
                                        <TaxiAlertIcon
                                            style={{fontSize: '60px', color: '#fcbf5b', marginBottom: '20px'}}/>
                                        <Typography variant="h6" gutterBottom component="div" style={{
                                            fontWeight: '600',
                                            color: '#ff4529',
                                            marginLeft: '20px',
                                            marginRight: '20px',
                                            marginBottom: '20px'

                                        }}>
                                            Lowest collision damage waiver rates
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid className={classes.service_card_content_grid}>
                                <Grid className={classes.service_card_content_grid_row}>
                                    <Grid container
                                          direction="column"
                                          justifyContent="center"
                                          alignItems="center">
                                        <CommuteIcon
                                            style={{fontSize: '60px', color: '#fcbf5b', marginBottom: '20px'}}/>
                                        <Typography variant="h6" gutterBottom component="div" style={{
                                            fontWeight: '600',
                                            color: '#ff4529',
                                            marginLeft: '20px',
                                            marginRight: '20px',
                                            marginBottom: '20px'

                                        }}>
                                            Modern fleet with leading vehicle brands
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid className={classes.service_card_content_grid_row}>
                                    <Grid container
                                          direction="column"
                                          justifyContent="center"
                                          alignItems="center">
                                        <GarageIcon
                                            style={{fontSize: '60px', color: '#fcbf5b', marginBottom: '20px'}}/>
                                        <Typography variant="h6" gutterBottom component="div" style={{
                                            fontWeight: '600',
                                            color: '#ff4529',
                                            marginLeft: '20px',
                                            marginRight: '20px',
                                            marginBottom: '20px'

                                        }}>
                                            Unbranded vehicles for added security
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid className={classes.service_card_content_grid_row}>
                                    <Grid container
                                          direction="column"
                                          justifyContent="center"
                                          alignItems="center">
                                        <SpeedIcon
                                            style={{fontSize: '60px', color: '#fcbf5b', marginBottom: '20px'}}/>
                                        <Typography variant="h6" gutterBottom component="div" style={{
                                            fontWeight: '600',
                                            color: '#ff4529',
                                            marginLeft: '20px',
                                            marginRight: '20px',
                                            marginBottom: '20px'

                                        }}>
                                            Unlimited Mileage for complete freedom
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid className={classes.service_card_content_grid_row}>
                                    <Grid container
                                          direction="column"
                                          justifyContent="center"
                                          alignItems="center">
                                        <ThumbUpAltIcon
                                            style={{fontSize: '60px', color: '#fcbf5b', marginBottom: '20px'}}/>
                                        <Typography variant="h6" gutterBottom component="div" style={{
                                            fontWeight: '600',
                                            color: '#ff4529',
                                            marginLeft: '20px',
                                            marginRight: '20px',
                                            marginBottom: '20px'

                                        }}>
                                            Trusted positive reviews by our customers
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.driver_container}>
                        <Grid className={classes.driver_container_left}>
                            <Grid className={classes.driver_left_1}>
                                <Typography variant="h4" gutterBottom component="div" style={{
                                    fontWeight: '600',
                                    color: '#ffffff',
                                    marginTop: '60px',
                                    marginLeft: '60px'
                                }}>
                                    Do You Want To Earn With Us? So Don't Be Late.
                                </Typography>
                            </Grid>
                            <Grid className={classes.driver_left_1}>
                                <Button variant="outlined" size="large"
                                        style={{
                                            borderColor: '#ffffff',
                                            color: '#ffffff',
                                            marginBottom: '600px',
                                            marginRight: '360px'
                                        }}>
                                    Become a Driver
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid className={classes.driver_container_right}>
                            <img src={vehicle3} alt="" style={{width: '700px'}}/>
                        </Grid>
                    </Grid>

                    <Grid className={classes.vehicle_container}>
                        <Grid className={classes.service_header}>
                            <Grid>
                                <Typography variant="h6" gutterBottom component="div"
                                            style={{color: '#EE5A24', marginLeft: '80px'}}>
                                    see our
                                </Typography>
                                <Typography variant="h4" gutterBottom component="div"
                                            style={{color: '#ff4529', marginLeft: '32px'}}>
                                    Vehicle List
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid className={classes.vehicle}>
                            <Grid className={classes.vehicle_detail}>
                                <Grid className={classes.vehicle_detail_row}>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Suzuki Alto - Premium - Manual
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    64,350.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    2,500.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            7 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <StarIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            General
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <SettingsSuggestIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Manual
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Suzuki Alto K10 - Auto
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    71,390.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    3,000.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            8 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <StarIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            General
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <AutorenewIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Auto
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Suzuki Celerio - Auto
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    77,220.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    3,300.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            5 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <StarIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            General
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <AutorenewIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Auto
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Grid>
                                <Grid className={classes.vehicle_detail_row}>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Perodua (Daihatsu) Axia - Auto
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    90,200.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    3,800.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            2 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <StarIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            General
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <AutorenewIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Auto
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Toyota Prius C/ Aqua - Auto
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    110,330.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    5,000.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            8 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <StarIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            General
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <AutorenewIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Auto
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Toyota Corolla Axio/ NZE141
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    120,330.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    5,500.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            4 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <WorkspacePremiumIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Premium
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <SettingsSuggestIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Manual
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Grid>
                                <Grid className={classes.vehicle_detail_row}>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Perodua Bezza Prime - Auto
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    120,330.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    5,500.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            5 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <WorkspacePremiumIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Premium
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <AutorenewIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Auto
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Toyota Allion NZT 260 - Manual
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    155,760.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    5,800.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            3 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <WorkspacePremiumIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Premium
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <SettingsSuggestIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Manual
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Toyota Axio NKR 165 - Manual
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    175,230.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    6,000.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            2 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <WorkspacePremiumIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Premium
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <SettingsSuggestIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Manual
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Grid>
                                <Grid className={classes.vehicle_detail_row}>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Toyota Premio - Auto
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    227,150.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    10,000.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            2 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <ChairIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Luxury
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <AutorenewIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Auto
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    Mercedes - Auto
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    300,000.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    18,000.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            2 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <ChairIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Luxury
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <AutorenewIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Auto
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className={classes.vehicle_card}>
                                        <Card sx={{maxWidth: 345, minHeight: 380}}>
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="140"
                                                image={c1}
                                            />
                                            <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                                <Typography gutterBottom variant="h6" component="div"
                                                            style={{color: '#ff4d4d'}}>
                                                    BMW i8 - Auto
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    300,000.00 lkr (2400 free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    18,000.00 lkr (100 free km) - daily
                                                </Typography>

                                                <Grid className={classes.vehicle_card_detail}>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <DirectionsCarFilledOutlinedIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            2 Cars
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <ChairIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Luxury
                                                        </Typography>
                                                    </Grid>
                                                    <Grid className={classes.vehicle_card_subDetail}>
                                                        <AutorenewIcon style={{
                                                            fontSize: '16px',
                                                            marginRight: '2px',
                                                            color: '#2C3A47'
                                                        }}/>
                                                        <Typography variant="caption" display="block" gutterBottom
                                                                    style={{
                                                                        color: '#2C3A47',
                                                                        marginTop: '10px',
                                                                        marginLeft: '4px'
                                                                    }}>
                                                            Auto
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <Grid>
                                                    <Grid className={classes.desc_1}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid className={classes.footer_container}>
                        <Grid className={classes.footer_content}>
                            <Grid className={classes.footer_content_1}>
                                <Grid className={classes.content_1_head}>
                                    <DirectionsCarOutlinedIcon style={{
                                        fontSize: '60px',
                                        color: '#ffffff',
                                        paddingLeft: '80px',
                                        paddingTop: '60px'
                                    }}/>
                                </Grid>
                                <Grid className={classes.content_2_head}>
                                    <Typography variant="h5" gutterBottom component="div" style={{
                                        paddingRight: '120px',
                                        paddingTop: '70px', fontWeight: '600'
                                    }}>
                                        <span style={{color: '#ffffff'}}>Easy</span> Car Rental Service
                                    </Typography>
                                </Grid>

                                <Grid className={classes.content_1_head_1}>
                                    <Typography variant="body2" gutterBottom style={{color: '#ffffff'}}>
                                        Experience the freedom of travelling across Sri Lanka with the most affordable
                                        self-drive car rental options in the island. Plan your trip with our flexible
                                        rental plans and hire vehicles either on a short-term or a long-term basis
                                    </Typography>
                                </Grid>

                            </Grid>
                            <Grid className={classes.footer_content_2}>
                                <Typography variant="h5" gutterBottom component="div" style={{
                                    marginLeft: '10px',
                                    fontWeight: '600',
                                    marginTop: '14px',
                                    color: '#ffffff'
                                }}>
                                    Quick Links
                                </Typography>
                                <Grid>
                                    <Typography variant="subtitle1" gutterBottom component="div"
                                                style={{color: '#ffffff'}}>
                                        Home
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div"
                                                style={{color: '#ffffff'}}>
                                        About Us
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div"
                                                style={{color: '#ffffff'}}>
                                        Service
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div"
                                                style={{color: '#ffffff'}}>
                                        Driver
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div"
                                                style={{marginBottom: '18px', color: '#ffffff'}}>
                                        Booking
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid className={classes.footer_content_3}>
                                <Typography variant="h5" gutterBottom component="div"
                                            style={{fontWeight: '600', color: '#ffffff'}}>
                                    Contact Us
                                </Typography>
                                <Grid>
                                    <Typography variant="subtitle1" gutterBottom component="div"
                                                style={{color: '#ffffff'}}>
                                        337/A Galle rd, Panadura
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div"
                                                style={{color: '#ffffff'}}>
                                        +94 76 83 83 493
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div"
                                                style={{color: '#ffffff'}}>
                                        easycarrental@gmail.com
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom component="div"
                                                style={{marginBottom: '18px', color: '#ffffff'}}>
                                        8am - 5pm 24/7
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid className={classes.footer_content_4}>
                                <Typography variant="h5" gutterBottom component="div" style={{
                                    marginLeft: '10px',
                                    fontWeight: '600',
                                    marginBottom: '28px',
                                    color: '#ffffff'
                                }}>
                                    Newsletter
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{color: '#ffffff'}}>
                                    Subscribe our newsletter to get updated information
                                </Typography>
                                <TextField id="outlined-basic" label="Email" variant="outlined" size="small"
                                           style={{borderRadius: '100px', color: 'white'}}/>
                            </Grid>
                        </Grid>
                        <Grid className={classes.copyright}>
                            <Typography variant="caption" display="block" gutterBottom style={{color: '#ffffff'}}>
                                Copyright 2022,developed by <span style={{color: 'black'}}>Yasiru Dahanayaka</span>. All
                                Rights Reserved
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(WebPage)