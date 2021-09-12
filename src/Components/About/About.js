import React from 'react'
import Image from 'react-bootstrap/Image'


import "./About.css"
import Zen from './Images/zen.png'
import Background from './Images/about.jpeg';
import Footer from './Images/background.png'

const About = () => {
    return (
        <>
            <div className="about-img-box">
                <Image src={Background} alt = "" fluid />
                
            </div>
            
            <div className="about-content">
                <h1>Our Story</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicabo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicaboLorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicabo doloremque quam, quod architecto illo earum eos optio ipsam alias et fugit odit facilis! Magni, voluptatem!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicabo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicaboLorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicabo doloremque quam, quod architecto illo earum eos optio ipsam alias et fugit odit facilis! Magni, voluptatem!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicabo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicaboLorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicabo doloremque quam, quod architecto illo earum eos optio ipsam alias et fugit odit facilis! Magni, voluptatem!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicabo Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicaboLorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias hic corrupti doloribus pariatur explicabo doloremque quam, quod architecto illo earum eos optio ipsam alias et fugit odit facilis! Magni, voluptatem!</p>
            </div>
            <footer style={{width:"100%",padding:"5%",background:`url(${Footer})`,marginTop:"5%",position:"relative",paddingBottom:"2%"}}>
                <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Image src={Zen} alt="" fluid />
                </div>
                <div className="footer-content" style={{width:"100%",paddingLeft:"20%",paddingRight:"20%",textAlign:"center",marginBottom:"10%"}}>
                    <p style={{fontSize:"calc(100% + 9px"}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum libero porro praesentium impedit, cumque nihil eos, accusamus reiciendis, quisquam cum officiis quas ipsam molestias illo omnis natus sint? Harum, asperiores.
                    </p>
                </div>
                <div className="icon-contact" >
                    <i style={{borderRadius:"50%",textAlign:"center",padding:"1%"}} className="fab fa-facebook-f"></i> 
                    <i style={{borderRadius:"50%",textAlign:"center",padding:"1%"}} className="fab fa-instagram"></i>
                    <i style={{borderRadius:"50%",textAlign:"center",padding:"1%"}} className="fab fa-twitter"></i>
                </div>
                <div className="copyright" style={{position:"absolute",right:"5%",bottom:"2%",textAlign:"center"}}>
                    <p>Copyright &copy; 2021</p>
                    <p>This website was built and developed by ME!!</p>
                </div>
            </footer>
        </>
    )
}

export default About
