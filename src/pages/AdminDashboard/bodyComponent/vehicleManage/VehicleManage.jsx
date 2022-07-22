import {Component} from "react";
import {Autocomplete, Grid, TextField, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import GDSEButton from "../../../../components/common/Button";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import VehicleService from "../../../../service/VehicleService";

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
        this.state ={
            formData:{
                vehicleId:'',
                registrationNo:'',
                vehicleBrand:'',
                vehicleType:'',
                fuelType:'',
                numberOfPassenger:'',
                vehicleColour:'',
                transmissionType:'',
                refundableDamagedFee:'',
                vehicleMileage:'',
                vehiclePriceRate:'',
                freeMileage:'',
                lastServiceMileage:'',
                vehicleAvailability:'',
            }
        }
    }

    submitVehicle = async () =>{
        let formData = this.state.formData;
        let res = await VehicleService.postVehicle(formData)
        console.log(res)
    }

    render() {
        const {classes} = this.props
        return (
            <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitVehicle}>
                <Grid container className="pt-2" spacing={1} style={{marginLeft:'8px'}}>
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
                                this.setState({ formData })
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
                                this.setState({ formData })
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
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
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
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
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
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
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
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
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
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
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
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
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
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
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
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
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
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
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
                            // value={}
                            // onChange={(e) => {
                            //     let formData = this.state.formData
                            //     formData.id = e.target.value
                            //     this.setState({ formData })
                            // }}
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
                            renderInput={(params) => <TextField {...params} label="Availability"/>}
                        />
                    </Grid>
                    <Grid container style={{margin: '20px 40px 0 0'}} direction="row" justifyContent="flex-end"
                          alignItems="center">
                        <GDSEButton label="save" type="submit" size="medium" color="primary" variant="outlined"
                                    style={{margin: '10px 12px 5px 5px'}}/>
                    </Grid>
                </Grid>
            </ValidatorForm>
        );
    }
}

export default withStyles(styleSheet)(VehicleManage)