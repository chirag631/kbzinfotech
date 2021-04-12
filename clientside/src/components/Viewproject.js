import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom'
import Navbaruser from './Navbaruser'
import Sidebar from './Sidebar';
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
    flexGrow: 1,
    justify:'center',
    textAlign:'center',
    marginTop:20,
    
  },
  root1:{
    minHeight:350
  },
  media: {
    height:250,
    width:'100%'
  },
  
  margin:{
    marginBottom:theme.spacing(2)
  },
}));
export default function Users() {
  const classes = useStyles();
  const [data1,setdata]=useState([]);
  
  const userid=sessionStorage.getItem("userid");
  const token=sessionStorage.getItem("token");
  //const userid=localStorage.getItem("userid");
//  const token=localStorage.getItem("token");
  let logedin=true;
  if(token==null){
      logedin=false;
      }
      const [logdin,setLogdin]=useState(logedin);

console.log(userid)
  useEffect(() => {
    const loadUsers = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({userid}),
    };
      const res= await fetch("/viewprojectdata",requestOptions);
      const body=await res.json();
      console.log(body)    
      setdata(body.studentData);
    };
    loadUsers();
  }, []);
  if(logdin===false){
    return <Redirect to="/login"/>;
}
  function FormRow(card,index) {
    return (
      
      <React.Fragment>
        
          <Grid item xl={2} lg={3} md={4} xs={12} sm={6} spacing={3} >
        
          <Card  className={classes.root1}>
          <ThemeProvider theme={theme}>
      <CardActionArea>
      
        <img className={classes.media} src={`https://myuserbucket35.s3.us-east-2.amazonaws.com/uploads/${card.image}`}/>

        <CardContent>
        
        <Typography gutterBottom color="primary" variant="h5" component="h2">
        
              {card.title}
          </Typography>
           </CardContent>
      </CardActionArea>
      </ThemeProvider>
        </Card>
        
        </Grid>
         
      </React.Fragment>
    );
  }
 
  console.log(data1);
  return (
      <div>
          <Navbaruser />
    <div className={classes.root} >
    <ThemeProvider theme={theme}>
    <Grid container color="primary" justify="center" direction="row">
      <Grid xs={12} container Items justify="flex-start" >
        <Grid xs={5} sm={4} md={3} lg={2} xl={2} Items >
          <Sidebar />
                
                   </Grid>
                   <Grid xs Items>
                 
          <Grid container justify="center">
          {data1.length==0 && 
        
        <Grid item xl={2} lg={3} md={4} xs={12} sm={6} spacing={3} >
        
          <Card  >
      
        <CardContent>
        
        <Typography gutterBottom color="primary" variant="h5" component="h2">
        
              Project Not Created
          </Typography>
           </CardContent>
      
        </Card>
        
        </Grid>
        
        }  
        <Grid container item xs={12} spacing={4} justify="flex-start">
        
            {data1.map(FormRow)}
        </Grid>
      </Grid>
      </Grid>
      </Grid>
  
      </Grid>
      </ThemeProvider>
    </div>
    </div>
  );
}