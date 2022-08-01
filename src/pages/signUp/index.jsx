import {Component} from "react";
import {Grid, IconButton, TextField, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {PhotoCamera} from "@mui/icons-material";
import homeImg from "../../assets/images/homeImg.png";
import {ValidatorForm} from "react-material-ui-form-validator";
import SignUpService from "../../service/SignUpService";
import GDSESnackBar from "../../components/common/SnackBar";
import GDSEButton from "../../components/common/Button";
import Button from "@mui/material/Button";
import VehicleService from "../../service/VehicleService";

// const role = [
//     {label: 'DRIVER'},
//     {label: 'CUSTOMER'},
// ];

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {

            licenceImage: null,
            nicImage:null,

            licenceView:null,
            nicView:null,

            formData: {
                id: '',
                nic: '',
                drivingLicenseNo: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
                address: '',
                email: '',
                contactNo: '',
                user: {
                    userName: '',
                    password: '',
                    role: ''
                }
            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Register',
            btnColor: 'primary'
        }
    }


    clearFields = () => {
        this.setState({

            licenceImage: null,
            nicImage:null,

            licenceView:null,
            nicView:null,

            formData: {
                id: '',
                nic: '',
                drivingLicenseNo: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
                address: '',
                email: '',
                contactNo: '',
                user: {
                    userName: '',
                    password: '',
                    role: ''
                }
            }
        });
    };

    addRegisterUserImage=async (id) =>{

        var bodyFormData = new FormData();
        bodyFormData.append('param', this.state.licenceImage);
        bodyFormData.append('param', this.state.nicImage);

        let res = await SignUpService.addRegisterUserImage(bodyFormData,id);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
        }else {
            this.setState({
                alert: true,
                message: res.message,
                severity: 'error'
            });
        }

    }


    submitSignUp = async () => {
        let formData = this.state.formData;
        if (formData.user.role === 'CUSTOMER') {
            let formData = this.state.formData;

            let res = await SignUpService.postSignUpCustomer(formData);
            //this.addRegisterUserImage(formData.id);

            if (res.status === 201) {
                this.addRegisterUserImage(formData.id);
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
            } else {
                this.setState({
                    alert: true,
                    message: res.message,
                    severity: 'error'
                });
            }
        } else if (formData.user.role === 'DRIVER') {
            let formData = this.state.formData;

            let res = await SignUpService.postSignUpDriver(formData);
            //this.addRegisterUserImage(formData.id);

            if (res.status === 201) {
                this.addRegisterUserImage(formData.id);
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            this.setState({
                alert: true,
                message: 'please select the type',
                severity: 'error'
            });
        }
    };

    render() {
        const {classes} = this.props
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitSignUp}>
                    <Grid>
                        {/*<Grid className={classes.signUpFormImg}>*/}
                        {/*    <img src={homeImg} alt="" style={{width: '650px', height: '220px', marginLeft: '10px'}}/>*/}
                        {/*</Grid>*/}
                        <Grid className={classes.signUpForm}>
                            <Grid className={classes.header_content}>
                                <Grid>
                                    <Typography variant="h3" gutterBottom component="div"
                                                style={{color: '#2d98da', fontWeight: '600', marginLeft: '150px'}}>
                                        Sign Up
                                    </Typography>
                                    <Typography variant="h6" gutterBottom component="div" style={{color: '#2d98da'}}>
                                        Sign in Your Best Journey with Easy Car Rental Service
                                    </Typography>
                                    <Grid className={classes.signUp_Upload}>
                                        <div className={classes.signUp_imageDiv} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '140px',
                                            width: '240px',
                                            border: '1px solid blue',
                                            backgroundImage:"url(" +this.state.licenceView+ ")",
                                            backgroundSize: 'cover',
                                            margin:'20px 20px 0 0'
                                        }}/>
                                        <div className={classes.signUp_imageDiv} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: '140px',
                                            width: '240px',
                                            border: '1px solid blue',
                                            backgroundImage:"url(" +this.state.nicView+ ")",
                                            backgroundSize: 'cover',
                                            margin:'20px 0 0 20px'
                                        }}/>
                                    </Grid>
                                    <Grid className={classes.upload_button}>
                                        <div style={{margin:'0 0 0 10px'}}><input
                                            style={{display: 'none'}}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file01"
                                            multiple
                                            type="file"
                                            onChange={(e) => {
                                                this.setState({
                                                    licenceImage: e.target.files[0],
                                                    licenceView : URL.createObjectURL(e.target.files[0])
                                                })
                                            }}
                                        />
                                            <label htmlFor="contained-button-file01">
                                                <Button variant="outlined" color="primary" size="medium" component="span">
                                                   Nic Upload
                                                </Button>
                                            </label>

                                        </div>
                                        <div style={{margin:'0 0 0 80px'}}><input
                                            style={{display: 'none'}}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file02"
                                            multiple
                                            type="file"
                                            onChange={(e) => {
                                                this.setState({
                                                    nicImage: e.target.files[0],
                                                    nicView : URL.createObjectURL(e.target.files[0])
                                                })
                                            }}
                                        />
                                            <label htmlFor="contained-button-file02">
                                                <Button variant="outlined" color="primary" size="medium" component="span">
                                                    License Upload
                                                </Button>
                                            </label>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className={classes.leftForm}>
                                <TextField id="outlined-basic" label="First Name" variant="outlined" size="small"
                                           value={this.state.formData.name.firstName}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.name.firstName = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />
                                <TextField id="outlined-basic" label="Address" variant="outlined" size="small"
                                           value={this.state.formData.address}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.address = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />
                                <TextField id="outlined-basic" label="Email" variant="outlined" size="small"
                                           value={this.state.formData.email}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.email = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />
                                <TextField id="outlined-basic" label="Password" variant="outlined" size="small"
                                           value={this.state.formData.user.password}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.user.password = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />
                                <TextField id="outlined-basic" label="Nic No" variant="outlined" size="small"
                                           //style={{marginLeft: '40px'}}
                                           value={this.state.formData.nic}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.nic = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />

                                <TextField id="outlined-basic" label="Lision No" variant="outlined" size="small"
                                           //style={{marginLeft: '40px'}}
                                           value={this.state.formData.drivingLicenseNo}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.drivingLicenseNo = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />

                            </Grid>
                            <Grid className={classes.rightForm}>
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small"
                                           value={this.state.formData.name.lastName}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.name.lastName = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />
                                <TextField id="outlined-basic" label="Contact No" variant="outlined" size="small"
                                           value={this.state.formData.contactNo}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.contactNo = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />
                                <TextField id="outlined-basic" label="User Name" variant="outlined" size="small"
                                           value={this.state.formData.user.userName}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.user.userName = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />
                                <TextField id="outlined-basic" label="Register Id" variant="outlined"
                                           size="small"
                                           value={this.state.formData.id}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.id = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />
                                <TextField id="outlined-basic" label="Type" variant="outlined" size="small"
                                           value={this.state.formData.user.role}
                                           onChange={(e) => {
                                               let formData = this.state.formData
                                               formData.user.role = e.target.value
                                               this.setState({formData})
                                           }}
                                           validators={['required']}
                                />

                                <GDSEButton variant="contained" size="large" type="submit" label={this.state.btnLabel}
                                            color={this.state.btnColor}>
                                    Register
                                </GDSEButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </ValidatorForm>
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
        )
    }
}

export default withStyles(styleSheet)(SignUp)