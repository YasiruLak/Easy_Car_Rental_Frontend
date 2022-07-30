import {Component} from "react";
import {Grid, IconButton} from "@material-ui/core";
import {Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import GDSEButton from "../../../../components/common/Button";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


class Payment extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes} = this.props
        return (
            <>
                <Grid style={{width: '82.3vw', height: '100vh'}}>
                    <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                          style={{
                              alignItems: 'center',
                              display: 'flex',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              backgroundColor: '#05c46b',
                              width: '81vw',
                          }}>
                        <Typography variant="h4" style={{margin: '10px 0 20px 0', color: 'white'}}>Payment
                            Manage</Typography>
                    </Grid>
                    <ValidatorForm ref="form" className="pt-2">
                        <Grid>
                            <Grid
                                style={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    //backgroundColor: '#0984e3',
                                    //border:'1px solid red',
                                    width: '80vw',
                                    height: '20vh'
                                }}>
                                <TextValidator
                                    id="outlined-basic"
                                    placeholder="P00-001"
                                    variant="outlined"
                                    size="small"
                                    style={{width: '40vw', marginTop: '70px'}}
                                    label="Payment Id"
                                    // value={this.state.formData.vehicleId}
                                    // onChange={(e) => {
                                    //     let formData = this.state.formData
                                    //     formData.vehicleId = e.target.value
                                    //     this.setState({formData})
                                    // }}
                                    validators={['required']}
                                />
                                <Grid>
                                    <GDSEButton label="Search" type="submit" size="medium"
                                                color="primary" variant="contained"
                                                style={{margin: '70px 16px 0 20px'}}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                    <Grid>
                        <TableContainer component={Paper}
                                        style={{height: '70vh', width: '80vw', backgroundColor: '#eeeff1'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Payment Id</TableCell>
                                        <TableCell align="left">Invoice No</TableCell>
                                        <TableCell align="left">Date</TableCell>
                                        <TableCell align="left">Booking Id</TableCell>
                                        <TableCell align="left">Payment Type</TableCell>
                                        <TableCell align="left">Amount</TableCell>
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

export default (Payment)