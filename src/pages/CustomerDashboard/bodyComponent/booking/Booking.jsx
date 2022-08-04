import {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {Autocomplete, Button, Card, CardContent, CardMedia, Grid, TextField, Typography} from "@mui/material";
import GDSEButton from "../../../../components/common/Button";
import c1 from "../../../../assets/images/c1.png";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import StarIcon from "@mui/icons-material/Star";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ChairIcon from "@mui/icons-material/Chair";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from "../../../../components/common/DatePicker/index"
import VehicleService from "../../../../service/VehicleService";
import Timepicker from "../../../../components/common/TimePicker/index"

class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,

            formData:{
                bookingId:'',
                pickUpDate:'',
                pickUpTime:'',
                returnDate:'',
                pickUpLocation:'',
                DriverRequestType:'',
                customer:{
                    id: '',
                    nic: '',
                    name: {
                        firstName:'',
                        lastName: ''
                    },
                    address: '',
                    drivingLicenseNo: '',
                    email: '',
                    contactNo: '',
                    user: {
                        userId:'',
                        userName:'',
                        password: '',
                        role:'',
                    }
                },
                bookingDetails:{
                    vehicleId:'',
                    bookingId:'',
                    vehicle:{
                        vehicleId: '',
                        registrationNo: '',
                        vehicleBrand: '',
                        vehicleType: '',
                        fuelType: '',
                        numberOfPassenger: '',
                        vehicleColour: '',
                        transmissionType: '',
                        refundableDamagedFee: '',
                        vehicleMileage: '',
                        vehiclePriceRate: {
                            dailyRate: '',
                            monthlyRate: ''
                        },
                        freeMileage: {
                            dailyMileage: '',
                            monthlyMileage: ''
                        },
                        lastServiceMileage: '',
                        extraKmPer:'',
                        vehicleAvailability: ''
                    },
                },
                driverSchedules:{
                    driverId:'',
                    bookingId:'',
                    driver:{
                        id: '',
                        nic: '',
                        name: {
                            firstName:'',
                            lastName: ''
                        },
                        address: '',
                        drivingLicenseNo: '',
                        email: '',
                        contactNo: '',
                        user: {
                            userId:'',
                            userName:'',
                            password: '',
                            role:'',
                        },
                        driverAvailability: ''
                    }
                },
            },

            vehicleList: [],

            Locations: [
                {
                    type: 'Colombo'
                },
                {
                    type: 'Galle'
                }
            ],

        }
    }

    componentDidMount() {
        this.loadAllData();
    }

    loadAllData = async () => {
        let res = await VehicleService.fetchVehicle();

        if (res.status === 200) {
            this.setState({
                vehicleList: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

        this.exampleForMap()

    };

    handleClickOpen = () => {
        this.setState({open: true})
    };

    handleClose = () => {
        this.setState({open: false})
    };

    render() {
        const {classes} = this.props;
        return (
            <>
                <Grid className={classes.booking_container}>
                    <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                          style={{
                              alignItems: 'center',
                              display: 'flex',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              backgroundColor: '#ffa801',
                              width: '81vw',
                          }}>
                        <Typography variant="h4" style={{margin: '14px 0 20px 0', color: 'white',}}>Book Your Dream
                            Vehicle</Typography>
                    </Grid>
                    <Grid className={classes.searchBar}>
                        <Autocomplete
                            style={{marginLeft: '20px'}}
                            // onChange={(e, value, r) => {
                            //
                            //     let formData = this.state.formData
                            //     formData.vehicleAvailability = value.type
                            //     this.setState({formData})
                            //
                            // }}
                            getOptionLabel={
                                (option) => option.type
                            }
                            size="large"
                            id="controllable-states-demo"
                            options={this.state.Locations}
                            sx={{width: 200}}
                            renderInput={(params) => <TextField {...params} label="Location"/>}
                        />
                        {/*<TextField id="outlined-basic" label="Pick Up Date" variant="outlined" style={{marginLeft:'20px'}}/>*/}
                        {/*<TextField id="outlined-basic" label="Pick Up Time" variant="outlined" style={{marginLeft:'20px'}}/>*/}
                        <Grid style={{marginLeft: '20px'}}>
                            <DatePicker label="Pickup Date"/>
                        </Grid>
                        <Grid style={{marginLeft: '20px'}}>
                            <Timepicker label="Pickup Time"  sx={{width: 200}}/>
                        </Grid>
                        <Grid style={{marginLeft: '20px'}}>
                            <DatePicker label="Return Date" />
                        </Grid>

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

                    <Grid className={classes.subContainer}>
                        <Grid className={classes.booking_detail_row}>
                            <div className={classes.card}>
                                {this.state.vehicleList.map((vehicle) => (
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
                                                    {vehicle.vehicleBrand} - {vehicle.vehicleType} - {vehicle.transmissionType}
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green'}}>
                                                    {vehicle.vehiclePriceRate.monthlyRate} lkr ({vehicle.freeMileage.monthlyMileage} free km) - month
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div"
                                                            style={{color: 'green', marginTop: '8px'}}>
                                                    {vehicle.vehiclePriceRate.dailyRate} lkr ({vehicle.freeMileage.dailyMileage} free km) - daily
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
                                                            {vehicle.vehicleType}
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
                                                            {vehicle.transmissionType}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid>
                                                    <Grid className={classes.desc_2}>
                                                        <Button variant="contained" fullWidth
                                                                style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}
                                                                onClick={this.handleClickOpen}>Rent
                                                            Now</Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    ))
                                }
                            </div>
                        </Grid>
                    </Grid>
                        {/*<Grid className={classes.booking_detail_row}>*/}
                        {/*</Grid>*/}
                        {/*<Grid className={classes.booking_detail_row}>*/}
                        {/*</Grid>*/}
                        {/*<Grid className={classes.booking_detail_row}>*/}
                        {/*</Grid>*/}

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
                    <DialogTitle style={{
                        textAlign: 'center',
                        fontSize: '30px',
                        color: '#000d6b'
                    }}>{"VEHICLE BOOKING"}</DialogTitle>
                    <DialogContent>
                        <Grid style={{width: '88vw', height: '80vh'}}>
                            <Grid style={{width: '90vw', height: '50vh', marginTop: '0'}}>
                                <TextField id="outlined-basic" label="Rent Id" variant="outlined"
                                           style={{marginLeft: '20px'}}/>
                                <TextField id="outlined-basic" label="Customer Id" variant="outlined"
                                           style={{marginLeft: '20px'}}/>
                                <TextField id="outlined-basic" label="Customer Name" variant="outlined"
                                           style={{marginLeft: '20px'}}/>
                                <TextField id="outlined-basic" label="Driver Id" variant="outlined"
                                           style={{marginLeft: '20px'}}/>
                                <TextField id="outlined-basic" label="Driver Name" variant="outlined"
                                           style={{marginLeft: '20px'}}/>
                                <TextField id="outlined-basic" label="Vehicle Id" variant="outlined"
                                           style={{marginLeft: '20px', marginTop: '20px'}}/>
                                <TextField id="outlined-basic" label="Refundable Fee" variant="outlined"
                                           style={{marginLeft: '20px', marginTop: '20px'}}/>
                                <Grid className={classes.book_Bar}>
                                <Autocomplete
                                    style={{marginLeft: '0', marginTop:'0'}}
                                    // onChange={(e, value, r) => {
                                    //
                                    //     let formData = this.state.formData
                                    //     formData.vehicleAvailability = value.type
                                    //     this.setState({formData})
                                    //
                                    // }}
                                    getOptionLabel={
                                        (option) => option.type
                                    }
                                    size="large"
                                    id="controllable-states-demo"
                                    options={this.state.Locations}
                                    sx={{width: 222}}
                                    renderInput={(params) => <TextField {...params} label="Location"/>}
                                />
                                <Grid style={{marginLeft: '20px', marginTop:'0'}}>
                                    <DatePicker label="Pickup Date" sx={{width: 200}}/>
                                </Grid>
                                <Grid style={{marginLeft: '20px', marginTop:'0'}}>
                                    <Timepicker label="Pickup Time"  sx={{width: 200}}/>
                                </Grid>
                                <Grid style={{marginLeft: '20px', marginTop:'0'}}>
                                    <DatePicker label="Return Date" sx={{width: 200}}/>
                                </Grid>
                                </Grid>
                                <Grid className={classes.signUp_Upload} style={{margin:'0 20px 10px 20px'}}>
                                    <div className={classes.signUp_imageDiv} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        height: '140px',
                                        width: '240px',
                                        //border: '1px solid blue',
                                        //backgroundImage:"url(" +this.state.licenceView+ ")",
                                        backgroundSize: 'cover',
                                        margin:'0 20px 0 0'
                                    }}/>
                                </Grid>
                                <div style={{margin:'0 0 0 60px'}}><input
                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file02"
                                    multiple
                                    type="file"
                                    // onChange={(e) => {
                                    //     this.setState({
                                    //         nicImage: e.target.files[0],
                                    //         nicView : URL.createObjectURL(e.target.files[0])
                                    //     })
                                    // }}
                                />
                                    <label htmlFor="contained-button-file02">
                                        <Button variant="outlined" color="primary" size="medium" component="span">
                                            Payment Slip Upload
                                        </Button>
                                    </label>
                                    <GDSEButton label="Placed Order" type="submit" size="medium"
                                                color="primary" variant="contained"
                                                style={{margin: '0 20px 80px 880px'}}/>
                               </div>


                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </>
        )
    }
}

export default withStyles(styleSheet)(Booking)