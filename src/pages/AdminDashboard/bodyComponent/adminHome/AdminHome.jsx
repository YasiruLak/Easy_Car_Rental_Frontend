import {Component} from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Button} from "@mui/material";


class AdminHome extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(
            <Grid className={classes.Home_container}>
                <Grid className={classes.Admin_Home_Card}>
                    <Grid >
                        <Card  style={{backgroundColor:'#3867d6',color:'white',width:'180px'}} >
                            <CardContent>
                                <Typography lg={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{fontSize:'28px',marginLeft:'11px'}}>
                                    Customer
                                </Typography>
                                <Typography lg={{ mb: 1.5 }} color="text.secondary" style={{alignItems:'center',justifyContent:'center',fontSize:'18px',marginLeft:'65px'}}>
                                    01
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid >
                        <Card sx={{ minWidth: 275 }} style={{backgroundColor:'#20bf6b',color:'white',width:'180px'}} >
                            <CardContent>
                                <Typography lg={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{fontSize:'28px',marginLeft:'30px'}}>
                                    Driver
                                </Typography>
                                <Typography lg={{ mb: 1.5 }} color="text.secondary" style={{alignItems:'center',justifyContent:'center',fontSize:'18px',marginLeft:'65px'}}>
                                    01
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid >
                        <Card sx={{ minWidth: 275 }} style={{backgroundColor:'#fa8231',color:'white',width:'180px'}} >
                            <CardContent style={{alignItems:'center',justifyContent:'center'}}>
                                <Typography lg={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{fontSize:'28px',alignItems:'center',justifyContent:'center',marginLeft:'30px'}}>
                                    Admin
                                </Typography>
                                <Typography lg={{ mb: 1.5 }} color="text.secondary" style={{alignItems:'center',justifyContent:'center',fontSize:'18px',marginLeft:'65px'}}>
                                    01
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid >
                        <Card sx={{ minWidth: 275 }} style={{backgroundColor:'#eb3b5a',color:'white',width:'180px'}} >
                            <CardContent>
                                <Typography lg={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{fontSize:'28px',marginLeft:'26px'}}>
                                    Vehicle
                                </Typography>
                                <Typography lg={{ mb: 1.5 }} color="text.secondary" style={{alignItems:'center',justifyContent:'center',fontSize:'18px',marginLeft:'65px'}}>
                                    01
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>


                </Grid>
                <Grid className={classes.Admin_Home_Driver_Card}>
                    <Grid className={classes.card_name}>
                        <Card sx={{ minWidth: 275 }} style={{backgroundColor:'#d1d8e0',color:'black',width:'23vw',height:'50vh',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection:'row'
                        }} >
                            <CardContent style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection:'column'
                            }}>
                                <Typography lg={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{fontSize:'28px'}}>
                                    Yasiru Dahanayaka
                                </Typography>
                                <Typography lg={{ mb: 1.5 }} color="text.secondary" style={{fontSize:'18px',marginBottom:'10px'}}>
                                    Driver Id : D00-001
                                </Typography>
                                <Button variant="contained" style={{width:'200px'}}>View Schedule</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className={classes.card_name}>
                        <Card sx={{ minWidth: 275 }} style={{backgroundColor:'#d1d8e0',color:'black',width:'23vw',height:'50vh',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection:'row'
                        }} >
                            <CardContent style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection:'column'
                            }}>
                                <Typography lg={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{fontSize:'28px'}}>
                                    Yasiru Dahanayaka
                                </Typography>
                                <Typography lg={{ mb: 1.5 }} color="text.secondary" style={{fontSize:'18px',marginBottom:'10px'}}>
                                    Driver Id : D00-001
                                </Typography>
                                <Button variant="contained" style={{width:'200px'}}>View Schedule</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid className={classes.card_name}>
                        <Card sx={{ minWidth: 275 }} style={{backgroundColor:'#d1d8e0',color:'black',width:'23vw',height:'50vh',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection:'row'
                        }} >
                            <CardContent style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection:'column'
                            }}>
                                <Typography lg={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{fontSize:'28px'}}>
                                    Yasiru Dahanayaka
                                </Typography>
                                <Typography lg={{ mb: 1.5 }} color="text.secondary" style={{fontSize:'18px',marginBottom:'10px'}}>
                                    Driver Id : D00-001
                                </Typography>
                                <Button variant="contained" style={{width:'200px'}}>View Schedule</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(AdminHome)