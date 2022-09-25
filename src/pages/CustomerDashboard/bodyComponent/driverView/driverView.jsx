import {Component} from "react";
import {Grid} from "@material-ui/core";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Autocomplete, Button, Card, CardContent, CardMedia, TextField, Typography} from "@mui/material";
import DatePicker from "../../../../components/common/DatePicker";
import Timepicker from "../../../../components/common/TimePicker";
import GDSEButton from "../../../../components/common/Button";
import driverPhoto from "../../../../assets/images/driverPhoto.jpeg";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import StarIcon from "@mui/icons-material/Star";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import VehicleService from "../../../../service/VehicleService";
import DriverManageService from "../../../../service/DriverManageService";


class DriverView extends Component{
    constructor(props) {
        super(props);

        this.state = {
            driverList: []
        }
    }

    componentDidMount() {
        this.loadAllDriverData();
    }

    loadAllDriverData = async () => {
        let res = await DriverManageService.fetchDriver();

        if (res.status === 200) {
            this.setState({
                driverList: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

        this.exampleForMap()

    };

    render() {
        const {classes} = this.props
        return(
            <>
                <Grid className={classes.driver_view}>
                    <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                          style={{
                              alignItems: 'center',
                              display: 'flex',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              backgroundColor: '#485460',
                              width: '83vw',
                          }}>
                        <Typography variant="h4" style={{margin: '10px 0 10px 0', color: 'white',}}>Choose
                            Driver</Typography>
                    </Grid>
                    <Grid className={classes.searchBar} style={{margin:'30px 0 0 0'}}>
                        <TextField id="outlined-basic" label="Driver Id" variant="outlined" style={{marginLeft:'20px'}}/>
                        <TextField id="outlined-basic" label="Driver Name" variant="outlined" style={{marginLeft:'20px'}}/>
                        <TextField id="outlined-basic" label="Contact No" variant="outlined" style={{marginLeft:'20px'}}/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{marginLeft:'20px'}}/>
                        <Grid container
                              direction="row"
                              justifyContent="flex-end"
                              alignItems="center"
                        >
                            <GDSEButton label="Search Here" type="submit" size="medium"
                                        color="primary" variant="contained"
                                        style={{margin: '40px 20px 20px 0'}}/>
                        </Grid>
                    </Grid>
                    <Grid className={classes.subContainer}>
                        <Grid className={classes.booking_detail_row}>
                            <div className={classes.card}>
                                {this.state.driverList.map((driver) => (
                                    <Card sx={{maxWidth: 345, minHeight: 380}} style={{margin: '0 20px 0 0'}}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={driverPhoto}
                                        />
                                        <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                            <Typography gutterBottom variant="h6" component="div"
                                                        style={{color: '#ff4d4d'}}>
                                                {driver.name.firstName} {driver.name.lastName}
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div"
                                                        style={{color: 'green'}}>
                                                Email: {driver.email}
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div"
                                                        style={{color: 'green', marginTop: '8px'}}>
                                                Address: {driver.address}
                                            </Typography>

                                            <Grid className={classes.booking_card_detail}>
                                                {/*<Grid className={classes.booking_card_subDetail}>*/}
                                                {/*    /!*<DirectionsCarFilledOutlinedIcon style={{*!/*/}
                                                {/*    /!*    fontSize: '16px',*!/*/}
                                                {/*    /!*    marginRight: '2px',*!/*/}
                                                {/*    /!*    color: '#2C3A47'*!/*/}
                                                {/*    /!*}}/>*!/*/}
                                                {/*    <Typography variant="caption" display="block" gutterBottom*/}
                                                {/*                style={{*/}
                                                {/*                    color: '#2C3A47',*/}
                                                {/*                    marginTop: '10px',*/}
                                                {/*                    marginLeft: '4px'*/}
                                                {/*                }}>*/}
                                                {/*        7 Cars*/}
                                                {/*    </Typography>*/}
                                                {/*</Grid>*/}
                                                <Grid className={classes.booking_card_subDetail}>
                                                    {/*<StarIcon style={{*/}
                                                    {/*    fontSize: '16px',*/}
                                                    {/*    marginRight: '2px',*/}
                                                    {/*    color: '#2C3A47'*/}
                                                    {/*}}/>*/}
                                                    <Typography variant="caption" display="block" gutterBottom
                                                                style={{
                                                                    color: '#2C3A47',
                                                                    marginTop: '10px',
                                                                    marginLeft: '4px'
                                                                }}>
                                                        Id: {driver.id}
                                                    </Typography>
                                                </Grid>
                                                <Grid className={classes.booking_card_subDetail}>
                                                    {/*<SettingsSuggestIcon style={{*/}
                                                    {/*    fontSize: '16px',*/}
                                                    {/*    marginRight: '2px',*/}
                                                    {/*    color: '#2C3A47'*/}
                                                    {/*}}/>*/}
                                                    <Typography variant="caption" display="block" gutterBottom
                                                                style={{
                                                                    color: '#2C3A47',
                                                                    marginTop: '10px',
                                                                    marginLeft: '4px'
                                                                }}>
                                                        Tp: {driver.contactNo}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid>
                                                <Grid className={classes.desc_2}>
                                                    <Button variant="contained" fullWidth
                                                            style={{color: '#ffffff', backgroundColor: '#ff9f1a'}}>Select Driver</Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                ))
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styleSheet)(DriverView)