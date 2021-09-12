import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Rating from '@material-ui/lab/Rating';
import Image from 'react-bootstrap/Image';
import dish5 from './Images/dish5.jpeg'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  })

const Meal = ({meal}) => {
    const [open, setOpen] = React.useState(false);

    let description = meal.description 
    if(meal.description.length > 150) 
    {
        description = meal.description.substr(0,150) + "..."
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid item xs={6}>
            <Typography variant="h6">{meal.title}</Typography>
            <Rating value={meal.rating} disabled precision={0.5} style={{width:"100%"}} />
            <Typography  style={{textAlign:"justify"}}>{description}</Typography>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Read more</Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                style={{marginTop:"6%"}}
            >
                <DialogTitle id="alert-dialog-slide-title">{meal.title}</DialogTitle>
                <DialogContent>
                    <Rating value={meal.rating} precision={0.5} disabled />
                    <DialogContentText id="alert-dialog-slide-description">
                        {meal.description}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-slide-description">
                        Price: {meal.price}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-slide-description">
                        Calories: {meal.calories}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Image className="imageDialog" src={dish5} fluid />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    )
}

export default Meal
