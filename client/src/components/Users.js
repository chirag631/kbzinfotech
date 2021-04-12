import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useParams} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justify:'center',
    textAlign:'center',
    marginTop:20,
    marginLeft:"10%",
    marginRight:"10%",
    
  },
  root1:{
    minHeight:350
  },
  media: {
    height:250,
    width:'100%'
    
  },
  image:{
    height:200,
    width:'100%',
    borderRadius:"50%"
  },
  Typography:{
    color:"#fa7068"
  },
  color:{
    color:'#ffff'
  },
  margin:{
    marginBottom:theme.spacing(2)
  },
}));
export default function Users(props) {
  const classes = useStyles();
  const [data1,setdata]=useState([]);
  const [image,setimage]=useState('');
  const [age,setAge]=useState('');
  const {name}=useParams();

  console.log(props)
  
  useEffect(() => {
    const loadUsers = async () => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({name}),
    };
      const res= await fetch("/getprojectdata",requestOptions);
      const body=await res.json();
      console.log(body)
      setimage(body.image); 
      setAge(body.age);    
      setdata(body.studentData);
    };
    loadUsers();
  }, []);
  
  function FormRow(card,index) {
    return (
      
      <React.Fragment>
        
          <Grid item xl={2} lg={3} md={4} xs={12} sm={6} spacing={3} >
          
            
          <Card  className={classes.root1}>
      
      <img className={classes.media} src={`https://myuserbucket35.s3.us-east-2.amazonaws.com/uploads/${card.image}`} />
        <CardContent>
        
        <Typography gutterBottom className={classes.Typography} variant="h5" component="h2">
        
              {card.title}
          </Typography>
           </CardContent>
      
        </Card>
        
        </Grid>
         
      </React.Fragment>
    );
  }

  console.log(data1.length);
  return (
    <div>
    <Navbar />
    <div className={classes.root} >
    <Typography className={classes.Typography}  variant="h4"  gutterBottom >PROJECT</Typography> 

    <Grid container justify="center">
     
    
    
    
        <Grid container item xs={12} spacing={4} justify="flex-start">
      <Grid item xl={2} lg={3} md={4} xs={12} sm={6} spacing={3} >
      
      
      <img className={classes.image} src={`https://myuserbucket35.s3.us-east-2.amazonaws.com/users/${image}`} />
        <CardContent>
        
        <Typography gutterBottom  variant="h4" >
        
              {name}
          </Typography>
          <Typography gutterBottom  variant="h6" >
        
          Hello there! My name is {name}, I’m {age} years old. I love coding and this is a portfolio of my work.
          </Typography>
          
           </CardContent>
      
    </Grid>
    {data1.length==0 && 
    <Grid item xl={2} lg={3} md={4} xs={12} sm={6} spacing={3} >
      <Card  >
        <CardContent>
        <Typography gutterBottom className={classes.Typography} variant="h5" component="h2">
              Project Not Created
          </Typography>
          </CardContent>
      </Card>
    </Grid>
    
    }
            {data1.map(FormRow)}
        </Grid>
      </Grid>
    </div>
    </div>
  );
}