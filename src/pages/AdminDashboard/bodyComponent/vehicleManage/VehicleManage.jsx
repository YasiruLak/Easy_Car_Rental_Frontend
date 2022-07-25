import {Component} from "react";
import {Autocomplete, Grid, IconButton, TextField, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import GDSEButton from "../../../../components/common/Button";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import VehicleService from "../../../../service/VehicleService";
import GDSESnackBar from "../../../../components/common/SnackBar";
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
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const vehicleType = [
    {label: 'GENERAL'},
    {label: 'LUXURY'},
    {label: 'PREMIUM'},
];

const fuelType = [
    {label: 'DIESEL'},
    {label: 'PETROL'},
];

const transmisionType = [
    {label: 'MANUAL'},
    {label: 'AUTO'},
];

const availability = [
    {label: 'AVAILABLE'},
    {label: 'NOT_AVAILABLE'},
];

class VehicleManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
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
                    dailyRate:'',
                    monthlyRate: ''
                },
                freeMileage: {
                    dailyMileage: '',
                    monthlyMileage: ''
                },
                lastServiceMileage: '',
                vehicleAvailability: ''

            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }

    loadData = async () => {
        let res = await VehicleService.fetchVehicle();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    componentDidMount() {
        this.loadData();
    }

    submitVehicle = async () => {
        let formData = this.state.formData;

        if(this.state.btnLabel === "save") {
            let res = await VehicleService.postVehicle(formData);

            console.log(res)    //print the promise

            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await VehicleService.putVehicle(formData);
            if(res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };

    updateVehicle = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            formData: {
                vehicleId: data.vehicleId,
                registrationNo: data.registrationNo,
                vehicleBrand: data.vehicleBrand,
                vehicleType: data.vehicleType,
                fuelType: data.fuelType,
                numberOfPassenger: data.numberOfPassenger,
                vehicleColour: data.vehicleColour,
                transmissionType: data.transmissionType,
                refundableDamagedFee: data.refundableDamagedFee,
                vehicleMileage: data.vehicleMileage,
                vehiclePriceRate: {
                    dailyRate:data.vehiclePriceRate.dailyRate,
                    monthlyRate: data.vehiclePriceRate.monthlyRate
                },
                freeMileage: {
                    dailyMileage: data.freeMileage.dailyMileage,
                    monthlyMileage: data.freeMileage.monthlyMileage
                },
                lastServiceMileage: data.lastServiceMileage,
                vehicleAvailability: data.vehicleAvailability
            }
        });
    };

    clearFields = () => {
        this.setState({
            formData: {
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
                    dailyRate:'',
                    monthlyRate: ''
                },
                freeMileage: {
                    dailyMileage: '',
                    monthlyMileage: ''
                },
                lastServiceMileage: '',
                vehicleAvailability: ''
            }
        });
    };


    render() {
        const {classes} = this.props
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitVehicle}>
                    <Grid container className="pt-2" spacing={1} style={{marginLeft: '8px'}}>
                        <Grid item lg={12} xs={12} sm={12} md={12}
                              style={{
                                  alignItems: 'center',
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  justifyContent: 'center',
                                  backgroundColor: '#0984e3'
                              }}>
                            <Typography variant="h4" style={{margin: '10px 0 20px 0', color: 'white',}}>Vehicle
                                Manage</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 14px 16px'}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="V00-001"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Vehicle Id"
                                value={this.state.formData.vehicleId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.vehicleId = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 0 12px'}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="CAV-4777"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Registration No"
                                value={this.state.formData.registrationNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.registrationNo = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 0 12px'}}>

                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Axio"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Vehicle Brand"
                                value={this.state.formData.vehicleBrand}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.vehicleBrand = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 0 12px'}}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={vehicleType}
                                style={{width: '100%'}}
                                size="small"
                                variant="outlined"
                                placeholder="General"
                                value={this.state.formData.vehicleType}
                                // onChange={(e) => {
                                //     let formData = this.state.formData
                                //     formData.vehicleType = e.target.value
                                //     this.setState({ formData })
                                // }}
                                // onChange={(event) => props.onChange(event.target.value)}
                                validators={['required']}
                                renderInput={(params) => <TextField {...params} label="Vehicle Type"/>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 0 12px'}}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={fuelType}
                                style={{width: '100%'}}
                                size="small"
                                variant="outlined"
                                placeholder="Petrol"
                                value={this.state.formData.fuelType}
                                renderInput={(params) => <TextField {...params} label="Fuel Type"/>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 14px 16px'}}>

                            <TextValidator
                                id="outlinedbasic"
                                variant="outlined"
                                size="small"
                                label="No of Passenger"
                                style={{width: '100%'}}
                                placeholder="2"
                                value={this.state.formData.numberOfPassenger}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.numberOfPassenger = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Black"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Colour"
                                value={this.state.formData.vehicleColour}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.vehicleColour = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={transmisionType}
                                style={{width: '100%'}}
                                size="small"
                                variant="outlined"
                                placeholder="Auto"
                                value={this.state.formData.transmissionType}
                                renderInput={(params) => <TextField {...params} label="Transmission Type"/>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>

                            <TextValidator
                                id="outlinedbasic"
                                placeholder="10000.00"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Damaged Fee"
                                value={this.state.formData.refundableDamagedFee}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.refundableDamagedFee = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="800 Km"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Service Mileage"
                                value={this.state.formData.vehicleMileage}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.vehicleMileage = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 16px'}}>

                            <TextValidator
                                id="outlinedbasic"
                                placeholder="2500.00"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Monthly Amount"
                                value={this.state.formData.vehiclePriceRate.monthlyRate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.vehiclePriceRateMonthly = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>

                            <TextValidator
                                id="outlinedbasic"
                                placeholder="200.00"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Daily Amount"
                                value={this.state.formData.vehiclePriceRate.dailyRate}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.vehiclePriceRateDaily = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={1} style={{margin: '0 12px 10px 12px'}}>

                            <TextValidator
                                id="outlinedbasic"
                                placeholder="100 Km"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Daily Km"
                                value={this.state.formData.freeMileage.dailyMileage}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.freeMileageDaily = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={1} style={{margin: '0 12px 10px 12px'}}>

                            <TextValidator
                                id="outlinedbasic"
                                placeholder="1000 Km"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Monthly Km"
                                value={this.state.formData.freeMileage.monthlyMileage}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.freeMileageMonthly = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={1} style={{margin: '0 12px 10px 12px'}}>

                            <TextValidator
                                id="outlinedbasic"
                                placeholder="500 Km"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Last Service"
                                value={this.state.formData.lastServiceMileage}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.lastServiceMileage = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={availability}
                                style={{width: '100%'}}
                                size="small"
                                variant="outlined"
                                placeholder="Available"
                                value={this.state.formData.vehicleAvailability}
                                renderInput={(params) => <TextField {...params} label="Availability"/>}
                            />
                        </Grid>
                        <Grid container style={{margin: '20px 40px 0 0'}} direction="row" justifyContent="flex-end"
                              alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="medium" color={this.state.btnColor} variant="contained"
                                        style={{margin: '10px 12px 5px 5px'}}/>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid>
                    <TableContainer component={Paper} style={{height: '45vh',width:'81vw',backgroundColor:'#eeeff1'}}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Vehicle Id</TableCell>
                                    <TableCell align="left">Registration No</TableCell>
                                    <TableCell align="left">Vehicle Brand</TableCell>
                                    <TableCell align="left">Number Of Passengers</TableCell>
                                    {/* <TableCell align="left">Driver Type</TableCell> */}
                                    <TableCell align="left">Color</TableCell>
                                    <TableCell align="left">Vehicle Type</TableCell>
                                    <TableCell align="left">Fuel Type</TableCell>
                                    <TableCell align="left">Transmission Type</TableCell>
                                    <TableCell align="left">Daily Mileage</TableCell>
                                    <TableCell align="left">Monthly Mileage</TableCell>
                                    <TableCell align="left">Daily Rate</TableCell>
                                    <TableCell align="left">Monthly Rate</TableCell>
                                    <TableCell align="left">Vehicle Availability Type</TableCell>
                                    <TableCell align="left">Damage Fee</TableCell>
                                    <TableCell align="left">LastService Mileage</TableCell>
                                    <TableCell align="left">Vehicle Service Mileage</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.vehicleId}</TableCell>
                                            <TableCell align="left">{row.registrationNo}</TableCell>
                                            <TableCell align="left">{row.vehicleBrand}</TableCell>
                                            <TableCell align="left">{row.numberOfPassenger}</TableCell>
                                            <TableCell align="left">{row.vehicleColour}</TableCell>
                                            <TableCell align="left">{row.vehicleType}</TableCell>
                                            <TableCell align="left">{row.fuelType}</TableCell>
                                            <TableCell align="left">{row.transmissionType}</TableCell>
                                            <TableCell align="left">{row.freeMileage.dailyMileage}</TableCell>
                                            <TableCell align="left">{row.freeMileage.monthlyMileage}</TableCell>
                                            <TableCell align="left">{row.vehiclePriceRate.dailyRate}</TableCell>
                                            <TableCell align="left">{row.vehiclePriceRate.monthlyRate}</TableCell>
                                            <TableCell align="left">{row.vehicleAvailability}</TableCell>
                                            <TableCell align="left">{row.refundableDamagedFee}</TableCell>
                                            <TableCell align="left">{row.lastServiceMileage}</TableCell>
                                            <TableCell align="left">{row.vehicleMileage}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.updateVehicle(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteVehicle(row.vehicleId)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error" />
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
            </>
        );
    }
}

export default withStyles(styleSheet)(VehicleManage)