import "./Reservation.css"
import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { useDispatch} from 'react-redux'
import { createReservation } from "../../../actions/reservation";
// import axios from "axios";

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  
  const Reservation = () => {
      
    const dispatch = useDispatch()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [postData, setPostData] = useState({customer: '',telNumber:"", numberOfCustomer: '', date: '',time:'',message:'' })
    // const [customer, setCustomer] = useState([{_id: '',customer:'',numberOfCustomer:'',date:'',time:'',message:''}])


    // const getCustomer = () => {
    //     axios.get('http://localhost:5000/reservation')
    //         .then((response) => {
    //             const myCustomer = response.data
    //             setCustomer(myCustomer)
    //         })
    // }

    // useEffect(() => getCustomer(), [])



    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (e) => 
    {
        e.preventDefault();

        let time = parseInt(postData.time.substr(0,2))*60 + parseInt(postData.time.substr(3,4))
        if( time >= 240 && time <= 1200) {
            dispatch(createReservation(postData))

            alert("successfully")

            handleClose()
        }
        else alert(`We open after 8:00 and before 20:00. Your reservation time is ${postData.time}`)
        console.log(time)
    }
    return (
        <>
            <Button className="Reservation-btn"  onClick={handleClickOpen}>Reservation</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                <form id="form" className={classes.container}>
                    <FormControl className={classes.formControl}>
                        <TextField name="customer"  label="name" variant="outlined" value={postData.customer} onChange={(e) => setPostData({ ...postData, customer: e.target.value })} autoFocus/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField helperText="Enter number only please" id="telNumber"  name="telNumber" label="Telephone Number" variant="outlined" value={postData.telNumber} onChange={(e) => {
                                const re = /^[0-9\b]+$/;
                                if (e.target.value === '' || re.test(e.target.value)) {
                                    if( e.target.value.length < 11) setPostData({ ...postData, telNumber: e.target.value })
                                 }
                            }}/>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField helperText="Enter number only and below 10 please" id="numberOfCustomers"  name="numOfCustomers" label="Number Of Customers" variant="outlined" value={postData.numberOfCustomer} onChange={(e) => {
                                const re = /^[0-9\b]+$/;
                                if (e.target.value === '' || re.test(e.target.value)) {
                                    if( e.target.value < 10) setPostData({ ...postData, numberOfCustomer: e.target.value })
                                 }
                            }}/>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <TextField name="date" label="Date" type="date" defaultValue="2017-05-24" className={classes.textField} InputLabelProps={{ shrink: true}} value={postData.date} onChange={(e) => setPostData({ ...postData, date: e.target.value })} />
                    </FormControl>
                    <FormControl id="time-resv" className={classes.formControl}>
                        <TextField name="time" label="Time" type="time" defaultValue="07:30" className={classes.textField} InputLabelProps={{ shrink: true }} inputProps={{ step: 300 }} value={postData.time} onChange={(e) => setPostData({ ...postData, time: e.target.value })} />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    </FormControl>
                   
                </form>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Ok
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Reservation
