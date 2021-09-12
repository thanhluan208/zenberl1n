import React from 'react'

import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { Avatar, Paper } from '@material-ui/core';
import Moment from 'react-moment';


const TestimonialCard = ({ testimonial }) => {
    
    return (
        <Paper style={{position:"relative"}}>
            <div style={{width:"100%",justifyContent:"right",display:"flex",paddingTop:"5%",paddingRight:"2%"}}>
                <Avatar style={{height:"50px",width:"50px",marginLeft:"2%"}} src={testimonial.image}  alt=""/>
                <div style={{marginLeft:"2%"}}>
                    <Typography variant="h6" style={{width:"100%",}}>
                        {testimonial.name}
                    </Typography>
                    <Typography variant="h8" style={{width:"100%"}}>
                        {testimonial.email}
                    </Typography>
                </div>
            </div>
            <Typography variant="h8" style={{position:"absolute",top:"5%",right:"5%"}}>
                <Moment fromNow>{testimonial.createAt}</Moment>
            </Typography>
            <div style={{justifyContent:"left",marginLeft:'2%'}}>
                <Rating value={testimonial.star} disabled precision={0.5}/>
            </div>
            <Typography style={{width:"100%",textAlign:"justify",padding:"2%"}}>
               <FormatQuoteIcon style={{transform:"rotate(180deg)"}}/> {testimonial.message}
            </Typography>
        </Paper>
    )
}

export default TestimonialCard
