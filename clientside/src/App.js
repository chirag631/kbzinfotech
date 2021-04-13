import Home from './components/Home';
import Login from './components/Login'
import Users from './components/Users'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Logout from './components/Logout'
import Addproject from "./components/Addproject"
import Updateprofile from './components/Updateprofile'
import Viewproject from './components/Viewproject';

import './assets/css/bootstrap.min.css';
import './assets/css/flex-slider.css'
import './assets/css/font-awesome.css'
import './assets/css/templatemo-softy-pinko.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#ffffff"
    },
    
  }
});

function App() {
  
  return (
    
<div >  
    <Router >
      <Switch>
        <Route exact path="/" component={Home} />
        
        
      </Switch>
  </Router>
 
  </div>
  
  );
}

export default App;