import React, { useState } from 'react'
import Image from 'react-bootstrap/esm/Image'
import { Grid, Typography,TextField, Button, FormControl } from '@material-ui/core'
import {useDispatch} from 'react-redux'

import { createFeedback } from '../../actions/feedback'
import './Contact.css'
import background from './Images/background.png'
import Zen from './Images/zen.png'  ;

const Contact = () => {
  const dispatch = useDispatch()
  const [Feedback,setFeedback] = useState({ customer:"",email:"",message:""})

  const handleSubmit = () => {
    if(Feedback.customer === "" || Feedback.email ==="" || Feedback.message ==="") alert("Please fill out all")
    else dispatch(createFeedback(Feedback))
  }

  return (  
    <div >
      <div className="containerBox" style={{background:`url(${background})`,height:"100vh",width:"100%",position:"relative",display:"flex",justifyContent:"center"}}>
        <div style={{height:"100%",width:"100%",position:"absolute",top:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Image style={{height:"400px",width:"400px"}} src={Zen} fluid />
        </div>
        <div  style={{height:"100%",width:"90%",padding:"4%",paddingTop:"8%",backdropFilter:"blur(5px)"}}>
          <Grid className="boxShadow" container spacing={3} style={{backgroundColor:"rgba(255,255,255,0.4)",width:"100%",height:"100%",boxShadow:"0 15px 35px rgba(0,0,0,0.8)",borderRadius:"15px",padding:"2% 8% "}}>
            <Grid className="contactBox" item md={6} xs={12} style={{padding:"6% 5%"}}>
              <Typography align="center" variant="h2" style={{fontFamily:"Playball,cursive"}}>Contact</Typography>
              <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",}}>
                <div style={{height:"2px",width:"30%",background:"#000",marginRight:"2%"}}></div>
                <Typography variant="h3" style={{fontFamily:"Playball,cursive"}}>Us</Typography>
              </div>
              <div className="contactBox" style={{padding:"28% 0 0 10%"}}>
                <Typography align="left" variant="h6">
                  <i style={{color: "#987e3d" }} class="fas fa-map-marker"></i> Adress: lorem ipsum ipsum ipsum 
                </Typography>
                <Typography align="left" variant="h6">
                  <i style={{color: "#987e3d" }} class="fas fa-phone-square"></i> Hotline: 0123456789
                </Typography>
                <Typography align="left" variant="h6">
                  <i  style={{color: "#987e3d" }} class="fas fa-envelope"></i> Email: lorem ipsum ipsum ipsum 
                </Typography>
              </div>
            </Grid>
            <Grid className="contactBox" item md={6} xs={12} style={{padding:"5%"}}>
              <form id="form" >
                <FormControl  style={{padding:"4% 0 4% 0"}} >
                    <TextField name="customer"  label="name" variant="outlined" value={Feedback.customer} onChange={(e) => setFeedback({ ...Feedback, customer: e.target.value })} autoFocus/>
                </FormControl>
                <FormControl  style={{padding:"4% 0 4% 0"}} >
                    <TextField name="email"  label="email" variant="outlined" value={Feedback.email} onChange={(e) => setFeedback({ ...Feedback, email: e.target.value })} />
                </FormControl>
                <FormControl style={{padding:"4% 0 4% 0"}} >
                    <TextField name="message"  label="message" multiline rows={4} variant="outlined" value={Feedback.message} onChange={(e) => setFeedback({ ...Feedback, message: e.target.value })} />
                </FormControl>
                <Button onClick={handleSubmit} className="custom-btn">Send Now</Button>
              </form>

            </Grid>
          </Grid>
        </div>
      </div>
      <footer style={{width:"100%",padding:"5%",background:`url(${background})`,position:"relative",paddingBottom:"2%"}}>
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
    </div>
  )
}

export default Contact
