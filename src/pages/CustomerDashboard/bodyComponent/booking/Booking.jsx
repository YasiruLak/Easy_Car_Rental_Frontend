import {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {Button, Card, CardContent, CardMedia, Grid, TextField, Typography} from "@mui/material";
import GDSEButton from "../../../../components/common/Button";
import c1 from "../../../../assets/images/c1.png";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import StarIcon from "@mui/icons-material/Star";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ChairIcon from "@mui/icons-material/Chair";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

class Booking extends Component{
    constructor(props) {
        super(props);

        this.state = {
            open:false,

        }
    }

    handleClickOpen = () => {
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
    };

    render() {
        const {classes} = this.props;
        return(
            <>
            <Grid className={classes.booking_container}>
                <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                      style={{
                          alignItems: 'center',
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          backgroundColor: '#485460',
                          width:'81vw',
                      }}>
                    <Typography variant="h4" style={{margin: '14px 0 20px 0', color: 'white',}}>Book Your Dream Vehicle</Typography>
                </Grid>
                <Grid  className={classes.searchBar}>
                    <TextField id="outlined-basic" label="Location" variant="outlined" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Pick Up Date" variant="outlined" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Pick Up Time" variant="outlined" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Return Date" variant="outlined" style={{marginLeft:'20px'}}/>

                    <Grid container
                          direction="row"
                          justifyContent="flex-end"
                          alignItems="center"
                    >
                        <GDSEButton label="Search Here" type="submit" size="medium"
                                    color="primary" variant="contained"
                                    style={{margin: '10px 40px 20px 0'}}/>
                    </Grid>
                </Grid>

                <Grid  className={classes.subContainer}>
                    <Grid className={classes.booking_detail_row}>
                        <div className={classes.card}>
                            <Card sx={{maxWidth: 345, minHeight: 380}} style={{margin: '0 20px 0 0'}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}} onClick={this.handleClickOpen}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>

                        </div>
                    </Grid>
                    <Grid className={classes.booking_detail_row}>
                        <div className={classes.card}>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid className={classes.booking_detail_row}>
                        <div className={classes.card}>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                    <Grid className={classes.booking_detail_row}>
                        <div className={classes.card}>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
                                            <Button variant="contained" fullWidth
                                                    style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Rent
                                                Now</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Card style={{margin: '0 20px 0 0'}} sx={{maxWidth: 345, minHeight: 380}}>
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

                                    <Grid className={classes.booking_card_detail}>
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.booking_card_subDetail}>
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
                                        <Grid className={classes.desc_2}>
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
                <Dialog
                    fullWidth
                    maxWidth="sm=8"
                    open={this.state.open}
                    //TransitionComponent={}
                    keepMounted
                    onClose={this.handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle style={{ textAlign: 'center', fontSize: '30px', color: '#000d6b' }}>{"VEHICLE BOOKING"}</DialogTitle>
                    <DialogContent>
                        <Grid style={{width:'91.5vw',height:'80vh',border:'1px solid red'}}>
                            <Grid style={{width:'90vw', height:'60vh',marginTop:'20px'}}>
                                <TextField id="outlined-basic" label="Location" variant="outlined" style={{marginLeft:'20px'}}/>
                                <TextField id="outlined-basic" label="Pick Up Date" variant="outlined" style={{marginLeft:'20px'}}/>
                                <TextField id="outlined-basic" label="Pick Up Time" variant="outlined" style={{marginLeft:'20px'}}/>
                                <TextField id="outlined-basic" label="Return Date" variant="outlined" style={{marginLeft:'20px'}}/>
                                <TextField id="outlined-basic" label="Return Date" variant="outlined" style={{marginLeft:'20px'}}/>
                                <TextField id="outlined-basic" label="Return Date" variant="outlined" style={{marginLeft:'20px', marginTop:'20px'}}/>
                                <TextField id="outlined-basic" label="Return Date" variant="outlined" style={{marginLeft:'20px', marginTop:'20px'}}/>
                                <TextField id="outlined-basic" label="Return Date" variant="outlined" style={{marginLeft:'20px', marginTop:'20px'}}/>
                                <TextField id="outlined-basic" label="Return Date" variant="outlined" style={{marginLeft:'20px', marginTop:'20px'}}/>
                                <TextField id="outlined-basic" label="Return Date" variant="outlined" style={{marginLeft:'20px', marginTop:'20px'}}/>
                                <Grid container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center">
                                    <GDSEButton label="Book Here" type="submit" size="medium"
                                                color="primary" variant="contained"
                                                style={{margin: '30px 20px 20px 0'}}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </>
        )
    }
}

export default withStyles(styleSheet)(Booking)