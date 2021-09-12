import React from 'react'
import { Grid } from '@material-ui/core';

import TestimonialCard from './TestimonialCard';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
  
    },
    justifyContent:'center',
    width:"100%"
  },
}));

const TestimonialCards = ({ testimonials ,loading }) => {
    const classes = useStyles();

    if( !testimonials.length || testimonials === "") return (
        <div className={classes.root}>
            <CircularProgress color="secondary" />
        </div>
    )
    

    if(loading) return (
      <h1> LOADING...</h1>
    )
    
    return (
          <>
            { testimonials.map( testimonial => (
              <Grid  key={testimonial._id}  item xs={12} md={6} >
                  <TestimonialCard testimonial={testimonial} />
              </Grid>
            ))}
          </>
    );
}

export default TestimonialCards
