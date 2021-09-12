import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Meals from './Meals'
import Image from 'react-bootstrap/Image'
import Link from './Images/link.png'
import Footer from './Images/background.png'
import Zen from './Images/zen.png'
import "./Menu.css"
const Menu = () => {
    const appetizers = [
        {
            title:'Lorem ipsum dolor sit',
            rating:3,
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam voluptatum explicabo sint quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam voluptatum explicabo sint quam.',
            price: '$19,99',
            calories: "271 cals",
            

        },
        {
            title:'Lorem ipsum dolor sit',
            rating:4,
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam voluptatum explicabo sint quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam voluptatum explicabo sint quam.',
            price: '$19,99',
            calories: "271 cals",
            

        },
        {
            title:'Lorem ipsum dolor sit',
            rating:4.5,
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam voluptatum explicabo sint quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam voluptatum explicabo sint quam.',
            price: '$19,99',
            calories: "271 cals",
            

        },
        {
            title:'Lorem ipsum dolor sit',
            rating:5,
            description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam voluptatum explicabo sint quam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam voluptatum explicabo sint quam.',
            price: '$19,99',
            calories: "271 cals",
            
        },
    ]
    return (
        <>
            <section className="section1">
                <Grid container style={{height:"100%"}} >
                    <Grid item xs={12} md={7} style={{position:"relative"}} >
                        <Paper className="mainMealBox1">
                            <Typography variant="h4" style={{width:"100%",color:"#DAA520"}}>
                                Appetizers 
                            </Typography>
                            <Meals meals={appetizers}/>
                        </Paper>
                    </Grid>
                    <Grid className="imageBox1" item  md={5} >
                    </Grid>
                </Grid>
            </section>
            <section className="section2" style={{height:"60vh"}}>
                <Grid container spacing={3} style={{height:"100%"}}>
                    <Grid item sm={4} style={{padding:"3%"}}>
                        <Typography variant="h4" style={{width:"100%",color:"#DAA520"}}>
                            Appetizers
                        </Typography>
                        <Typography style={{textAlign:"justify"}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam
                        </Typography>
                    </Grid>
                    <Grid item sm={4} style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}>
                        <div className="imageLink">
                            <Image src={Link} fluid />
                        </div>
                    </Grid>
                    <Grid item sm={4} style={{padding:"3%",textAlign:"justify",textAlignLast:"right",paddingTop:'18%'}}>
                        <Typography variant="h4" style={{width:"100%",color:"#DAA520"}}>
                            Main Courses
                        </Typography>
                        <Typography style={{textAlign:"justify"}}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam
                        </Typography>
                    </Grid>
                </Grid>
            </section>
            <section className="section1">
                <Grid container style={{height:"100%"}} >
                    <Grid className="imageBox2" item  md={5} >
                    </Grid>
                    <Grid item xs={12} md={7} style={{position:"relative"}} >
                        <Paper className="mainMealBox2">
                            <Typography variant="h4" style={{width:"100%",color:"#DAA520"}}>
                                Main Courses
                            </Typography>
                            <Meals meals={appetizers}/>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
            <section className="section2" style={{height:"60vh"}}>
                <Grid container spacing={3} style={{height:"100%"}}>
                    <Grid item sm={4} style={{padding:"3%",textAlign:"justify",textAlignLast:"left",paddingTop:'18%'}}>
                        <Typography variant="h4" style={{width:"100%",color:"#DAA520"}}>
                            Dessert
                        </Typography>
                        <Typography >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam
                        </Typography>
                    </Grid>
                    <Grid item sm={4} style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}>
                        <div className="imageLink">
                            <Image src={Link} fluid />
                        </div>
                    </Grid>
                    <Grid item sm={4} style={{padding:"3%",textAlign:"justify",textAlignLast:"right",paddingTop:"4%"}}>
                        <Typography variant="h4" style={{width:"100%",color:"#DAA520"}}>
                            Main Courses
                        </Typography>
                        <Typography>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ex obcaecati culpa nihil, voluptatibus labore reprehenderit praesentium eius repellendus eos quasi quas distinctio itaque pariatur veniam
                        </Typography>
                    </Grid>
                </Grid>
            </section>
            <section className="section1">
                <Grid container style={{height:"100%"}} >
                    <Grid item xs={12} md={7} style={{position:"relative"}} >
                        <Paper className="mainMealBox1">
                            <Typography variant="h4" style={{width:"100%",color:"#DAA520"}}>
                                Desserts 
                            </Typography>
                            <Meals meals={appetizers}/>
                        </Paper>
                    </Grid>
                    <Grid className="imageBox3" item  md={5} >
                    </Grid>
                </Grid>
            </section>
            <footer style={{width:"100%",padding:"5%",background:`url(${Footer})`,position:"relative",paddingBottom:"2%"}}>
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

export default Menu
