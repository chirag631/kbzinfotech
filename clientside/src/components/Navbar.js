import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom'
import haviicon from "../havi.jpg";
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor:"#fff"
  },
  title: {
    marginLeft:5,
    color:"#000",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  color:{
    color:"#fa6f67",
    textDecoration:'none'
  },
  logo:{
    color:"#000",
    textDecoration:'none'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     <Link className={classes.color}  to={{pathname:"/Signup"}} >
            <MenuItem onClick={handleMenuClose}>Signup
              </MenuItem>
       </Link>  
       <Link className={classes.color}  to={{pathname:"/login"}} >
           <MenuItem onClick={handleMenuClose}>
              Login
              </MenuItem>
           </Link> 
           
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link className={classes.color}  to={{pathname:"/Signup"}} >
            <MenuItem onClick={handleMenuClose}>Signup
              </MenuItem>
       </Link>  
       <Link className={classes.color}  to={{pathname:"/login"}} >
           <MenuItem onClick={handleMenuClose}>
              Login
              </MenuItem>
           </Link> 
          
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.grow}> 
        <Toolbar>
        <Link to="/"className={classes.logo}>
      <img src="https://myuserbucket35.s3.us-east-2.amazonaws.com/public/Untitled-1.png" alt="pic"  height="60" width='150' />
            <Typography className={classes.title} variant="h6" noWrap>
            
          </Typography>
          </Link>
          
          <div className={classes.grow} />
          <IconButton
            >
          <Link to='/' >
          <HomeIcon className={classes.color} fontSize="large" />
          </Link>
          </IconButton>
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <PersonIcon className={classes.color}/>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              className={classes.color}
            >
              
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}