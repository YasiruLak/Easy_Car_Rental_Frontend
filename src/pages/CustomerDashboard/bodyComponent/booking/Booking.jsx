import {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {Autocomplete, Button, Card, CardContent, CardMedia, Grid, TextField, Typography} from "@mui/material";
import GDSEButton from "../../../../components/common/Button";
import c1 from "../../../../assets/images/c1.png";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import StarIcon from "@mui/icons-material/Star";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DatePicker from "../../../../components/common/DatePickerBrowse/index"
import VehicleService from "../../../../service/VehicleService";
import Timepicker from "../../../../components/common/TimePickerBrowse/index"
import { format } from "date-fns";
import CustomerManageService from "../../../../service/CustomerManageService";
import DriverManageService from "../../../../service/DriverManageService";
import BookingService from "../../../../service/BookingService";
import GDSESnackBar from "../../../../components/common/SnackBar";

class Booking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,

            bookingId:'',

            customerBooking:{
                id:'',
                name:{
                    firstName:'',
                    lastName:'',
                }
            },

            driverBooking:{
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
            },

            vehicleBooking:{
                vehicleId:'',
                refundableDamagedFee:'',
                // vehicleBrand:''
            },

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

            driverRequest: [
                {
                    type: 'YES'
                },
                {
                    type: 'NO'
                }
            ],

            driverRequestType:'',

        }
    }

    submitBooking = async () => {

        let driverSchedule=[];

        if (this.state.driverRequest === "YES"){

            driverSchedule=[
                {
                    driverId:this.state.driverBooking.id,
                    bookingId:this.state.bookingId,
                    driver:this.state.driverBooking,
                    booking: {
                        bookingId: this.state.bookingId,
                        //bookingDate: format(new Date(), 'yyyy-MM-dd'),
                        pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
                        pickUpTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
                        returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
                        //returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
                        DriverRequestType: this.state.driverRequest,
                        customer: this.state.customerBooking,
                        bookingDetails:[
                            {
                                vehicleId: this.state.vehicleBooking.vehicleId,
                                bookingId: this.state.bookingId,
                                vehicle: this.state.vehicleBooking
                                ,
                                booking: {
                                    bookingId: this.state.bookingId,
                                    //bookingDate: format(new Date(), 'yyyy-MM-dd'),
                                    pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
                                    pickUpTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
                                    returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
                                    returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
                                    DriverRequestType: this.state.driverRequest,
                                    //status:'UNDER_REVIEW',
                                    customer: this.state.customerBooking,
                                    driverScheduleList: [
                                        {  driverId:this.state.driverBooking.id,
                                            bookingId:this.state.bookingId,
                                            driver:this.state.driverBooking}
                                    ],

                                }
                            }
                        ],
                    }
                }
            ]
        }


        let booking = {
            bookingId: this.state.bookingId,
            bookingDate: format(new Date(), 'yyyy-MM-dd'),
            pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
            pickUpTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
            returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
            returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
            DriverRequestType: this.state.driverRequest,
            //status:'UNDER_REVIEW',
            customer: this.state.customerBooking,
            driverScheduleList: driverSchedule,
            bookingDetails: [
                {
                    vehicleId: this.state.vehicleBooking.vehicleId,
                    bookingId: this.state.bookingId,
                    vehicle: this.state.vehicleBooking
                    ,
                    booking: {
                        bookingId: this.state.bookingId,
                        bookingDate: format(new Date(), 'yyyy-MM-dd'),
                        pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
                        pickUpTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
                        returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
                        returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
                        DriverRequestType: this.state.driverRequest,
                        //status:'UNDER_REVIEW',
                        customer: this.state.customerBooking,
                        driverScheduleList: [],

                    }
                }
            ],
        }

        let res = await BookingService.postBooking(booking);
        if (res.status === 201) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });

            await this.loadData();

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }

    }

    loadData = async () => {
        //Load Customer Data
        let params = {
            userName: localStorage.getItem("userName")
            // userName :'Yasiru'
        }
        let res = await CustomerManageService.fetchCustomerbyUserName(params);

        let resData = res.data.data;

        if (res.status === 200) {

            this.setState({
                customerBooking: {
                    id: resData.id,
                    name: {
                        firstName: resData.name.firstName,
                        lastName: resData.name.lastName
                    },
                }
            });
        }

        //Load Vehicle Data
        let paramsVehicle = {
            id: localStorage.getItem("vehicleId")
        }
        console.log(localStorage.getItem("vehicleId"))

        let res1 = await VehicleService.fetchVehicleData(paramsVehicle);

        if (res1.status === 200) {
            this.setState({
                vehicleBooking:{
                    vehicleId: res1.data.data.vehicleId,
                    // vehicleBrand: res1.data.data.vehicleBrand,
                    refundableDamagedFee: res1.data.data.refundableDamagedFee
                }
            });
            console.log(this.state.vehicleBooking)
            console.log(res1.data.data)
        }

        // //Load Driver Data
        // let paramsDriver = {
        //     id: localStorage.getItem("id")
        //
        // }
        //
        // let res2 = await DriverManageService.fetchDriverData(paramsDriver);
        //
        // let resData1 = res.data.data;
        //
        // if (res2.status === 200) {
        //     this.setState({
        //         driverBooking:{
        //             id: resData1.id,
        //             name: {
        //                 firstName: resData1.name.firstName,
        //                 lastName: resData1.name.lastName
        //             },
        //         }
        //     });
        //     console.log(res2.data.data)
        // }
    };

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

        // this.exampleForMap()

    };

    loadAllAvailableVehicles = async () => {

        let params = {
            pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), 'yyyy-MM-dd'),
            returnDate: format(new Date(localStorage.getItem("returnDate")), 'yyyy-MM-dd')
        }

        let res = await VehicleService.getAllAvailableVehicles(params);

        console.log(res.data.data);

        if (res.status === 200) {
            this.setState({

                vehicleList: res.data.data
            });
        }
        console.log(this.state.vehicleList)    // print customers array

    };

    handleClickOpen = () => {
        this.loadData();
        this.setState({open: true})
    };

    handleClose = () => {
        this.setState({open: false})
    };

    setDriver = async () => {

        let params={
            pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
            returnDate:format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd")
        }

        let res = await DriverManageService.fetchDriverData(params);

        if (res.status === 200) {

            this.setState({
                driverBooking:{
                    id:res.data.data.id,
                    name:{
                        firstName:res.data.data.name.firstName,
                        lastName:res.data.data.name.lastName,
                    }
                },
            });
        }
    }

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
                        {/*<Autocomplete*/}
                        {/*    style={{marginLeft: '20px'}}*/}
                        {/*    // onChange={(e, value, r) => {*/}
                        {/*    //*/}
                        {/*    //     let formData = this.state.formData*/}
                        {/*    //     formData.vehicleAvailability = value.type*/}
                        {/*    //     this.setState({formData})*/}
                        {/*    //*/}
                        {/*    // }}*/}
                        {/*    getOptionLabel={*/}
                        {/*        (option) => option.type*/}
                        {/*    }*/}
                        {/*    size="large"*/}
                        {/*    id="controllable-states-demo"*/}
                        {/*    options={this.state.Locations}*/}
                        {/*    sx={{width: 200}}*/}
                        {/*    renderInput={(params) => <TextField {...params} label="Location"/>}*/}
                        {/*/>*/}
                        {/*<TextField id="outlined-basic" label="Pick Up Date" variant="outlined" style={{marginLeft:'20px'}}/>*/}
                        {/*<TextField id="outlined-basic" label="Pick Up Time" variant="outlined" style={{marginLeft:'20px'}}/>*/}
                        <Grid style={{marginLeft: '20px'}}>
                            <DatePicker label="PickUp Date"/>
                        </Grid>
                        {/*<Grid style={{marginLeft: '20px'}}>*/}
                        {/*    <Timepicker label="Pickup Time"  sx={{width: 200}}/>*/}
                        {/*</Grid>*/}
                        <Grid style={{marginLeft: '20px'}}>
                            <DatePicker label="Return Date" />
                        </Grid>

                        <Grid container
                              direction="row"
                              justifyContent="flex-end"
                              alignItems="center"
                        >
                            <Button label="Search Here" type="submit" size="medium"
                                        color="primary" variant="contained"
                                        style={{margin: '10px 40px 20px 0'}}
                                        onClick={this.loadAllAvailableVehicles}
                            >SEARCH CAR NOW</Button>
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
                                                                onClick={()=>{
                                                                    localStorage.setItem("vehicleId",vehicle.vehicleId)
                                                                    this.handleClickOpen();
                                                                }

                                                                }>Rent
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
                        <Grid style={{width: '88vw', height: '90vh'}}>
                            <Grid style={{width: '90vw', height: '50vh', marginTop: '10px'}}>
                            <Grid style={{width: '90vw', height: '10vh', marginTop: '0',marginBottom:'20px',marginLeft:'1000px'}}>
                                <GDSEButton label="Placed Order" type="submit" size="medium"
                                            color="primary" variant="contained"
                                            style={{margin: '30px 0 20px 0'}}
                                            onClick={this.submitBooking}
                                />
                            </Grid>
                                <TextField id="outlined-basic" label="Rent Id" variant="outlined"
                                           value={this.state.bookingId}
                                           onChange={(e) => {

                                               this.setState({bookingId:e.target.value})
                                           }}
                                           style={{marginLeft: '20px'}}

                                />
                                <TextField id="outlined-basic" label="Customer Id" variant="outlined" disabled
                                           value={this.state.customerBooking.id}
                                           style={{marginLeft: '20px'}}/>
                                <TextField id="outlined-basic" label="Customer Name" variant="outlined" disabled
                                           value={this.state.customerBooking.name.firstName}
                                           style={{marginLeft: '20px'}}/>
                                {/*<Autocomplete*/}
                                {/*    style={{ marginLeft: '20px', width: '220px' }}*/}
                                {/*    onChange={(e, value, r) => {*/}

                                {/*        // let formData = this.state.formData*/}
                                {/*        // formData.driverRequest = value.type*/}


                                {/*        if(value.type === "YES"){*/}

                                {/*            this.setDriver();*/}
                                {/*        }*/}
                                {/*        this.setState({ driverRequestType: value.type })*/}

                                {/*    }}*/}
                                {/*    getOptionLabel={*/}
                                {/*        (option) => option.type*/}
                                {/*    }*/}

                                {/*    id="controllable-states-demo"*/}
                                {/*    options={this.state.driverRequestType}*/}
                                {/*    sx={{ width: 300 }}*/}
                                {/*    renderInput={(params) => <TextField {...params} label="Driver Requesting Type" />}*/}
                                {/*/>*/}

                                {/*<Autocomplete*/}
                                {/*    style={{ padding: '10px', width: '230px' }}*/}
                                {/*    onChange={(e, value, r) => {*/}

                                {/*        // let formData = this.state.formData*/}
                                {/*        // formData.driverAvailable = value.type*/}

                                {/*        this.setState({ driverRequestingType: value.type })*/}

                                {/*        if (value.type == "YES") {*/}
                                {/*            this.setDriver();*/}
                                {/*        }*/}

                                {/*    }}*/}
                                {/*    getOptionLabel={*/}
                                {/*        (option) => option.type*/}
                                {/*    }*/}

                                {/*    id="controllable-states-demo"*/}
                                {/*    options={this.state.driverAvailable}*/}
                                {/*    sx={{ width: 300 }}*/}
                                {/*    renderInput={(params) => <TextField {...params} label="Driver Requesting Type" />}*/}
                                {/*/>*/}


                                <TextField id="outlined-basic" label="Driver Id" variant="outlined" disabled
                                           value={this.state.driverBooking.id}
                                           style={{marginLeft: '20px'}}/>
                                <TextField id="outlined-basic" label="Driver Name" variant="outlined" disabled
                                           value={this.state.driverBooking.name.firstName}
                                           style={{marginLeft: '20px'}}/>
                                <TextField id="outlined-basic" label="Vehicle Id" variant="outlined" disabled
                                           value={this.state.vehicleBooking.vehicleId}
                                           style={{marginLeft: '20px', marginTop:'20px'}}/>
                                <TextField id="outlined-basic" label="Refundable Fee" variant="outlined" disabled
                                           value={this.state.vehicleBooking.refundableDamagedFee}
                                           style={{marginLeft: '20px', marginTop:'20px'}}/>

                                <Grid className={classes.book_Bar}>
                                {/*<Autocomplete*/}
                                {/*    style={{marginLeft: '0', marginTop:'0'}}*/}
                                {/*    // onChange={(e, value, r) => {*/}
                                {/*    //*/}
                                {/*    //     let formData = this.state.formData*/}
                                {/*    //     formData.vehicleAvailability = value.type*/}
                                {/*    //     this.setState({formData})*/}
                                {/*    //*/}
                                {/*    // }}*/}
                                {/*    getOptionLabel={*/}
                                {/*        (option) => option.type*/}
                                {/*    }*/}
                                {/*    size="large"*/}
                                {/*    id="controllable-states-demo"*/}
                                {/*    options={this.state.Locations}*/}
                                {/*    sx={{width: 220}}*/}
                                {/*    renderInput={(params) => <TextField {...params} label="Location"/>}*/}
                                {/*/>*/}
                                    <Grid style={{marginLeft: '20px', marginTop:'0'}}>
                                        <DatePicker label="PickUp Date" sx={{width: 200}}/>
                                    </Grid>
                                    {/*<Grid style={{marginLeft: '20px'}}>*/}
                                    {/*    <Timepicker label="Pickup Time"  sx={{width: 200}}/>*/}
                                    {/*</Grid>*/}
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

                               </div>


                            </Grid>
                        </Grid>
                    </DialogContent>
                    <GDSESnackBar
                        open={this.state.alert}
                        onClose={() => {
                            this.setState({ alert: false })
                        }}
                        message={this.state.message}
                        autoHideDuration={3000}
                        severity={this.state.severity}
                        variant="filled"
                    />
                </Dialog>
            </>
        )
    }
}

export default withStyles(styleSheet)(Booking)