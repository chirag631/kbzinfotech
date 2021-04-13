import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign:'center',
        color:'#ffffff',
        marginTop:20
      },
      
      color:{
        color:"#fa6f67",
        textDecoration:"none"
      },
  }));
  const Pricing_Plan = () =>{
    const classes=useStyles();    

    return(
      

<div>
<section class="section colored" id="pricing-plans">
        <div class="container">
          
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">Pricing Plans</h2>
                    </div>
                </div>
                <div class="offset-lg-3 col-lg-6">
                    <div class="center-text">
                        <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                    </div>
                </div>
            </div>
      

            <div class="row">
             
                <div class="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                    <div class="pricing-item">
                        <div class="pricing-header">
                            <h3 class="pricing-title">Starter</h3>
                        </div>
                        <div class="pricing-body">
                            <div class="price-wrapper">
                                <span class="currency">$</span>
                                <span class="price">14.50</span>
                                <span class="period">monthly</span>
                            </div>
                            <ul class="list">
                                <li class="active">60 GB space</li>
                                <li class="active">600 GB transfer</li>
                                <li class="active">Pro Design Panel</li>
                                <li>15-minute support</li>
                                <li>Unlimited Emails</li>
                                <li>24/7 Security</li>
                            </ul>
                        </div>
                        <div class="pricing-footer">
                            <a href="#" class="main-button">Purchase Now</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                    <div class="pricing-item active">
                        <div class="pricing-header">
                            <h3 class="pricing-title">Premium</h3>
                        </div>
                        <div class="pricing-body">
                            <div class="price-wrapper">
                                <span class="currency">$</span>
                                <span class="price">21.50</span>
                                <span class="period">monthly</span>
                            </div>
                            <ul class="list">
                                <li class="active">120 GB space</li>
                                <li class="active">1200 GB transfer</li>
                                <li class="active">Pro Design Panel</li>
                                <li class="active">15-minute support</li>
                                <li>Unlimited Emails</li>
                                <li>24/7 Security</li>
                            </ul>
                        </div>
                        <div class="pricing-footer">
                            <a href="#" class="main-button">Purchase Now</a>
                        </div>
                    </div>
                </div>
               
                <div class="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div class="pricing-item">
                        <div class="pricing-header">
                            <h3 class="pricing-title">Advanced</h3>
                        </div>
                        <div class="pricing-body">
                            <div class="price-wrapper">
                                <span class="currency">$</span>
                                <span class="price">42.00</span>
                                <span class="period">monthly</span>
                            </div>
                            <ul class="list">
                                <li class="active">250 GB space</li>
                                <li class="active">5000 GB transfer</li>
                                <li class="active">Pro Design Panel</li>
                                <li class="active">15-minute support</li>
                                <li class="active">Unlimited Emails</li>
                                <li class="active">24/7 Security</li>
                            </ul>
                        </div>
                        <div class="pricing-footer">
                            <a href="#" class="main-button">Purchase Now</a>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </section>
    
</div>
    )
}

export default Pricing_Plan;


