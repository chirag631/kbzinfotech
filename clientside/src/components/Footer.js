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
    <BottomNavigation
      
      className={classes.root}
    >
<Grid container justify="center" >
        
        
        <Grid item xs={4} >
        <Typography   variant="h7"  gutterBottom >KBZ Infotech © 2021 All rights reserved.</Typography>  
        </Grid>
        <Grid item xs={4}>
        <TwitterIcon  />
        <LinkedInIcon />
        <FacebookIcon  />
        </Grid>
        <Grid item xs={4} >
        <Typography   variant="h7"  gutterBottom >Privacy Policy</Typography> 
        <Typography className={classes.Typography}  variant="h7"  gutterBottom >Warranty Claim</Typography> 
        </Grid>
        
        
    </Grid>
   </BottomNavigation>

  );
}