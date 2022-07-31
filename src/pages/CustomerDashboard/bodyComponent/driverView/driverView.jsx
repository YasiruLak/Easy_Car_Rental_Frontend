import {Component} from "react";
import {Grid, withStyles} from "@material-ui/core";

class DriverView extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(
            <>
                <Grid className={classes.vehicle_view}>

                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(DriverView)