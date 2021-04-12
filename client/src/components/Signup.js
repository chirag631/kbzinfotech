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
    <Navbar />
    
    <Grid container   justify="center" >
    <Grid container  item xs={12} justify="center">
        <Grid  item xs  
             >
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

    <Grid item xs={12} xl={2} lg={3} md={4}  sm={12}>
    
      <Card  className={classes.root}>
      
        <CardContent>
        <ThemeProvider theme={theme}>
            <Typography gutterBottom variant="h5"className={classes.Typography} component="h1">
               Create an account
            </Typography>
              <form  onSubmit={handleSubmit} encType="multipart/form-data">
        
      <TextField
          className={classes.margin}
          required
          id="outlined-textarea"
          label="Name"
          value={username}
          onChange={handleChangeName}
          fullWidth
          variant="outlined"
        />
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
          name="password"
          type="password"
          value={password}
          onChange={handleChangePassword}
          fullWidth
          variant="outlined"
        />
        <TextField
        required
        className={classes.margin}
          id="outlined-textarea"
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          
          fullWidth
          variant="outlined"
        />
       
      
        <FormGroup >
      
        <FormControlLabel
            control={<Checkbox checked={check}  color='primary' onChange={handleChange} name="check" />}
            label={<Typography variant="caption" color="textSecondary">I read and accept terms and conditions</Typography>}
          />
      </FormGroup>
    
    
          <Button 
          type="submit"  color="primary"
          className={classes.button} variant="contained" 
          disabled={!name} disabled= {!email}
          disabled={!password} disabled= {!confirmPassword} 
          
          >
        Create an account
      </Button>
      
      </form>
    
    
          
    <Typography color="primary" >
    Already have an account?
        </Typography>

    <Typography color="primary" >
          <Link to="/login" className={classes.color}>
            Login
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