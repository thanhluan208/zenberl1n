import React from 'react';
import { Grid } from '@material-ui/core';
import Reservation from './Reservation';

import "./KundammII.css";
import Image from 'react-bootstrap/Image'
import Res2 from "./Images/res2.jpg";

const KundammII = () => {
    return (
        <Grid className="KunDammII" id="KundammII" container >
            <Grid className="content-box2" item xs={12}  lg={6}>
                <h1> Ku' Damm II </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne</p>
                <br></br>
                <a href="/" className="btn"> VISIT RESTAURANT </a>
                <Reservation />
            </Grid>
            <Grid className="img-box2" item xs={12} lg={6}>
                <Image className="img-resv" src={Res2} alt="" fluid />
            </Grid>
        </Grid>
    )
}

export default KundammII
