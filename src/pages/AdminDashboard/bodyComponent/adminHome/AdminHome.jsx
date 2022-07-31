import {Component} from "react";
import {Card, CardContent, Grid, IconButton, Typography} from "@material-ui/core";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableContainer from "@mui/material/TableContainer";

class AdminHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <>
                <Grid className={classes.Home_container}>
                    <Grid className={classes.Admin_Home_Card}>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Vehicle
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        01
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Vehicle
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        01
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Vehicle
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        01
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center',

                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Vehicle
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        01
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid className={classes.Admin_Home_Card}>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Vehicle
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        01
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Vehicle
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        01
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Vehicle
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        01
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            direction="column"
                            justifyContent="center"
                            alignItems="center">
                            <Card sx={{minWidth: 275}} style={{
                                backgroundColor: '#808e9b',
                                color: 'white',
                                width: '200px',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CardContent style={{
                                    alignItems: 'center', justifyContent: 'center', display: 'flex',
                                    flexWrap: 'wrap', flexDirection: 'column',
                                }}>
                                    <Typography lg={{fontSize: 14}} color="text.secondary" gutterBottom
                                                style={{fontSize: '28px'}}>
                                        Vehicle
                                    </Typography>
                                    <Typography lg={{mb: 1.5}} color="text.secondary" style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '22px'
                                    }}>
                                        01
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                          style={{
                              alignItems: 'center',
                              display: 'flex',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              backgroundColor: '#ff3f34',
                              width:'80vw',
                              margin:'14px 0 14px 0'
                          }}>
                        <Typography variant="h5" style={{margin: '10px 0 10px 0', color: 'white'}}>Pending User Request</Typography>
                    </Grid>
                    <Grid>
                        <TableContainer component={Paper}
                                        style={{height: '70vh', width: '80vw', backgroundColor: '#eeeff1'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Booking Id</TableCell>
                                        <TableCell align="left">Customer Id</TableCell>
                                        <TableCell align="left">Pickup Date</TableCell>
                                        <TableCell align="left">Pickup Time</TableCell>
                                        <TableCell align="left">Return Date</TableCell>
                                        <TableCell align="left">Driver Request</TableCell>
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
                    <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                          style={{
                              alignItems: 'center',
                              display: 'flex',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              backgroundColor: '#ff3f34',
                              width:'80vw',
                              margin:'14px 0 14px 0'
                          }}>
                        <Typography variant="h5" style={{margin: '10px 0 10px 0', color: 'white'}}>Available To Service</Typography>
                    </Grid>
                    <Grid>
                        <TableContainer component={Paper}
                                        style={{height: '70vh', width: '80vw', backgroundColor: '#eeeff1'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Vehicle Id</TableCell>
                                        <TableCell align="left">Registration No</TableCell>
                                        <TableCell align="left">Vehicle Brand</TableCell>
                                        <TableCell align="left">Last Service Mileage</TableCell>
                                        <TableCell align="left">Service Mileage</TableCell>
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

export default withStyles(styleSheet)(AdminHome)