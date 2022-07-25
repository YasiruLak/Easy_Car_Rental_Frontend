import {Component} from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {Card, CardContent, CardMedia, Grid, TextField, Typography} from "@mui/material";
import driver1 from "../../../../assets/images/driver1.png";

class Booking extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <Grid className={classes.container}>
                <Grid  className={classes.searchBar}>
                    <TextField id="outlined-basic" label="Location" variant="outlined" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Pick Up Date" variant="outlined" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Pick Up Time" variant="outlined" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Return Date" variant="outlined" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Vehicle No" variant="outlined" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Customer Id" variant="outlined" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Driver Request" variant="outlined" style={{marginLeft:'20px'}}/>
                    <TextField id="outlined-basic" label="Driver Id" variant="outlined" style={{marginLeft:'20px'}}/>
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