import {Component} from "react";
import {Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {PhotoCamera} from "@mui/icons-material";
import homeImg from "../../assets/images/homeImg.png";


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {}
        }
    }

    render() {
        const {classes} = this.props
        return (
            <Grid className={classes.container}>
                <Grid className={classes.signUpFormImg}>
                    <img src={homeImg} alt="" style={{width: '650px', height: '220px', marginLeft: '10px'}}/>
                </Grid>

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
                        </Grid>
                    </Grid>
                    <Grid className={classes.leftForm}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Address" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Nic No" variant="outlined" size="small"
                                   style={{marginLeft: '40px'}}/>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file"/>
                            <PhotoCamera/>
                        </IconButton>
                        <TextField id="outlined-basic" label="Lision No" variant="outlined" size="small"
                                   style={{marginLeft: '40px'}}/>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file"/>
                            <PhotoCamera/>
                        </IconButton>
                    </Grid>
                    <Grid className={classes.rightForm}>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Contact No" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="User Name" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"/>
                        <Button variant="contained" size="large">
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(SignUp)