import {Component} from "react";
import {Grid} from "@mui/material";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Car2 from "../../assets/images/Car2.png";

class SignIn extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {classes} = this.props
        return(
            <Grid className={classes.container}>
                <Grid className={classes.signIn_container}>
                    <Grid className={classes.signIn_container_1}>
                        <img src={Car2} alt="" style={{width:'55vw',height:'100vh',marginLeft:'10px'}}/>
                    </Grid>
                    <Grid className={classes.signIn_container_2}>
                        <Grid></Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(SignIn)