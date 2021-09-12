import React from 'react'
import './Background.css'
import Cooking from './cooking.mp4'

const Background = () => {
    return (
        <div className="background-container">
            <video autoPlay loop muted>
                <source src={Cooking} type ="video/mp4"/>
            </video>
            <div className="background-box">
                <h3> WELCOME TO ZENBERLIN </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne Unde harum incidunt voluptas excepturi consequatur enim id dolorum reiciendis optio nobis a repellendus quae dicta ne</p>
            </div>
            <a className="left container" href="#KundammI">Ku' Damm I</a>
            <a className="right container" href="#KundammII">Ku' Damm II</a>
        </div>
    )
}

export default Background
