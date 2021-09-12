import React   from 'react'
import './Navbar.css';
import {  Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import decode from 'jwt-decode';
import { useState,useEffect } from 'react';
import useStyles from './styles';
import { createGoogleAuth } from '../../actions/googleauth';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [googleAuth, setGoogleAuth] = useState([])
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        dispatch({ type: "LOGOUT"})

        history.push("/")

        setUser(null)
    }

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('profile')))
      const data = JSON.parse(localStorage.getItem('profile'));
      if( data?.token.length > 500) {
        setGoogleAuth(data.result)
      }
      if( data?.token.length < 500) console.log("customauth")
    }, [location])
    
    useEffect(() => {
      dispatch(createGoogleAuth(googleAuth))
      // eslint-disable-next-line
    }, [googleAuth])
    
  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg" style={{width:"100%",position:"fixed",zIndex:"10000"}}>
    
      <div style={{marginLeft:"2%"}}>
        <Typography component={Link} style={{zIndex:"1000",padding:"0"}} variant="h4"className="navbar-brand navbar-logo" to="/" exact="true">
        Zen 
        </Typography>
        <Typography component={Link} style={{zIndex:"1000",padding:"0",color:"#DAA520"}} variant="h4"className="navbar-brand navbar-logo" to="/" exact="true">
        Berlin
        </Typography>
      </div>
      <button 
        className="navbar-toggler"
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
              { user?.result.email === "thanhluan20880@gmail.com" ? 
              <>
                <Typography component={Link}  className="nav-link" to="/admin" exact="true">
                <i className="fas fa-tachometer-alt"></i>Customer
                </Typography>
                <Typography component={Link}  className="nav-link" to="/menu" exact="true">
                  <i className="far fa-address-book"></i>Update Menu
                </Typography> 
              </> :
              <>
                <Typography component={Link}  className="nav-link" to="/" exact="true">
                <i className="fas fa-tachometer-alt"></i>Home
                </Typography>
                <Typography component={Link}  className="nav-link" to="/about" exact="true">
                  <i className="far fa-address-book"></i>About
                </Typography> 
                <Typography component={Link}  className="nav-link" to="/menu" exact="true">
                  <i className="far fa-clone"></i>Menu
                </Typography>
                <Typography component={Link}  className="nav-link" to="/testimonial" exact="true">
                  <i className="far fa-chart-bar"></i>Testimonial
                </Typography>
                <Typography component={Link}  className="nav-link" to="/contact" exact="true">
                  <i className="far fa-copy"></i>Contact Us
                </Typography>
              </>
              }
        </ul>
              <Toolbar className={classes.toolbar}>
                {user?.result ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} style={{color:"#000"}} variant="h6">{user?.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
                ) : (
                <Button component={Link}  to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
      </div>
  </nav>
  )
}
export default Navbar;