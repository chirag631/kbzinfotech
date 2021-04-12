import Home from './components/Home';
import Login from './components/Login'
import Users from './components/Users'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Logout from './components/Logout'
import Addproject from "./components/Addproject"
import Updateprofile from './components/Updateprofile'
import Viewproject from './components/Viewproject';
import Footer from './components/Footer'

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
    <ThemeProvider theme={themeLight}>
    <CssBaseline />
<div >  
    <Router >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login"  component={Login} />        
        <Route path="/Homepage" component={Homepage} />
        <Route path="/logout"  component={Logout} />
        <Route path="/Signup"  component={Signup} />
        <Route path="/Homepage" component={Homepage} />
        <Route path="/Addproject" component={Addproject}/>
        <Route path="/Updateprofile" component={Updateprofile}/>
        <Route path="/Viewproject" component={Viewproject}/>
        <Route path="/:name" component={Users} />
      </Switch>
  </Router>
  <Footer />
  </div>
   </ThemeProvider>
  );
}

export default App;