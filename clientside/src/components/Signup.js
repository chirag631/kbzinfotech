import React, { useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
    marginLeft:150
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
    marginBottom:5,
  },
  color:{
    color:"#fa6f67"
  }
    
}));



export default function Signup() {
  const classes = useStyles();
  const [username, setUserName] = useState('');
  const [fetchdata,setFetchdata]=React.useState('');
  const [filename, setFilename] = useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [state, setState] = React.useState({
    check:false
  });
  const handleSubmit = (e) => {
  
  e.preventDefault();
  
  async function fetchData() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({username,email,password,confirmPassword}),
    };

const response = await fetch('/post', requestOptions);
 const body = await response.json();
 alert(body.message);
 setFetchdata(body.message);
  }
  if(password!=confirmPassword){
    alert("password not match with confirmpassword")
  }else if(check==false){
    alert('plese accept term and condition');
  }else{
  fetchData().then(()=>{
  handleClose();
}).catch((e)=>{
   alert(e);
});
}
  
}
console.log(fetchdata);
  const handleClose = () => {
    
    setUserName('');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setState(false)
      
  };

console.log(username)
console.log(email)
console.log(password)
console.log(confirmPassword)
  const handleChangeName = (event) => {
      setUserName(event.target.value);
    };
  const handleChangeEmail = (event) => {
      setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
      setPassword(event.target.value);
    };
    const handleChangeConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    const { check} = state;

  return (
    <div>
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
  );
}