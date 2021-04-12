import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minHeight:350
  },
    color:{
      color:"#fa6f67",
    },
  media: {
    height:250,
    width:'100%'
  },
  button:{
    backgroundColor:"#192d3e",
    color:"#fff",
    minWidth:300,
    marginTop:5,
    marginBottom:5
  },
 
});

export default function Gridcard(props) {
  const classes = useStyles();
  const {name}=props;
const {image}=props;
    
  return (

    <Card  className={classes.root}>
      <CardActionArea>
      <Link className={classes.color} to={{pathname:`/${name}`}}   >
      <img className={classes.media} src={`https://myuserbucket35.s3.us-east-2.amazonaws.com/users/${image}`}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
                  {name}
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      
    </Card>
  );
}