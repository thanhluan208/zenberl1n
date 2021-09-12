import { Grid } from '@material-ui/core'
import React from 'react'
import Meal from './Meal'

const Meals = ({meals}) => {
    return (
        <Grid container spacing={3} >
            {meals.map( meal => (
                <Meal meal={meal} /> 
            ))}
      </Grid>
    )
}

export default Meals
