import {Component} from "react";
import {Card, CardContent, Grid, IconButton, Typography} from "@material-ui/core";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";
import BookingService from "../../../../service/BookingService";
import DriverManageService from "../../../../service/DriverManageService";
import CustomerManageService from "../../../../service/CustomerManageService";
import VehicleService from "../../../../service/VehicleService";

class AdminHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
             bookingData:'',
             customerData:'',
             vehicleData:'',
             driverData:'',

            formData: {
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
                    userName:'',
                    password: ''
                }
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'update',
            btnColor: 'secondary'
        }
    }

    bookingDataCount = async () => {
        let res = await BookingService.bookingCount();

        if (res.status === 200) {
            this.setState({
                bookingData: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    driverDataCount = async () => {
        let res = await DriverManageService.driverCount();

        if (res.status === 200) {
            this.setState({
                driverData: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    customerDataCount = async () => {
        let res = await CustomerManageService.customerCount();

        if (res.status === 200) {
            this.setState({
                customerData: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    vehicleDataCount = async () => {
        let res = await VehicleService.vehicleCount();

        if (res.status === 200) {
            this.setState({
                vehicleData: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    componentDidMount() {
        this.bookingDataCount();
        this.driverDataCount();
        this.customerDataCount();
        this.vehicleDataCount();
    };

    render() {
        const {classes} = this.props
        return (
            <>
                <Grid className={classes.Home_container}>
                    <Grid className={classes.Admin_Home_Card}>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',

                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Vehicle
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        {this.state.vehicleData}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                       Customer
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        {this.state.customerData}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Booking
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        {this.state.bookingData}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Drivers
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        {this.state.driverData}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    {/*<Grid className={classes.Admin_Home_Card}>*/}
                    {/*    <Grid*/}
                    {/*        direction="column"*/}
                    {/*        justifyContent="center"*/}
                    {/*        alignItems="center">*/}
                    {/*        <Card sx={{minWidth: 275}} style={{*/}
                    {/*            backgroundColor: '#808e9b',*/}
                    {/*            color: 'white',*/}
                    {/*            width: '200px',*/}
                    {/*            alignItems: 'center',*/}
                    {/*            justifyContent: 'center'*/}
                    {/*        }}>*/}
                    {/*            <CardContent style={{*/}
                    {/*                alignItems: 'center', justifyContent: 'center', display: 'flex',*/}
                    {/*                flexWrap: 'wrap', flexDirection: 'column',*/}
                    {/*            }}>*/}
                    {/*                <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom*/}
                    {/*                            style={{fontSize: '28px'}}>*/}
                    {/*                    Vehicle*/}
                    {/*                </Typography>*/}
                    {/*                <Typography lg={{mb: 1.5}} color="text.secondary" style={{*/}
                    {/*                    alignItems: 'center',*/}
                    {/*                    justifyContent: 'center',*/}
                    {/*                    fontSize: '22px'*/}
                    {/*                }}>*/}
                    {/*                    01*/}
                    {/*                </Typography>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid*/}
                    {/*        direction="column"*/}
                    {/*        justifyContent="center"*/}
                    {/*        alignItems="center">*/}
                    {/*        <Card sx={{minWidth: 275}} style={{*/}
                    {/*            backgroundColor: '#808e9b',*/}
                    {/*            color: 'white',*/}
                    {/*            width: '200px',*/}
                    {/*            alignItems: 'center',*/}
                    {/*            justifyContent: 'center'*/}
                    {/*        }}>*/}
                    {/*            <CardContent style={{*/}
                    {/*                alignItems: 'center', justifyContent: 'center', display: 'flex',*/}
                    {/*                flexWrap: 'wrap', flexDirection: 'column',*/}
                    {/*            }}>*/}
                    {/*                <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom*/}
                    {/*                            style={{fontSize: '28px'}}>*/}
                    {/*                    Vehicle*/}
                    {/*                </Typography>*/}
                    {/*                <Typography lg={{mb: 1.5}} color="text.secondary" style={{*/}
                    {/*                    alignItems: 'center',*/}
                    {/*                    justifyContent: 'center',*/}
                    {/*                    fontSize: '22px'*/}
                    {/*                }}>*/}
                    {/*                    01*/}
                    {/*                </Typography>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid*/}
                    {/*        direction="column"*/}
                    {/*        justifyContent="center"*/}
                    {/*        alignItems="center">*/}
                    {/*        <Card sx={{minWidth: 275}} style={{*/}
                    {/*            backgroundColor: '#808e9b',*/}
                    {/*            color: 'white',*/}
                    {/*            width: '200px',*/}
                    {/*            alignItems: 'center',*/}
                    {/*            justifyContent: 'center'*/}
                    {/*        }}>*/}
                    {/*            <CardContent style={{*/}
                    {/*                alignItems: 'center', justifyContent: 'center', display: 'flex',*/}
                    {/*                flexWrap: 'wrap', flexDirection: 'column',*/}
                    {/*            }}>*/}
                    {/*                <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom*/}
                    {/*                            style={{fontSize: '28px'}}>*/}
                    {/*                    Vehicle*/}
                    {/*                </Typography>*/}
                    {/*                <Typography lg={{mb: 1.5}} color="text.secondary" style={{*/}
                    {/*                    alignItems: 'center',*/}
                    {/*                    justifyContent: 'center',*/}
                    {/*                    fontSize: '22px'*/}
                    {/*                }}>*/}
                    {/*                    01*/}
                    {/*                </Typography>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid*/}
                    {/*        direction="column"*/}
                    {/*        justifyContent="center"*/}
                    {/*        alignItems="center">*/}
                    {/*        <Card sx={{minWidth: 275}} style={{*/}
                    {/*            backgroundColor: '#808e9b',*/}
                    {/*            color: 'white',*/}
                    {/*            width: '200px',*/}
                    {/*            alignItems: 'center',*/}
                    {/*            justifyContent: 'center'*/}
                    {/*        }}>*/}
                    {/*            <CardContent style={{*/}
                    {/*                alignItems: 'center', justifyContent: 'center', display: 'flex',*/}
                    {/*                flexWrap: 'wrap', flexDirection: 'column',*/}
                    {/*            }}>*/}
                    {/*                <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom*/}
                    {/*                            style={{fontSize: '28px'}}>*/}
                    {/*                    Vehicle*/}
                    {/*                </Typography>*/}
                    {/*                <Typography lg={{mb: 1.5}} color="text.secondary" style={{*/}
                    {/*                    alignItems: 'center',*/}
                    {/*                    justifyContent: 'center',*/}
                    {/*                    fontSize: '22px'*/}
                    {/*                }}>*/}
                    {/*                    01*/}
                    {/*                </Typography>*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                    <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                          style={{
                              alignItems: 'center',
                              display: 'flex',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              backgroundColor: '#ff3f34',
                              width:'80vw',
                              margin:'14px 0 14px 0'
                          }}>
                        <Typography variant="h5" style={{margin: '10px 0 10px 0', color: 'white'}}>Pending User Request</Typography>
                    </Grid>
                    <Grid>
                        <TableContainer component={Paper}
                                        style={{height: '70vh', width: '80vw', backgroundColor: '#eeeff1', marginLeft:'20px'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Customer Id</TableCell>
                                        <TableCell align="left">First Name</TableCell>
                                        <TableCell align="left">Last Name</TableCell>
                                        <TableCell align="left">NIC No</TableCell>
                                        <TableCell align="left">License No</TableCell>
                                        <TableCell align="left">Address</TableCell>
                                        <TableCell align="left">Email</TableCell>
                                        <TableCell align="left">Contact No</TableCell>
                                        <TableCell align="left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.nic}</TableCell>
                                            <TableCell align="left">{row.name.firstName}</TableCell>
                                            <TableCell align="left">{row.name.lastName}</TableCell>
                                            <TableCell align="left">{row.drivingLicenseNo}</TableCell>
                                            <TableCell align="left">{row.address}</TableCell>
                                            <TableCell align="left">{row.email}</TableCell>
                                            <TableCell align="left">{row.contactNo}</TableCell>
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
                    <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                          style={{
                              alignItems: 'center',
                              display: 'flex',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              backgroundColor: '#ff3f34',
                              width:'80vw',
                              margin:'14px 0 14px 0'
                          }}>
                        <Typography variant="h5" style={{margin: '10px 0 10px 0', color: 'white'}}>Available To Service</Typography>
                    </Grid>
                    <Grid>
                        <TableContainer component={Paper}
                                        style={{height: '70vh', width: '80vw', backgroundColor: '#eeeff1', marginLeft:'20px'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Vehicle Id</TableCell>
                                        <TableCell align="left">Registration No</TableCell>
                                        <TableCell align="left">Vehicle Brand</TableCell>
                                        <TableCell align="left">Last Service Mileage</TableCell>
                                        <TableCell align="left">Service Mileage</TableCell>
                                        <TableCell align="left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        //this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
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
                                        //))
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

export default withStyles(styleSheet)(AdminHome)