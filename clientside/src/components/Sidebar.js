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
  const Sidebar = () =>{
    const classes=useStyles();    

    return(
      <div>
        <Paper >
        <List component="nav"  aria-label="mailbox folders">
       
      <Link className={classes.color}  to={{pathname:"/Homepage"}} >
      <ListItem button>
        <ListItemText primary="Homepage" />
      </ListItem>
      </Link>
      <Divider light />
      <Link className={classes.color}  to={{pathname:"/Updateprofile"}} >
      <ListItem button>
        <ListItemText primary="Update Profile" />
      </ListItem>
      </Link>
      <Divider light />
      <Link className={classes.color}  to={{pathname:"/Addproject"}} >
      <ListItem button>
        <ListItemText primary="Add Project" />
      </ListItem>
      </Link>
      <Divider light />
      <Link className={classes.color}  to={{pathname:"/Viewproject"}} >
      <ListItem button>
        <ListItemText primary="View Project" />
      </ListItem>
      </Link>
      <Divider light />
      <Link className={classes.color}  to={{pathname:"/logout"}} >
      <ListItem button>
        <ListItemText primary="Logout" />
      </ListItem>
      </Link>
    </List>
      
    </Paper>
   </div>
    )
}

export default Sidebar;


