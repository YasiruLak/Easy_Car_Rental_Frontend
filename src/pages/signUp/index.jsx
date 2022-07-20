import {Component} from "react";
import {Button, Grid, IconButton, TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {PhotoCamera} from "@mui/icons-material";
import homeImg from "../../assets/images/homeImg.png";


class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            formData:{

            }
        }
    }

    render(){
        const {classes} = this.props
        return(
            <Grid className={classes.container}>
                <Grid className={classes.signUpFormImg}>
                    <img src={homeImg} alt="" style={{width: '650px', height: '220px', marginLeft: '10px'}}/>
                </Grid>
                <Grid className={classes.signUpForm}>
                    <Grid className={classes.leftForm}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" style={{padding:'10px'}}/>
                        <TextField id="outlined-basic" label="Address" variant="outlined" style={{padding:'10px'}}/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{padding:'10px'}}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" style={{padding:'10px'}}/>
                        <TextField id="outlined-basic" label="Nic No" variant="outlined" style={{padding:'10px',marginLeft:'40px'}}/>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                        <TextField id="outlined-basic" label="Lision No" variant="outlined" style={{padding:'10px',marginLeft:'40px'}}/>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Grid>
                    <Grid className={classes.rightForm}>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{padding:'10px'}}/>
                        <TextField id="outlined-basic" label="Contact No" variant="outlined" style={{padding:'10px'}}/>
                        <TextField id="outlined-basic" label="User Name" variant="outlined" style={{padding:'10px'}}/>
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{padding:'10px'}}/>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{padding:'10px'}}/>
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