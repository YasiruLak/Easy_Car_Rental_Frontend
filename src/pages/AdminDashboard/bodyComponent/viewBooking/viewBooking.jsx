import {Component} from "react";
import {Grid, IconButton, withStyles} from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {styleSheet} from "./styles";
import {Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import GDSEButton from "../../../../components/common/Button";

class ViewBooking extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <>
                <Grid className={classes.viewBooking_container}>
                    <Grid item lg={12} xs={12} sm={12} md={12}
                          style={{
                              alignItems: 'center',
                              display: 'flex',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              backgroundColor: '#0984e3'
                          }}>
                        <Typography variant="h4" style={{margin: '10px 0 20px 0', color: 'white',}}>Vehicle
                            Manage</Typography>
                    </Grid>
                    <ValidatorForm ref="form" className="pt-2">
                        <Grid item xs={6} sm={12} md={12} lg={12} style={{margin: '12px 12px 14px 16px'}}>
                            <TextValidator
                                item xs={12}
                                id="outlinedbasic"
                                placeholder="V00-001"
                                variant="outlined"
                                size="small"
                                style={{width: '100%'}}
                                label="Vehicle Id"
                                // value={this.state.formData.vehicleId}
                                // onChange={(e) => {
                                //     let formData = this.state.formData
                                //     formData.vehicleId = e.target.value
                                //     this.setState({formData})
                                // }}
                                validators={['required']}
                            />
                        </Grid>
                            <GDSEButton type="submit" size="medium"
                                        variant="contained"
                                        style={{margin: '10px 12px 16px 5px'}}/>

                    </ValidatorForm>
                    <Grid>
                        <TableContainer component={Paper}
                                        style={{height: '60vh', width: '81vw', backgroundColor: '#eeeff1'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Booking Id</TableCell>
                                        <TableCell align="left">Customer Id</TableCell>
                                        <TableCell align="left">Pickup Date</TableCell>
                                        <TableCell align="left">Pickup Time</TableCell>
                                        <TableCell align="left">Return Date</TableCell>
                                        <TableCell align="left">Driver Requst</TableCell>
                                        <TableCell align="left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        //this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">{}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            //this.updateVehicle(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            //this.deleteVehicle(row.vehicleId)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error"/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                        //))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(ViewBooking)