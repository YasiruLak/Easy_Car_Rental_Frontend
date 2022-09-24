import {Component} from "react";
import {Button, Grid, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import GDSESnackBar from "../../../../components/common/SnackBar";
import CustomerManageService from "../../../../service/CustomerManageService";
import DriverManageService from "../../../../service/DriverManageService";


class DriverProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
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
        }
    }

    loadData = async () => {

        let params = {
            userName: localStorage.getItem("userName")
        }

        let res = await DriverManageService.fetchDriverbyUserName(params);

        if (res.status === 200) {
            this.setState({
                // data: res.data.data,
                formData: {
                    id: res.data.data.id,
                    nic: res.data.data.nic,
                    name: {
                        firstName: res.data.data.name.firstName,
                        lastName: res.data.data.name.lastName,
                    },
                    address: res.data.data.address,
                    drivingLicenseNo: res.data.data.drivingLicenseNo,
                    email: res.data.data.email,
                    contactNo: res.data.data.contactNo,
                    user: {
                        userId: res.data.data.user.userId,
                        userName: res.data.data.user.userName,
                        password: res.data.data.user.password,
                        role: res.data.data.user.role,
                    }
                },
            });
        }
        this.setState({
            // data: res.data.data
        });

        // this.exampleForMap()
    };

    updateDriver = (data) => {
        console.log(data)

        this.setState({
            formData: {
                id: data.id,
                nic: data.nic,
                name: {
                    firstName:data.name.firstName,
                    lastName: data.name.lastName
                },
                address: data.address,
                drivingLicenseNo: data.drivingLicenseNo,
                email: data.email,
                contactNo: data.contactNo,
                driverAvailability: data.driverAvailability,
                user: {
                    userId:data.user.userId,
                    userName:data.user.userName,
                    password: data.user.password,
                    role:data.user.role,
                }

            }
        });
    };

    componentDidMount() {
        this.loadData();
    };

    submitDriver = async () => {
        let formData = this.state.formData;

        let res = await DriverManageService.putDriver(formData);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success',
                btnLabel: 'update',
                btnColor: 'secondary'
            });
            await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };

    render() {
        const {classes} = this.props
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitDriver}>
                    <Grid className={classes.container}>
                        <Grid className={classes.header_name}>
                            <Grid>
                                <Typography variant="h4" gutterBottom component="div"
                                            style={{color: '#2d98da', fontWeight: '600', marginLeft: '20px'}}>
                                    Driver Profile
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div" style={{color: '#2d98da'}}>
                                    Edit, Update and Enjoy your Details
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.profile_content}>
                            <Grid className={classes.leftForm}>
                                <TextValidator id="outlined-basic" disabled label="Driver Id" variant="outlined"
                                               size="small" value={this.state.formData.id}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.id = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                                <TextValidator id="outlined-basic" label="Last Name" variant="outlined" size="small"
                                               value={this.state.formData.name.lastName}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.name.lastName = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                                <TextValidator id="outlined-basic" disabled label="Nic No" variant="outlined"
                                               size="small" value={this.state.formData.nic}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.nic = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                                <TextValidator id="outlined-basic" label="Email" variant="outlined" size="small"
                                               value={this.state.formData.email}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.email = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                                <TextValidator id="outlined-basic" disabled label="User Id" variant="outlined"
                                               size="small" value={this.state.formData.user.userId}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.user.userId = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                                <TextValidator id="outlined-basic" label="User Name" variant="outlined" size="small"
                                               value={this.state.formData.user.userName}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.user.userName = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                            </Grid>
                            <Grid className={classes.rightForm}>
                                <TextValidator id="outlined-basic" label="First Name" variant="outlined" size="small"
                                               value={this.state.formData.name.firstName}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.name.firstName = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                                <TextValidator id="outlined-basic" disabled label="Lision No" variant="outlined"
                                               size="small" value={this.state.formData.drivingLicenseNo}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.drivingLicenseNo = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                                <TextValidator id="outlined-basic" label="Address" variant="outlined" size="small"
                                               value={this.state.formData.address}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.address = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                                <TextValidator id="outlined-basic" label="Contact No" variant="outlined" size="small"
                                               value={this.state.formData.contactNo}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.contactNo = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                                <TextValidator id="outlined-basic" disabled label="Role" variant="outlined" size="small"
                                               value={this.state.formData.user.role}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.user.role = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />
                                <TextValidator id="outlined-basic" type="password" label="Password" variant="outlined"
                                               size="small" value={this.state.formData.user.password}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.user.password = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                />

                            </Grid>
                        </Grid>
                        <Grid className={classes.profile_footer}>
                            <Grid>
                                <Button variant="contained" size="large" type="submit">
                                    Update Profile
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </ValidatorForm>
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

export default withStyles(styleSheet)(DriverProfile)