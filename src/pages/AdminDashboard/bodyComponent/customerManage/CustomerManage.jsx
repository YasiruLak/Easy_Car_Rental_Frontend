import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import {Grid} from "@material-ui/core";

class CustomerManage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(
            <Grid className={classes.customer_Manage_container}>

            </Grid>
        )
    }
}




export default withStyles(styleSheet)(CustomerManage)