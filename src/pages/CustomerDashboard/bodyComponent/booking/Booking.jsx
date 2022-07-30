import {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {Card, CardContent, CardMedia, Grid, TextField, Typography} from "@mui/material";
import driver1 from "../../../../assets/images/driver1.png";
import GDSEButton from "../../../../components/common/Button";

class Booking extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <Grid className={classes.container}>
                <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                      style={{
                          alignItems: 'center',
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                          backgroundColor: '#00b894',
                          width:'81vw',
                      }}>
                    <Typography variant="h4" style={{margin: '14px 0 20px 0', color: 'white',}}>Book Your Dream Vehicle</Typography>
                </Grid>
                <Grid  className={classes.searchBar}>
                    <TextField id="outlined-basic" label="Location" variant="outlined" size="small" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Pick Up Date" variant="outlined" size="small" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Pick Up Time" variant="outlined" size="small" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Return Date" variant="outlined" size="small" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Vehicle No" variant="outlined" size="small" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Customer Id" variant="outlined" size="small" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Driver Request" variant="outlined" size="small" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Driver Id" variant="outlined" size="small" style={{marginLeft:'20px'}}/>
                </Grid>
                <Grid container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                >
                    <GDSEButton label="Reserve Now" type="submit" size="medium"
                                color="primary" variant="contained"
                                style={{margin: '10px 20px 20px 0'}}/>
                </Grid>
                <Grid  className={classes.subContainer}>
                    <Grid className={classes.card}>
                        <Card sx={{maxWidth: 345, minHeight: 260}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={driver1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 345, minHeight: 260}} style={{marginLeft:'20px'}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={driver1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 345, minHeight: 260}} style={{marginLeft:'20px'}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={driver1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className={classes.card}>
                        <Card sx={{maxWidth: 345, minHeight: 260}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={driver1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 345, minHeight: 260}} style={{marginLeft:'20px'}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={driver1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{maxWidth: 345, minHeight: 260}} style={{marginLeft:'20px'}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={driver1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(Booking)