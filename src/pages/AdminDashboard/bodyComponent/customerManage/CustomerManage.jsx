import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import {
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip
} from "@material-ui/core";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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