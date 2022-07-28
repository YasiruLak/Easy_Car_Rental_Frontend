import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import {
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip
} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Autocomplete, TextField, Typography} from "@mui/material";
import GDSEButton from "../../../../components/common/Button";
import Paper from "@mui/material/Paper";
import GDSESnackBar from "../../../../components/common/SnackBar";

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

class CustomerManage extends Component {
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
            btnLabel: 'update',
            btnColor: 'secondary'
        }
    }

    render() {
        const {classes} = this.props
        return(
            <>
                <ValidatorForm ref="form" className="pt-2">
                    <Grid container className="pt-2" spacing={1} style={{marginLeft: '8px'}}>
                        <Grid item lg={12} xs={12} sm={12} md={12}
                              style={{
                                  alignItems: 'center',
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  justifyContent: 'center',
                                  backgroundColor: '#0fb9b1'
                              }}>
                            <Typography variant="h4" style={{margin: '10px 0 20px 0', color: 'white',}}>Customer
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
                                options={fuelType}
                                style={{width: '100%'}}
                                size="small"
                                variant="outlined"
                                placeholder="Petrol"
                                value={this.state.formData.fuelType}
                                renderInput={(params) => <TextField {...params} label="Fuel Type"/>}
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
                                placeholder="Petrol"
                                value={this.state.formData.vehicleType}
                                renderInput={(params) => <TextField {...params} label="Vehicle Type"/>}
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
                                    formData.vehiclePriceRate.monthlyRate = e.target.value
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
                                    formData.vehiclePriceRate.dailyRate = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>

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
                                    formData.freeMileage.dailyMileage = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>

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
                                    formData.freeMileage.monthlyMileage = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>

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
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 16px'}}>
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
                                        style={{margin: '10px 12px 16px 5px'}}/>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid>
                    <TableContainer component={Paper} style={{height: '45vh',width:'81vw',backgroundColor:'#eeeff1'}}>
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
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.updateCustomer(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteCustomer(row)
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
            </>
        )
    }
}




export default withStyles(styleSheet)(CustomerManage)