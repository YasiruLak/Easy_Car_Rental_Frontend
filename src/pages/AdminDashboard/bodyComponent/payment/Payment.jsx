import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../driverManage/styles";
import {Grid} from "@material-ui/core";


class Payment extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props
        return (
            <Grid style={{width:'82.3vw', height:'100vh',backgroundColor:'red'}}>

            </Grid>
        )
    }
}

export default(Payment)