import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import {Grid} from "@material-ui/core";

class DriverManage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(
            <Grid className={classes.driver_Manage_container}>

            </Grid>
        )
    }
}




export default withStyles(styleSheet)(DriverManage)