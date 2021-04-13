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
  const Blogs = () =>{
    const classes=useStyles();    

    return(
      

<div>
<section class="section" id="blog">
        <div class="container">
           
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">Blog Entries</h2>
                    </div>
                </div>
                <div class="offset-lg-3 col-lg-6">
                    <div class="center-text">
                        <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                    </div>
                </div>
            </div>
          

            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="blog-post-thumb">
                        <div class="img">
                            <img src="/images/blog-item-01.png" alt=""/>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <a href="#">Vivamus ac vehicula dui</a>
                            </h3>
                            <div class="text">
                               Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.
                            </div>
                            <a href="#" class="main-button">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="blog-post-thumb">
                        <div class="img">
                            <img src="/images/blog-item-02.png" alt=""/>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <a href="#">Phasellus convallis augue</a>
                            </h3>
                            <div class="text">
                                Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.
                            </div>
                            <a href="#" class="main-button">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="blog-post-thumb">
                        <div class="img">
                            <img src="/images/blog-item-03.png" alt=""/>
                        </div>
                        <div class="blog-content">
                            <h3>
                                <a href="#">Nam gravida purus non</a>
                            </h3>
                            <div class="text">
                                Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.
                            </div>
                            <a href="#" class="main-button">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    )
}

export default Blogs;


