import {Component} from "react";
import {Button, Grid, TextField, Typography} from "@mui/material";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Car2 from "../../assets/images/Car2.png";

class SignIn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
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
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="User Name"
                                    defaultValue=""
                                />
                            </Grid>
                            <Grid className={classes.passwordField}>
                                <Grid>
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                    />
                                    <Typography variant="subtitle2" gutterBottom component="div" style={{marginTop:'4px',marginLeft:'4px'}}>
                                        forgot <span style={{color:'blue'}}>Password</span>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid className={classes.loginButton}>
                            <Grid>
                                <Button variant="contained" style={{width:'200px', marginLeft:'30px'}}>LogIn</Button>
                                <Typography variant="subtitle2" gutterBottom component="div" style={{marginTop:'6px'}}>
                                    Don't have and account? <span style={{color:'blue'}}>Sign up for free</span>
                                </Typography>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(SignIn)