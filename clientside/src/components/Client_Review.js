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
  const Client_Review = () =>{
    const classes=useStyles();    

    return(
      

<div>

<section class="section" id="testimonials">
        <div class="container">
       
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">What do they say?</h2>
                    </div>
                </div>
                <div class="offset-lg-3 col-lg-6">
                    <div class="center-text">
                        <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
                    </div>
                </div>
            </div>
           

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="team-item">
                        <div class="team-content">
                            <i><img src="/images/testimonial-icon.png" alt=""/></i>
                            <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                            <div class="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">Catherine Soft</h3>
                                <span>Managing Director</span>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="team-item">
                        <div class="team-content">
                            <i><img src="/images/testimonial-icon.png" alt=""/></i>
                            <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                            <div class="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">Kelvin Wood</h3>
                                <span>Digital Marketer</span>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="team-item">
                        <div class="team-content">
                            <i><img src="/images/testimonial-icon.png" alt=""/></i>
                            <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                            <div class="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">David Martin</h3>
                                <span>Website Manager</span>
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

export default Client_Review;


