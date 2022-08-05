import {Component} from "react";
import {Grid, IconButton} from "@material-ui/core";
import {Autocomplete, TextField, Typography} from "@mui/material";
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
import GDSESnackBar from "../../../../components/common/SnackBar";
import VehicleService from "../../../../service/VehicleService";
import PaymentService from "../../../../service/PaymentService";


class Payment extends Component {
    constructor(props) {
        super(props);

        this.state = {

            formData: {
                paymentId: '',
                paymentDate: '',
                invoiceNo: '',
                amount: '',
                paymentType: '',
                booking: {
                    bookingId:'',
                }
            },

            paymentTypes: [
                {
                    type: 'DAMAGE'
                },
                {
                    type: 'RENT'
                },
                {
                    type: 'OTHER'
                }
            ],

            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }

    deletePayment = async (paymentId) => {
        let params = {
            paymentId: paymentId

        }
        let res = await PaymentService.deletePayment(params);

        if (res.status === 200) {
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: "Deleted",
                    severity: 'success'
                });
            }
            this.loadPaymentData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    updatePayment = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'update',
            btnColor: 'secondary',
            formData: {
                paymentId: data.paymentId,
                paymentDate: data.paymentDate,
                invoiceNo: data.invoiceNo,
                amount: data.amount,
                paymentType: data.paymentType,
                booking: {
                    bookingId:data.booking.bookingId,
                }
            }
        });
    };

    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)   // access element one by one
        })
    };

    clearFields = () => {
        this.setState({
            formData: {
                paymentId: '',
                paymentDate: '',
                invoiceNo: '',
                amount: '',
                paymentType: '',
                booking: {
                    bookingId:'',
                }
            }
        });
    };

    loadPaymentData = async () => {
        let res = await PaymentService.fetchPayment();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        // this.setState({
        //     data: res.data.data
        // });
        this.exampleForMap()

    };

    componentDidMount() {
        this.loadPaymentData();
    }

    submitPayment = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "save") {
            let res = await PaymentService.postPayment(formData);

            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: "Saved",
                    severity: 'success'
                });
                this.clearFields();
                await this.loadPaymentData();

            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await PaymentService.putPayment(formData);
            if (res.status === 200) {

                this.setState({
                    alert: true,
                    message: "Updated",
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                await this.loadPaymentData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };


    render() {
        const {classes} = this.props
        return (
            <>
                <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitPayment}>
                <Grid container className="pt-2" spacing={1} style={{marginLeft: '8px'}}>
                    <Grid item lg={12} xs={12} sm={12} md={12} container className="pt-2" spacing={1}
                          style={{
                              alignItems: 'center',
                              display: 'flex',
                              flexWrap: 'wrap',
                              justifyContent: 'center',
                              backgroundColor: '#05c46b',
                              width: '82.3vw',
                          }}>
                        <Typography variant="h4" style={{margin: '10px 0 20px 0', color: 'white'}}>Payment
                            Manage</Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '24px 12px 14px 16px'}}>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="P00-001"
                            variant="outlined"
                            size="small"
                            style={{width: '100%'}}
                            label="Payment Id"
                            value={this.state.formData.paymentId}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.paymentId = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '24px 12px 0 12px'}}>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="981631161567"
                            variant="outlined"
                            size="small"
                            style={{width: '100%'}}
                            label="Invoice No"
                            value={this.state.formData.invoiceNo}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.invoiceNo = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '24px 12px 0 12px'}}>

                        <TextValidator
                            id="outlinedbasic"
                            placeholder="2022-12-12"
                            variant="outlined"
                            size="small"
                            style={{width: '100%'}}
                            label="Date"
                            value={this.state.formData.paymentDate}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.paymentDate = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '24px 12px 0 12px'}}>
                        <TextValidator
                            id="outlinedbasic"
                            placeholder="B00-001"
                            variant="outlined"
                            size="small"
                            style={{width: '100%'}}
                            label="Booking Id"
                            value={this.state.formData.booking.bookingId}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.booking.bookingId = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '24px 12px 14px 16px'}}>

                        <TextValidator
                            id="outlinedbasic"
                            variant="outlined"
                            size="small"
                            label="Amount"
                            style={{width: '100%'}}
                            placeholder="15000.00"
                            value={this.state.formData.amount}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.amount = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={2} style={{margin: '0 12px 0 16px'}}>
                        <Autocomplete
                            onChange={(e, value, r) => {

                                let formData = this.state.formData
                                formData.paymentType = value.type
                                this.setState({formData})

                            }}
                            getOptionLabel={
                                (option) => option.type
                            }
                            id="controllable-states-demo"
                            options={this.state.paymentTypes}
                            size="small"
                            renderInput={(params) => <TextField {...params} label="Payment Type"/>}
                        />
                    </Grid>

                    <Grid container style={{margin: '20px 40px 0 0'}} direction="row" justifyContent="flex-end"
                          alignItems="center">
                        <GDSEButton  label={this.state.btnLabel} color={this.state.btnColor} type="submit" size="medium"  variant="contained"
                                    style={{margin: '10px 12px 20px 5px'}}/>
                        <GDSEButton label="cancel" size="medium" color="error" variant="contained"
                                    style={{margin: '10px 12px 20px 5px'}}/>
                    </Grid>
                </Grid>
                </ValidatorForm>

                    <Grid>
                        <TableContainer component={Paper}
                                        style={{height: '70vh', width: '80vw', backgroundColor: '#eeeff1', marginLeft:'20px'}}>
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
                                        this.state.data.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.paymentId}</TableCell>
                                            <TableCell align="left">{row.invoiceNo}</TableCell>
                                            <TableCell align="left">{row.paymentDate}</TableCell>
                                            <TableCell align="left">{row.booking.bookingId}</TableCell>
                                            <TableCell align="left">{row.paymentType}</TableCell>
                                            <TableCell align="left">{row.amount}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Edit">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.updatePayment(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deletePayment(row.paymentId)
                                                        }}
                                                    >
                                                        <DeleteIcon color="error"/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </>
        )
    }
}

export default (Payment)