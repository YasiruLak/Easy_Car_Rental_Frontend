import {Component} from "react";
import {Autocomplete, Grid, IconButton, TextField, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import GDSEButton from "../../../../components/common/Button";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import VehicleService from "../../../../service/VehicleService";
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
import GDSESnackBar from "../../../../components/common/SnackBar";
import Button from "@mui/material/Button";

class VehicleManage extends Component {
    constructor(props) {
        super(props);

        this.state = {

            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,

            frontView: null,
            backView: null,
            sideView: null,
            interiorView: null,

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
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary',

            fuelTypes: [
                {
                    type: 'DIESEL'
                },
                {
                    type: 'PETROL'
                }
            ],

            vehicleTypes: [
                {
                    type: 'GENERAL'
                },
                {
                    type: 'LUXURY'
                },
                {
                    type: 'PREMIUM'
                }
            ],

            transmissionTypes: [
                {
                    type: 'AUTO'
                },
                {
                    type: 'MANUAL'
                }
            ],

            availabilityTypes: [
                {
                    type: 'AVAILABLE'
                },
                {
                    type: 'NOT_AVAILABLE'
                }
            ],
        }
    }

    addCarImage=async (vehicleId) =>{

        var bodyFormData = new FormData();
        bodyFormData.append('param', this.state.frontImage);
        bodyFormData.append('param', this.state.backImage);
        bodyFormData.append('param', this.state.sideImage);
        bodyFormData.append('param', this.state.interiorImage);

        let res = await VehicleService.addCarImage(bodyFormData,vehicleId);
        if (res.data.code===200){
            this.setState({
                alert: true,
                message: "Saved",
                severity: 'success'
            });
        }else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    }

    deleteVehicle = async (vehicleId) => {
        let params = {
            vehicleId: vehicleId

        }
        let res = await VehicleService.deleteVehicle(params);

        if (res.status === 200) {
            let res =await VehicleService.deleteCarImages(vehicleId);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: "Deleted",
                    severity: 'success'
                });
            }
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)
        })
    };

    loadData = async () => {
        let res = await VehicleService.fetchVehicle();

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
        this.loadData();
    }

    submitVehicle = async () => {
        let formData = this.state.formData;


        if (this.state.btnLabel === "save") {
            let res = await VehicleService.postVehicle(formData);
            this.addCarImage(formData.vehicleId)


            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: "Saved",
                    severity: 'success'
                });
                this.clearFields();
                await this.loadData();

            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await VehicleService.putVehicle(formData);
            if (res.status === 200) {

                let front=this.state.frontImage;
                let back=this.state.backImage;
                let side=this.state.sideImage;
                let interior=this.state.interiorImage;
                let list=[front,back,side,interior]
                let viewList=["Front","Back","Side","Interior"]

                for (var i=0; i<list.length; i++){
                    if (list[i] != null){
                        let formData = new FormData();
                        formData.append('carImage',list[i]);
                        await this.updateCarImage(formData, formData.vehicleId, viewList[i]);
                    }
                }

                // this.setState({
                //     alert: true,
                //     message: "Image Updated",
                //     severity: 'error'
                // });

                this.setState({
                    alert: true,
                    message: "Updated",
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                await this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };

    updateCarImage=async (data,vehicleId,view) =>{
        let response =await VehicleService.updateCarImage(data,vehicleId,view);
        if (response.status!==200){
            this.setState({
                alert: true,
                message: "Car Image Not Updated",
                severity: 'error'
            });
        }
    }

    updateVehicle = (data) => {

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
                    dailyRate: data.vehiclePriceRate.dailyRate,
                    monthlyRate: data.vehiclePriceRate.monthlyRate
                },
                freeMileage: {
                    dailyMileage: data.freeMileage.dailyMileage,
                    monthlyMileage: data.freeMileage.monthlyMileage
                },
                lastServiceMileage: data.lastServiceMileage,
                extraKmPer:data.extraKmPer,
                vehicleAvailability: data.vehicleAvailability
            }
        });
    };

    clearFields = () => {
        this.setState({

            frontImage: null,
            backImage : null,
            sideImage : null,
            interiorImage : null,

            frontView : null,
            backView : null,
            sideView : null,
            interiorView : null,

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
                                onChange={(e, value, r) => {

                                    let formData = this.state.formData
                                    formData.fuelType = value.type
                                    this.setState({formData})

                                }}
                                getOptionLabel={
                                    (option) => option.type
                                }
                                id="controllable-states-demo"
                                options={this.state.fuelTypes}
                                size="small"
                                renderInput={(params) => <TextField {...params} label="Fuel Type"/>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 0 12px'}}>
                            <Autocomplete
                                onChange={(e, value, r) => {

                                    let formData = this.state.formData
                                    formData.vehicleType = value.type
                                    this.setState({formData})

                                }}
                                getOptionLabel={
                                    (option) => option.type
                                }
                                id="controllable-states-demo"
                                options={this.state.vehicleTypes}
                                size="small"
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
                                onChange={(e, value, r) => {

                                    let formData = this.state.formData
                                    formData.transmissionType = value.type
                                    this.setState({formData})

                                }}
                                getOptionLabel={
                                    (option) => option.type
                                }
                                // value={this.state.formData.transmissionType}
                                size="small"
                                id="controllable-states-demo"
                                options={this.state.transmissionTypes}
                                renderInput={(params) => <TextField {...params} label="Transmission"/>}
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

                            <TextValidator
                                id="outlinedbasic"
                                placeholder="32.00"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Extra Km Price"
                                value={this.state.formData.extraKmPer}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.extraKmPer = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>
                            <Autocomplete
                                // style={{padding: '10px', width: '230px'}}
                                onChange={(e, value, r) => {

                                    let formData = this.state.formData
                                    formData.vehicleAvailability = value.type
                                    this.setState({formData})

                                }}
                                getOptionLabel={
                                    (option) => option.type
                                }
                                size="small"
                                id="controllable-states-demo"
                                options={this.state.availabilityTypes}
                                // sx={{width: 300}}
                                renderInput={(params) => <TextField {...params} label="Availability"/>}
                            />
                        </Grid>
                        <Grid item className={classes.imageContainer}>

                            <div className={classes.imageDiv} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '140px',
                                //border: '1px solid blue',
                                backgroundImage:"url(" +this.state.frontView+ ")",
                                backgroundSize: 'cover'
                            }}/>


                            <div className={classes.imageDiv} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '140px',
                                //border: '1px solid blue',
                                backgroundImage:"url(" +this.state.backView+ ")",
                                backgroundSize: 'cover'
                            }}/>


                            <div className={classes.imageDiv} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '140px',
                                //border: '1px solid blue',
                                backgroundImage:"url(" +this.state.sideView+ ")",
                                backgroundSize: 'cover'
                            }}/>


                            <div className={classes.imageDiv} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '140px',
                                //border: '1px solid blue',
                                backgroundImage:"url(" +this.state.interiorView+ ")",
                                backgroundSize: 'cover'
                            }}/>


                        </Grid>

                        <Grid item className={classes.uploadImageButton}>
                            <div><input

                                style={{display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file01"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    this.setState({
                                        frontImage: e.target.files[0],
                                        frontView : URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file01">
                                    <Button variant="outlined" color="primary" size="medium" component="span">
                                        Front
                                    </Button>
                                </label>

                            </div>
                            <div><input

                                style={{display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file02"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    this.setState({
                                        backImage: e.target.files[0],
                                        backView : URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file02">
                                    <Button variant="outlined" color="primary" size="medium" component="span">
                                        Back
                                    </Button>
                                </label>

                            </div>
                            <div><input

                                style={{display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file03"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    this.setState({
                                        sideImage: e.target.files[0],
                                        sideView : URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file03">
                                    <Button variant="outlined" color="primary" size="medium" component="span">
                                        Side
                                    </Button>
                                </label>

                            </div>
                            <div><input

                                style={{display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file04"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    this.setState({
                                        interiorImage: e.target.files[0],
                                        interiorView : URL.createObjectURL(e.target.files[0])
                                    })
                                }}
                            />
                                <label htmlFor="contained-button-file04">
                                    <Button variant="outlined" color="primary" size="medium" component="span">
                                        Interior
                                    </Button>
                                </label>

                            </div>

                        </Grid>
                        <Grid container style={{margin: '20px 40px 0 0'}} direction="row" justifyContent="flex-end"
                              alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="medium"
                                        color={this.state.btnColor} variant="contained"
                                        style={{margin: '10px 12px 16px 5px'}}/>
                            <GDSEButton label="cancel" size="medium" color="error" variant="contained"
                                        style={{margin: '10px 12px 16px 5px'}}/>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid>
                    <TableContainer component={Paper}
                                    style={{height: '45vh', width: '81vw', backgroundColor: '#eeeff1'}}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="left">Reg_No</TableCell>
                                    <TableCell align="left">Brand</TableCell>
                                    <TableCell align="left">Passengers</TableCell>
                                    <TableCell align="left">Color</TableCell>
                                    <TableCell align="left">Vehicle_Type</TableCell>
                                    <TableCell align="left">Fuel</TableCell>
                                    <TableCell align="left">Transmission</TableCell>
                                    <TableCell align="left">Daily_Mileage</TableCell>
                                    <TableCell align="left">Monthly_Mileage</TableCell>
                                    <TableCell align="left">Daily_Rate</TableCell>
                                    <TableCell align="left">Monthly_Rate</TableCell>
                                    <TableCell align="left">Availability</TableCell>
                                    <TableCell align="left">Damage_Fee</TableCell>
                                    <TableCell align="left">LastService_Mileage</TableCell>
                                    <TableCell align="left">Service_Mileage</TableCell>
                                    <TableCell align="left">Extra_Km_fee</TableCell>
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
                                            <TableCell align="left">{row.extraKmPer}</TableCell>
                                            <TableCell align="left">{row.vehicleMileage}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.updateVehicle(row);
                                                            //this.updateCarImage();
                                                        }}
                                                    >
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteVehicle(row.vehicleId)
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
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
        );
    }
}

export default withStyles(styleSheet)(VehicleManage)