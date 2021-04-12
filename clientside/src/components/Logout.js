import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fa6f67',
      contrastText: '#fff',
    },
    
  },
});
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign:'center',
        color:'#fa6f67',
      },
      color:{
        color:"#fff",
        textDecoration:'none'
      },
  }));
const Logout = () =>{
const classes=useStyles(); 
//localStorage.removeItem("token");
//localStorage.removeItem("userid");
//localStorage.removeItem("username");
sessionStorage.removeItem("token");
sessionStorage.removeItem("userid");
sessionStorage.removeItem("username");
    return(
      <div>
      <Navbar/>
       <div className={classes.root}>
       <ThemeProvider theme={theme}>
        <h1>Logout Successfully</h1>
        <Button variant="contained"color="primary"  >
            <Link className={classes.color} to="/login">Login Again</Link>                    
        </Button>
        </ThemeProvider>
      </div> 
      </div>
    )
}
export default Logout;