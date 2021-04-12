import React, { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link} from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';
import { TextField } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import {Redirect} from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navbar from './Navbar';
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
    minWidth:300,
    textAlign:'center',
    borderRadius:'5px',
    
    marginTop:5
  },
  root1:{
      marginTop:150,
      marginLeft:150,
    },
  media: { 
    height:200,
    width:400
  }, 
  Typography:{
    marginTop:100,
    marginBottom:30,
  },
  
  Typography1:{
    marginTop:10,
    marginBottom:10

  },
  color:{
    color:"#fa7068"
  },
  margin: {
    '& > *': {
      marginBottom: theme.spacing(1),
    },
  },
  margin1:{
    marginBottom:20
  },

    button:{
      minWidth:200,
      marginTop:5,
      marginBottom:5
    },
    
}));

export default function Login() {
  //const token=localStorage.getItem("token");
  const token=sessionStorage.getItem("token");
  
  let logedin=true;
  if(token==null){
      logedin=false;
      }

      const emaill=localStorage.getItem("email");
      const pass=localStorage.getItem("password");
      let remember=true;
      if(emaill==null && pass==null){
        remember=false
    
      }
      
  const [logdin,setLogdin]=useState(logedin);
  const classes = useStyles();
  const [email, setEmail] = React.useState(emaill);
  const [password, setPassword] = React.useState(pass);
  const [state, setState] = React.useState({
    check:remember
  });
  

const handleSubmit = (e) => {
  e.preventDefault();

  if(state.check==true){
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
  }
  else{
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }

  async function fetchData() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({email,password}),
    };
  const response = await fetch('/login', requestOptions);
  const body = await response.json();
  alert(body.msg);
 // localStorage.setItem("token","cthcghchjvyjfthdtdd");
  //localStorage.setItem("userid",body.userid);
  //localStorage.setItem("username",body.username);

  sessionStorage.setItem("token","cthcghchjvyjfthdtdd")
  sessionStorage.setItem("userid",body.userid)
  sessionStorage.setItem("username",body.username)
  
  setLogdin(body.status);
  
  }  
    
    fetchData().
      catch((e)=>{
     alert("invalid email");
  }); 
}
  const handleChangeEmail = (event) => {
      setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
      setPassword(event.target.value);
    };
    
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    const { check} = state;
    
    
    if (logdin == true) {
      
      return <Redirect  to="/Homepage" />;
    }
const abcd=localStorage.getItem("username");
console.log(abcd);
  return (
    <div>
    <Navbar />
      <Grid container   justify="center" >
      
        <Grid container item xs={12} justify="center">
        
        <Grid item xs >
        <div className={classes.root1} >
                 <CardMedia
          className={classes.media}
          image="https://myuserbucket35.s3.us-east-2.amazonaws.com/public/Untitled-1.png"
          title="HAVI"
        />
        <CardContent >
          
          
          <Typography gutterBottom   variant="h3" component="h2">
          
          We build solutions that fit any Industry and Budget. 
          
          
          </Typography>
          <Typography gutterBottom   variant="h3" component="h2">
          
          
          We’re a team of 50+ and growing, with half decades of experience. 
          
          </Typography>

        </CardContent>
      </div>
      
    </Grid>

    <Grid item xs={12} xl={2} lg={3} md={4} sm={12}  >
      <Card  className={classes.root} >
        <CardContent>
            <Typography gutterBottom variant="h5"className={classes.Typography} component="h1">
               Login User
            </Typography>
              <form  onSubmit={handleSubmit} >
        <TextField
        required
        className={classes.margin}
          id="outlined-textarea"
          label="Email"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          fullWidth
          variant="outlined"
        />
        <TextField
        className={classes.margin}
        required
          id="outlined-textarea"
          label="Password"
          type="password"
          value={password}
          onChange={handleChangePassword}
          fullWidth
          variant="outlined"
        />
      <ThemeProvider theme={theme}>    
        <FormGroup >
      
      <FormControlLabel
          control={<Checkbox checked={check}  color='primary' onChange={handleChange} name="check" />}
          label={<Typography variant="caption" color="textSecondary">Remember Me</Typography>}
        />
    </FormGroup>

    
          <Button 
          type="submit"  color="primary"
          className={classes.button} variant="contained" 
          disabled={!email} disabled= 
 {!password}
          >
        Login
      </Button>
      </ThemeProvider>
      </form>

      <Typography className={classes.Typography1} >
      <Divider /> OR<Divider />
        </Typography>
        <ThemeProvider theme={theme}>
          <div>
        <Button color="primary"
          className={classes.button} variant="contained" 
          >
        Login with Google
      </Button></div>
      <div className={classes.margin1}>
      <Button color="primary"
          className={classes.button} variant="contained" 
          >
        Login With Facebook
      </Button>
      </div>
      
      <Typography color="primary" >
      Don't Have an account? 
        </Typography>
      
      <Typography color="primary" >
          <Link to="/Signup" className={classes.color}>
            Create an account
          </Link>  
          </Typography>
          </ThemeProvider>
        </CardContent>
          </Card>
      
        </Grid>
          
        </Grid>
        
      </Grid>
      </div>
 
  );
}