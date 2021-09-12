import React from 'react'
import Image from 'react-bootstrap/Image'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import { createTestimonial } from '../../actions/testimonial';
import { Grid } from '@material-ui/core';
import axios from 'axios';

import "./Testimonial.css"
import Background from "./Images/background.png"
import testimonial from './Images/testimonial.png'
import TestimonialCards from './TestimonialCards';
import { useLocation,useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    root: {
        flexGrow: 1,
        marginTop:"5%"
    },
  }));

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  }; 

const Testimonial = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hover, setHover] = React.useState(-1);
    const [Testimonial, setTestimonial] = React.useState([{Star:"",message:"",selectedFile:"",email:"",name:"",avatar:""}])
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')))
    const [downloadTestimonial, setDownloadTestimonial] = React.useState([])

    // const [Card, setCard] = React.useState([])
    // const [currentPage, setCurrentPage] = React.useState([])
    // const [cardPerPage, setCardPerPage] = React.useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => 
    {
        e.preventDefault()
        
        dispatch(createTestimonial(Testimonial))
        history.push('/')

        handleClose()
       
    }
   
    React.useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
      }, [location])

    React.useEffect(() => {
        setTestimonial({
            email: user?.result.email,
            name: user?.result.name,
            image: user?.result.imageUrl
        })
    }, [user])

    const getTestimonial = () => {
        axios.get('https://zen-berlin.herokuapp.com/testimonial')
            .then((response) => {
                const myTestimonial = response.data
                setDownloadTestimonial(myTestimonial)
            })
    }

    React.useEffect(() => getTestimonial(), [])

    console.log(downloadTestimonial)


    // const indexOfLastPost = currentPage * cardPerPage;
    // const indexOfFirstPost = indexOfLastPost - cardPerPage;

    return (
        <>
            <div className="testimonial-img-box">
                <Image src={Background} alt = "" fluid />
            
                
                <Button className="ButtonReview " onClick={handleClickOpen}>Let's REVIEW !!</Button>
                <Dialog open={open} onClose={handleClose}>
                    {user ? <> <DialogTitle>Tell us how you feel</DialogTitle>
                    <DialogContent>
                        <form id="form" className={classes.container}>
                            <FormControl style={{display:"contents"}} className={classes.formControl}>
                                <Rating name="hover-feedback" value={Testimonial.star} precision={0.5} onChange={(e) => setTestimonial({ ...Testimonial, star: e.target.value })} onChangeActive={(event, newHover) => { setHover(newHover); }} />
                                {Testimonial.star !== null && <Box ml={2}>{labels[hover !== -1 ? hover : Testimonial.star]}</Box>}
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={8} value={Testimonial.message} onChange={(e) => setTestimonial({ ...Testimonial, message: e.target.value })} />
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
                    </DialogActions> </> : <> 
                        <DialogTitle>Please sign in to make your own testimonial</DialogTitle>
                        <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Ok
                        </Button>
                        </DialogActions> </>}
                </Dialog>
                
                
            </div>
            <div className={classes.root} style={{background:`url(${testimonial})`,marginTop:"0"}}>
            <h1 className="title" style={{textAlign:"center",color:"#e1b74c",fontFamily:"Allura",fontSize:"80px"}}>What Clients Say About Us</h1>
                <Grid container spacing={3} >
                    <TestimonialCards testimonials={downloadTestimonial}  />
                </Grid>
            </div>
        </>
    )
}

export default Testimonial
