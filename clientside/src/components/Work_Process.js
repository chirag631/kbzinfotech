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
  const Work_Process = () =>{
    const classes=useStyles();    

    return(
      

<div>
<section class="mini" id="work-process">
        <div class="mini-content">
            <div class="container">
                <div class="row">
                    <div class="offset-lg-3 col-lg-6">
                        <div class="info">
                            <h1>Work Process</h1>
                            <p>Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.</p>
                        </div>
                    </div>
                </div>

                
                <div class="row">
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" class="mini-box">
                            <i><img src="/images/work-process-item-01.png" alt=""/></i>
                            <strong>Get Ideas</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" class="mini-box">
                            <i><img src="/images/work-process-item-01.png" alt=""/></i>
                            <strong>Sketch Up</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" class="mini-box">
                            <i><img src="/images/work-process-item-01.png" alt=""/></i>
                            <strong>Discuss</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" class="mini-box">
                            <i><img src="/images/work-process-item-01.png" alt=""/></i>
                            <strong>Revise</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" class="mini-box">
                            <i><img src="/images/work-process-item-01.png" alt=""/></i>
                            <strong>Approve</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-6">
                        <a href="#" class="mini-box">
                            <i><img src="/images/work-process-item-01.png" alt=""/></i>
                            <strong>Launch</strong>
                            <span>Godard pabst prism fam cliche.</span>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</div>
    )
}

export default Work_Process;


