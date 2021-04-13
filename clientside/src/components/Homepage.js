import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Navbaruser from './Navbaruser';
import Sidebar from './Sidebar';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign:'center',
        color:'#fa6f67',
        marginTop:20
      },
      margin:{
        margin:theme.spacing(0),
        minWidth:150,
      },
      color:{
        color:"#000",
      },
  }));

  const Homepage = () =>{
    const classes=useStyles();
  //  const token=localStorage.getItem("token");
    
        
        
        
    return(
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
      <section class="section home-feature">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                    </div>
                                <h5 class="features-title">Modern Strategy</h5>
                                <p>Customize anything in this template to fit your website needs</p>
                            
                        </div>
                      </div>

                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">Best Relationship</h5>
                                <p>Contact us immediately if you have a question in mind</p>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">Ultimate Marketing</h5>
                                <p>You just need to tell your friends about our free templates</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>

    
  


    
   </div>
    )
}

export default Homepage;