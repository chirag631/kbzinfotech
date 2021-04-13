import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
      marginTop:10,
    width: '100%',
    backgroundColor:"#16cc9b",
    alignItems:"center",
    textAlign:'center',
    color:"#fff"
  },
  Typography:{
      marginLeft:10
  }
  

});

export default function Footer() {
  const classes = useStyles();
 

  return (
    <div>
    <footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <ul class="social">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa fa-rss"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <p class="copyright">Copyright &copy; 2021 KBZ Infotech </p>
            </div>
        </div>
    </div>
</footer>
</div>
  );
}