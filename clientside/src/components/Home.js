import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Gridcard from './Gridcard';
import { Typography} from '@material-ui/core';
import Navbar from './Navbar';
import Signup from './Signup';
import Footer from './Footer';
import Homepage from './Homepage';
import About from './About';
import Work_Process from './Work_Process';
import Client_Review from './Client_Review';
import Contact_Us from './Contact_Us';
import Cuonter from './Counter';
import Blogs from './Blogs';
import Pricing_Plan from './Pricing_Plan';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   justify:'center',
    textAlign:'center',
    marginTop:20,
    marginLeft:"10%",
    marginRight:"10%",
    
  },
  
  margin:{
    margin:theme.spacing(2),
    minWidth:150,
  },
  Typography:{
    color:"#fa7068"
  }
 
}));

export default function Home(props) {
  
  const classes = useStyles();
  const [data1,setdata]=useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      const res= await fetch("/register");
      const body=await res.json();
      
      setdata(body.studentData);
    };
    loadUsers();
  }, []);
  
  
  
  return (
    <div>
    
    <Homepage />
    
    <About />
    <Work_Process />
    <Client_Review />
    <Pricing_Plan />
    <Cuonter />
  
    <Blogs />
    <Contact_Us />
    <Footer />
    </div>
  
  );
}