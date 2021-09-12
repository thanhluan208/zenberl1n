import React from 'react'
import Background from './HomeComp/Background'
import KundammI from './HomeComp/KundammI'
import KundammII from './HomeComp/KundammII'
import "./Home.css"
import Zen from "./HomeComp/Images/zen.png";
import Image from 'react-bootstrap/Image'
import Footer from './HomeComp/Images/background.png'

const Home = () => {
    return (
        <>
            <Background />
            <h1 className="title" style={{textAlign:"center",marginTop:"5%",color:"#DAA520",fontFamily:"Allura",fontSize:"80px"}}>RESTAURANT</h1>
            <KundammI />
            <KundammII />
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

export default Home
