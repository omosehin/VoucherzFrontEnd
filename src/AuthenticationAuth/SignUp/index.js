import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
//import { FirebaseContext } from '../Firebase';
// import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
//import '../Css/Registration.css';
import {compose} from 'recompose';
import AppBar from '../../Components2/Navigation/AppBar';
import axios from 'axios'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  SignUpPage:{
    textAlign:'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const SignUpPage = () => (
  <div className={styles.SignUpPage}>
  <AppBar/>
    <h1 style={{textAlign:'center'}}>SignUp</h1>
     <SignUpForm/>
  </div>
);

const INITIAL_STATE = {
  firstName:'',
  lastName:'',
  email: '',
  password: '',
  companySize:"",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }


  onSubmit = event => {
    event.preventDefault();
    const {firstName,lastName,email,password,companySize  } = this.state;
    console.log(firstName,lastName, email, password,companySize );
    
       axios.post("http://192.168.43.245:8085/api/auth/signup",
                  {firstName,lastName, email, password,companySize},
                  {
          headers: {
                       'Content-Type': 'application/json',
                       'Accept':'application/json',
                 },
                  })
                  .then((response) => {
                    console.log(response)
                  })
                  .catch((error) => console.log("Error"))
                  
                  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      companySize,
      error,
    } = this.state;
    const { classes } = this.props;


    const isInvalid =
      password === '' ||
      email === '' ||
      firstname === '' ||
      lastname === ''||
      companySize ==='';
    return (
      
      <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
      <form onSubmit={this.onSubmit} className={classes.form}>
      <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="firstName">First Name</InputLabel>

         <Input
         id="text"
          name="firstName"
          value={firstname}
          onChange={this.onChange}
          type="text"
          placeholder="First Name"
          autoComplete="text"
          autoFocus
          
        />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="secondname">Last Name</InputLabel>
        <Input
          name="lastName"
          value={lastname}
          onChange={this.onChange}
          type="text"
          placeholder="Last Name"
          autoComplete="text"
          autoFocus
        />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input
          id="email"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          autoComplete="email"
          autoFocus
        />
        </FormControl>
        <FormControl 
            margin="normal" 
           required fullWidth>
              <InputLabel 
              htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          autoComplete="current-password" 
          id="password"
        />
        </FormControl>
       

        <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor="secondname">Company Size</InputLabel>
        <Input
          name="companySize"
          value={companySize}
          onChange={this.onChange}
          type="number"
          placeholder="Company Size"
          autoComplete="number"
          autoFocus
        />
        </FormControl>
        
       
       
        <Button 
         type="submit"
         fullWidth
         variant="contained"
         color="primary"
        disabled={isInvalid} >
          Sign Up
        </Button>

        {error && <p>{error.message}</p>}
      </form>
      </Paper>
      </main>
    );
  }
}

const SignUpLink = () => (
  <p style={{textAlign:'center'}}>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
const SignUpForm = compose(
  withRouter,
  withStyles(styles)
)(SignUpFormBase);

  SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default SignUpPage;
export { SignUpForm, SignUpLink };