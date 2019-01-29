import React from 'react';
//import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import { withStyles, withTheme } from '@material-ui/core/styles';
//import background from './background.jpg';
import { Route,Link} from 'react-router-dom';
//import SignInpage from '../Registration/SignInpage';
//import HomePage from '../HomePage/Hompage';
// import ForgotPasswordU from '../Registration/ForgotPasswordU';
//import SignUppage from '../Registration/SignUppage';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const styles = theme => ({

  appBar: {
    position: 'Fixed',
  },
  toolbarTitle: {
    flex: 1,
  },
  NavLinkbutton:{
        display:'flex',
    
        marginLeft: 'auto'
  },
  
  card: {
    marginTop:100,
    maxWidth: 900,
  },
  media: {
    height: 220,
    paddingTop: '56.25%', // 16:9
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },


});



function Navigation(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="default" className={classes.appBar}>
        <Toolbar>
        <NavLink to={ROUTES.LANDING}>
            VOURCHERZ
        </NavLink>     
        <div className={classes.NavLinkbutton}>
        <Button color="primary" variant="outlined">
          <NavLink to={ROUTES.SIGN_UP}>Sign up</NavLink>
          </Button>

          <Button color="primary" variant="outlined">
          <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
          </Button>    
        </div>    
         
         
        </Toolbar>
      </AppBar>
      
   
    </React.Fragment>
  );
}

export default withStyles(styles)(Navigation);