import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Gridcard from './Gridcard';
import { Typography} from '@material-ui/core';
import Navbar from './Navbar';
import Signup from './Signup';
import Footer from './Footer';
import Homepage from './Homepage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   justify:'center',
    textAlign:'center',
    marginTop:20,
    marginLeft:"10%",
    marginRight:"10%",
    
  },
  
  margin:{
    margin:theme.spacing(2),
    minWidth:150,
  },
  Typography:{
    color:"#fa7068"
  }
 
}));

export default function Home(props) {
  
  const classes = useStyles();
  const [data1,setdata]=useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      const res= await fetch("/register");
      const body=await res.json();
      
      setdata(body.studentData);
    };
    loadUsers();
  }, []);
  
  
  function FormRow(card,index) {
    return (
      <React.Fragment>
          <Grid item xl={2} lg={3} md={4} xs={12} sm={6} spacing={3} >
          <Gridcard id={card._id} image={card.image} name={card.name} />
        </Grid>
      </React.Fragment>
    );
  }  
  console.log(data1);
  return (
    <div>
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                      
                        <a href="#" class="logo">
                            <img src="./images/kbz_logo.png"  alt="Softy Pinko" height="30" width="150"/>
                        </a>
                   
                        <ul class="nav">
                            <li><a href="#welcome" class="active">Home</a></li>
                            <li><a href="#features">About</a></li>
                            <li><a href="#work-process">Work Process</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#pricing-plans">Pricing Tables</a></li>
                            <li><a href="#blog">Blog Entries</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <div class="welcome-area" id="welcome">

      
        <div class="header-text">
            <div class="container">
                <div class="row">
                    <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                        <h1>We provide the best <strong>strategy</strong><br/>to grow up your <strong>business</strong>
                        </h1>
                        <p>Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo 
                        for your company at absolutely free of charge</p>
                        <a href="#features" class="main-button-slider">Discover More</a>
                    </div>
                </div>
            </div>
        </div>
      
   


    </div>
    <Signup />
    <Homepage />
    </div>
  
  );
}