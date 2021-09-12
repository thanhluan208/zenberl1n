import React from 'react';
import "./KundammI.css";
import { Grid } from '@material-ui/core';
import Reservation from './Reservation';


import Image from 'react-bootstrap/Image'
import Res1 from "./Images/res1.jpg";




const KundammI = () => {

    


    return (
        <Grid className="KunDammI" id="KundammI" container >
            <Grid className="img-box" item xs={12} lg={6}>
                <Image className="img-resv" src={Res1} alt="" fluid />
            </Grid>
            <Grid className="content-box" item xs={12}  lg={6}>
                <h1> Ku' Damm I </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne</p>
                <br></br>
                <a href="/" className="btn"> VISIT RESTAURANT </a>
                <Reservation />
            </Grid>
        </Grid>
    )
}

export default KundammI
