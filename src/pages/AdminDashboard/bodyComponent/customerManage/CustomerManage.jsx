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
import CustomerManageService from "../../../../service/CustomerManageService";
import VehicleService from "../../../../service/VehicleService";

class CustomerManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
                    userId:'',
                    userName:'',
                    password: '',
                    role:'',
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

    deleteCustomer = async (id) => {
        let params = {
            id: id
        }
        let res = await CustomerManageService.deleteCustomer(params);

        if (res.status === 200) {
            let res = await CustomerManageService.deleteCustomerImages(id);
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
            await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    updateCustomer = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
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

    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)   // access element one by one
        })
    };

    loadData = async () => {
        let res = await CustomerManageService.fetchCustomer();

        // if (res.status === 200 || res.status === 404) {
            this.setState({
                data: res.data.data
            });
        //}
        // this.setState({
        //     data: res.data.data
        // });

        this.exampleForMap()

    };

    componentDidMount() {
        this.loadData();
    };

    clearFields = () => {
        this.setState({
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
                    userId:'',
                    userName:'',
                    password: '',
                    role:'',
                }
            }
        });
    };

    submitCustomer = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "update") {
            let res = await CustomerManageService.putCustomer(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'update',
                    btnColor: 'secondary'
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



    render() {
        const {classes} = this.props
        return(
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitCustomer}>
                    <Grid container className="pt-2" spacing={1} style={{marginLeft: '200px',width:'85vw'}}>
                        <Grid item lg={12} xs={12} sm={12} md={12}
                              style={{
                                  alignItems: 'center',
                                  display: 'flex',
                                  flexWrap: 'wrap',
                                  justifyContent: 'center',
                                  backgroundColor: '#0fb9b1',
                                  width:'84vw',
                              }}>
                            <Typography variant="h4" style={{margin: '10px 0 10px 0', color: 'white',}}>Customer
                                Manage</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 14px 34px'}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="D00-001"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Customer Id"
                                value={this.state.formData.id}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.id = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 0 12px'}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="981631161V"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="NIC No"
                                value={this.state.formData.nic}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.nic = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 0 12px'}}>

                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Yasiru"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="First name"
                                value={this.state.formData.name.firstName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.name.firstName = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 0 12px'}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Dahanayaka"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Last name"
                                value={this.state.formData.name.lastName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.name.lastName = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '12px 12px 0 12px'}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="Galle"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Address"
                                value={this.state.formData.address}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.address = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 14px 34px'}}>

                            <TextValidator
                                id="outlinedbasic"
                                variant="outlined"
                                size="small"
                                label="License No"
                                style={{width: '100%'}}
                                placeholder="5678G"
                                value={this.state.formData.drivingLicenseNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.drivingLicenseNo = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="yasirudahanayaka19@gmail.com"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Email"
                                value={this.state.formData.email}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.email = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>
                            <TextValidator
                                id="outlinedbasic"
                                placeholder="076-8383493"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Contact no"
                                value={this.state.formData.contactNo}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.contactNo = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>
                            <TextValidator
                                disabled
                                id="outlinedbasic"
                                placeholder=""
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="User Id"
                                value={this.state.formData.user.userId}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.user.userId = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>
                            <TextValidator
                                disabled
                                id="outlinedbasic"
                                placeholder=""
                                //type="password"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="User Name"
                                value={this.state.formData.user.userName}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.user.userName = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 34px'}}>
                            <TextValidator
                                disabled
                                id="outlinedbasic"
                                placeholder=""
                                variant="outlined"
                                size="small"
                                type="password"
                                style={{width: '100%'}}
                                label="Password"
                                value={this.state.formData.user.password}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.user.password = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 10px 12px'}}>
                            <TextValidator
                                disabled
                                id="outlinedbasic"
                                placeholder=""
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Role"
                                value={this.state.formData.user.role}
                                onChange={(e) => {
                                    let formData = this.state.formData
                                    formData.user.role = e.target.value
                                    this.setState({formData})
                                }}
                                validators={['required']}
                            />
                        </Grid>
                        <Grid container style={{margin: '20px 40px 10px 0'}} direction="row" justifyContent="flex-end"
                              alignItems="center">
                            <GDSEButton label={this.state.btnLabel} type="submit" size="medium" color={this.state.btnColor} variant="contained"
                                        style={{margin: '10px 12px 16px 5px'}}/>
                            <GDSEButton label="cancel" size="medium" color="error" variant="contained"
                                        style={{margin: '10px 12px 16px 5px'}}/>
                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid>
                    <TableContainer component={Paper} style={{width:'82vw',backgroundColor:'#eeeff1', marginLeft:'17vw'}}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Customer Id</TableCell>
                                    <TableCell align="left">NIC No</TableCell>
                                    <TableCell align="left">First Name</TableCell>
                                    <TableCell align="left">Last Name</TableCell>
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
                                                            this.updateCustomer(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteCustomer(row.id)
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