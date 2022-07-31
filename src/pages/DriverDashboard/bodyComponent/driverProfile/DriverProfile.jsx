import {Component} from "react";
import {Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";



class DriverProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(
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
                        <TextField id="outlined-basic" label="First Name" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Address" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Nic No" variant="outlined" size="small"/>
                    </Grid>
                    <Grid className={classes.rightForm}>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Contact No" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="User Name" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" size="small"/>
                        <TextField id="outlined-basic" label="Lision No" variant="outlined" size="small"/>

                    </Grid>
                </Grid>
                <Grid className={classes.profile_footer}>
                    <Grid>
                        <Button variant="contained" size="large">
                            Update Profile
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

export default withStyles(styleSheet)(DriverProfile)