import {Component} from "react";
import {Grid, IconButton, withStyles} from "@material-ui/core";
import {styleSheet} from "./styles";
import {Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import GDSEButton from "../../../../components/common/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VehicleService from "../../../../service/VehicleService";
import BookingService from "../../../../service/BookingService";

class ViewBooking extends Component {
    constructor(props) {
        super(props);

        this.state = {

            formData: {
                bookingId: '',
                pickUpDate: '',
                pickUpTime: '',
                returnDate: '',
                pickUpLocation: '',
                DriverRequestType: '',
                customer: {
                    id: '',
                    nic: '',
                    name: {
                        firstName: '',
                        lastName: ''
                    },
                    address: '',
                    drivingLicenseNo: '',
                    email: '',
                    contactNo: '',
                    user: {
                        userId: '',
                        userName: '',
                        password: '',
                        role: '',
                    }
                },
                bookingDetails: {
                    vehicleId: '',
                    bookingId: '',
                    vehicle: {
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
                        extraKmPer: '',
                        vehicleAvailability: ''
                    },
                },
                driverSchedules: {
                    driverId: '',
                    bookingId: '',
                    driver: {
                        id: '',
                        nic: '',
                        name: {
                            firstName: '',
                            lastName: ''
                        },
                        address: '',
                        drivingLicenseNo: '',
                        email: '',
                        contactNo: '',
                        user: {
                            userId: '',
                            userName: '',
                            password: '',
                            role: '',
                        },
                        driverAvailability: ''
                    }
                },
            },

            data: [],
        }
    }

    loadBookingData = async () => {
        let res = await BookingService.fetchBooking();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        // this.setState({
        //     data: res.data.data
        // });
        this.exampleForMap()

    };

    componentDidMount() {
        this.loadBookingData();
    }

    render() {
        const {classes} = this.props
        return (
            <>
                <Grid className={classes.viewBooking_container}>
                    <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                          style={{
                              alignItems: 'center',
                              display: 'flex',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              backgroundColor: '#3d3d3d',
                              width:'84vw',
                          }}>
                        <Typography variant="h4" style={{margin: '10px 0 10px 0', color: 'white'}}>Booking View</Typography>
                    </Grid>
                    <ValidatorForm ref="form" className="pt-2">
                        <Grid style={classes.search_Bar}>
                            <Grid
                                  style={{
                                      alignItems: 'center',
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      justifyContent: 'center',
                                      //backgroundColor: '#0984e3',
                                      //border:'1px solid red',
                                      width:'80vw',
                                      height:'20vh'
                                  }}>
                                <TextValidator
                                    id="outlined-basic"
                                    placeholder="B00-001"
                                    variant="outlined"
                                    size="small"
                                    style={{width: '40vw',marginTop:'70px'}}
                                    label="Booking No"
                                    // value={this.state.formData.vehicleId}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.vehicleId = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    validators={['required']}
                                />
                                <Grid>
                                    <GDSEButton label="Search" type="submit" size="medium"
                                                color="primary" variant="contained"
                                                style={{margin: '70px 16px 0 20px'}}/>
                                </Grid>
                            </Grid>

                        </Grid>
                    </ValidatorForm>
                    <Grid>
                        <TableContainer component={Paper}
                                        style={{height: '70vh', width: '80vw', backgroundColor: '#eeeff1'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Booking Id</TableCell>
                                        <TableCell align="left">Customer Id</TableCell>
                                        <TableCell align="left">Customer Name</TableCell>
                                        <TableCell align="left">Driver Id</TableCell>
                                        <TableCell align="left">Driver Name</TableCell>
                                        <TableCell align="left">Pickup Date</TableCell>
                                        <TableCell align="left">Pickup Location</TableCell>
                                        <TableCell align="left">Pickup Time</TableCell>
                                        <TableCell align="left">Return Date</TableCell>
                                        <TableCell align="left">Driver Request</TableCell>
                                        <TableCell align="left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.bookingId}</TableCell>
                                            <TableCell align="left">{row.customer.id}</TableCell>
                                            <TableCell align="left">{row.customer.name.firstName}</TableCell>
                                            <TableCell align="left">{row.driverSchedules.driver.id}</TableCell>
                                            <TableCell align="left">{row.driverSchedules.driver.name.firstName}</TableCell>
                                            <TableCell align="left">{row.pickUpDate}</TableCell>
                                            <TableCell align="left">{row.pickUpLocation}</TableCell>
                                            <TableCell align="left">{row.pickUpTime}</TableCell>
                                            <TableCell align="left">{row.returnDate}</TableCell>
                                            <TableCell align="left">{row.DriverRequestType}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            //this.updateVehicle(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            //this.deleteVehicle(row.vehicleId)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error"/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(ViewBooking)