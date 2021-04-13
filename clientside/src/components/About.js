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
  const About = () =>{
    const classes=useStyles();    

    return(
      

<div>
<section class="section padding-top-70 padding-bottom-0" id="features">
<div class="container">
   <div class="row">
       <div class="col-lg-5 col-md-12 col-sm-12 align-self-center" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
           <img src="/images/left-image.png" class="rounded img-fluid d-block mx-auto" alt="App"/>
       </div>
       <div class="col-lg-1"></div>
       <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
           <div class="left-heading">
               <h2 class="section-title">Let’s discuss about you project</h2>
           </div>
           <div class="left-text">
               <p>Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.</p>
           </div>
       </div>
   </div>
   <div class="row">
       <div class="col-lg-12">
           <div class="hr"></div>
       </div>
   </div>
</div>
</section>

<section class="section padding-bottom-100">
<div class="container">
   <div class="row">
       <div class="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
           <div class="left-heading">
               <h2 class="section-title">We can help you to grow your business</h2>
           </div>
           <div class="left-text">
               <p>Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.</p>
           </div>
       </div>
       <div class="col-lg-1"></div>
       <div class="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
           <img src="/images/right-image.png" class="rounded img-fluid d-block mx-auto" alt="App"/>
       </div>
   </div>
</div>
</section>
</div>
    )
}

export default About;


