import {Component} from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Car2 from "../../assets/images/Car2.png";
import SignInService from "../../service/SignInService";
import GDSESnackBar from "../../components/common/SnackBar";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {

            link: '',

            formData: {
                userName: '',
                password: '',

            },
            alert: false,
            message: '',
            severity: '',
        }
    }

    Login = async () => {
        let formData = this.state.formData;

        let params = {
            userName: formData.userName,
            password: formData.password,
        }

        let res = await SignInService.fetchUser(params);
        if (res.status === 200) {

            localStorage.setItem("userName", res.data.data.userName);

            if (res.data.data.role == 'ADMIN') {
                this.setState({
                    link: '/adminDashBoard'
                });
            }

            if (res.data.data.role == 'DRIVER') {
                this.setState({
                    link: '/driverDashBoard'
                });
            }

            if (res.data.data.role == 'CUSTOMER') {

                localStorage.setItem("pickUpDate", "");
                localStorage.setItem("returnDate", "");
                this.setState({

                    link: '/customerDashBoard'
                });
            }

            //this.clearFields();

        } else {
            this.setState({
                alert: true,
                //message: res.data.data,
                severity: 'error'
            });
        }

    };

    render() {
        const {classes} = this.props
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.Login}>
                    <Grid className={classes.container}>
                        <Grid className={classes.signIn_container}>
                            <Grid className={classes.signIn_container_1}>
                                <img src={Car2} alt="" style={{width: '55vw', height: '100vh', marginLeft: '10px'}}/>
                            </Grid>
                            <Grid className={classes.signIn_container_2}>
                                <Grid className={classes.circle}>
                                    <Grid className={classes.logo}>

                                    </Grid>
                                </Grid>
                                <Grid className={classes.textField}>
                                    <Grid className={classes.userName}>
                                        <TextValidator
                                            required
                                            id="outlined-required"
                                            label="User Name"
                                            defaultValue=""
                                            size="small"
                                            value={this.state.formData.userName}
                                            onChange={(e) => {
                                                let formData = this.state.formData
                                                formData.userName = e.target.value
                                                this.setState({formData})
                                            }}
                                        />
                                    </Grid>
                                    <Grid className={classes.passwordField}>
                                        <Grid>
                                            <TextValidator
                                                id="outlined-password-input"
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                                size="small"
                                                value={this.state.formData.password}
                                                onChange={(e) => {
                                                    let formData = this.state.formData
                                                    formData.password = e.target.value
                                                    this.setState({formData})
                                                }}
                                            />
                                            <Typography variant="subtitle2" gutterBottom component="div"
                                                        style={{marginTop: '4px', marginLeft: '4px'}}>
                                                Forgot <span style={{color: 'blue'}}>Password</span>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid className={classes.loginButton}>
                                        <Grid>
                                            <Button type="submit" variant="contained" style={{width: '200px', marginLeft: '30px'}}
                                                    href={this.state.link}>
                                            {/*    onClick={() => {*/}
                                            {/*    this.Login;*/}
                                            {/*}}*/}
                                                LogIn</Button>
                                            <Typography variant="subtitle2" gutterBottom component="div"
                                                        style={{marginTop: '6px'}}>
                                                Don't have and account? <span
                                                style={{color: 'blue'}}> <a href="http://localhost:3000/signup">Sign up for free</a></span>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
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

export default withStyles(styleSheet)(SignIn)