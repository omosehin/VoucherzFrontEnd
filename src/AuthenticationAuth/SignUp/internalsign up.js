import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter,Redirect} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {compose} from 'recompose';
import AppBar from '../Navigation/AppBar';
import axios from 'axios'
import FormHelperText from '@material-ui/core/FormHelperText';

import {
FIRSTNAME_MAX_LENGTH,FIRSTNAME_MIN_LENGTH,
LASTNAME_MAX_LENGTH,LASTNAME_MIN_LENGTH,
PASSWORD_MAX_LENGTH,PASSWORD_MIN_LENGTH,
EMAIL_MAX_LENGTH
} from '../constants';

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



class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      comfirm_password:'',
      companySize:'',
      isLoggingIn: false,
        error:'',
        
    };

  }
  // onChange = (e) => {
  //   // Because we named the inputs to match their corresponding values in state, it's
  //   // super easy to update the state
  //   const state = this.state
  //   state[e.target.name] = e.target.value;
  //   this.setState(state);

  // }

  validateLastname = (firstName) => {
    if(firstName.length < LASTNAME_MIN_LENGTH) {
        return {
            validateStatus: 'error',
            errorMsg: `firstName is too short (Minimum ${FIRSTNAME_MIN_LENGTH} characters needed.)`
        }
    } else if (firstName.length > FIRSTNAME_MAX_LENGTH) {
        return {
            validationStatus: 'error',
            errorMsg: `firstName is too long (Maximum ${FIRSTNAME_MAX_LENGTH} characters allowed.)`
        }
    } else {
        return {
            validateStatus: 'success',
            errorMsg: null
        }
    }
}
validateName = (lastName) => {
  if(lastName.length < LASTNAME_MIN_LENGTH) {
      return {
          validateStatus: 'error',
          errorMsg: `Name is too short (Minimum ${LASTNAME_MIN_LENGTH} characters needed.)`
      }
  } else if (lastName.length > FIRSTNAME_MAX_LENGTH) {
      return {
          validationStatus: 'error',
          errorMsg: `Name is too long (Maximum ${LASTNAME_MAX_LENGTH} characters allowed.)`
      }
  } else {
      return {
          validateStatus: 'success',
          errorMsg: null,
        };            
  }
}

validatePassword = (password) => {
  if(password.length < PASSWORD_MIN_LENGTH) {
      return {
          validateStatus: 'error',
          errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`
      }
  } else if (password.length > PASSWORD_MAX_LENGTH) {
      return {
          validationStatus: 'error',
          errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
      }
  } else {
      return {
          validateStatus: 'success',
          errorMsg: null,
      };            
  }
}



validateEmail = (email) => {
  if(!email) {
      return {
          validateStatus: 'error',
          errorMsg: 'Email may not be empty'                
      }
  }

  const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
  if(!EMAIL_REGEX.test(email)) {
      return {
          validateStatus: 'error',
          errorMsg: 'Email not valid'
      }
  }

  if(email.length > EMAIL_MAX_LENGTH) {
      return {
          validateStatus: 'error',
          errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
      }
  }
  

  return {
      validateStatus: null,
      errorMsg: null
  }
}

  handleInputChange=(event, validationFun)=> {
    const target = event.target;
    const inputName = target.name;        
    const inputValue = target.value;

    this.setState({
        [inputName] : {
            value: inputValue,
            ...validationFun(inputValue)
        }
    });
}


  onSubmit = (e) => {
    e.preventDefault();
    document.getElementById("buttonShipper").innerHTML = "signing you up...";
    var apiBaseUrl = 'http://172.20.20.21:8085/api/auth/signup';

    const { firstName, lastName, email,companySize, password,history} = this.state;
    
    let data = {
        firstName,
        lastName,
        email,
        password,
        companySize,
        
       
    }

    console.log(JSON.stringify(data));
    
    axios.post(apiBaseUrl, data, {
        data: JSON.stringify(data),
    }).then((response) => {

        //access the results here....
        // alert(result);
        console.log(response);
          if(response.data){
            console.log(response);
             alert(response.data);
            alert("Created");
           
             document.getElementById("buttonShipper").innerHTML = "success";
             this.props.history.push(ROUTES.SIGN_IN)

            
          }
        // else{
        //     // alert(response.data.error.message);
        //     document.getElementById("buttonShipper").innerHTML = "failed try again...";
        // }
    })
    .catch=((error)=> {
        alert("failed to complete");
        document.getElementById("buttonShipper").innerHTML = "failed try again...";
        console.log('error got' + error);
    });   
}
isFormInvalid=()=>{
  return !(this.state.firstName.validateStatus === 'success' &&
      this.state.lastName.validateStatus === 'success' &&
       this.state.email.validateStatus === 'success' &&
       this.state.password.validateStatus === 'success'
  );
}


  render() {
    //  const {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   comfirm_password,
    //   companySize,
    //   error,
    //  } = this.state;
    const { classes } = this.props;


    //  const isInvalid =
    //    password !== comfirm_password ||
    //    password === '' ||
    //    firstName === '' ||
    //    email=== '' ||
    //    lastName === ''||
    //    companySize ==='';
       
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
     

      <InputLabel htmlFor="firstName">
      First Name

      </InputLabel>

         <Input
          error={this.state.firstName.errorMsg}

          validateStatus={this.state.firstName.validateStatus}
         id="text"
          name="firstName"
          value={this.state.firstName.value}
          helperText="Full width!"
          onChange={(event) => this.handleInputChange(event, this.validateName)}   
          type="text"
          placeholder="First Name"
          autoComplete="on"
          autoFocus
          
        />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
        

      <InputLabel htmlFor="secondname">Last Name</InputLabel>
        <Input
        validateStatus={this.state.lastName.validateStatus}
        error={this.state.firstName.errorMsg}
          name="lastName"
          value={this.state.lastName.value}
          onChange={(event) => this.handleInputChange(event, this.validateLastname)}   
          type="text"
          placeholder="Last Name"
          autoComplete="on"
          autoFocus
        />
        </FormControl>
        <FormControl margin="normal" fullWidth>
       

        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input
         validateStatus={this.state.email.validateStatus}
         error={this.state.email.errorMsg}
          id="email"
          name="email"
          value={this.state.email.value} 
          onChange={(event) => this.handleInputChange(event, this.validateEmail)}  
          type="email"
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
          validateStatus={this.state.password.validateStatus}
          error={this.state.password.errorMsg}
            name="password"
            value={this.state.password.value} 
            onChange={(event) => this.handleInputChange(event, this.validatePassword)} 
            type="password"
            placeholder="Password"
            autoComplete="current-password" 
            id="password"
          />
          </FormControl>
{/* 
          <FormControl 
              margin="normal" 
             required fullWidth>
                <InputLabel 
                htmlFor="comfirm_password">Comfirm Password</InputLabel>
          <Input
            name="comfirm_password"
            value={this.state.comfirm_password.value} 
            onChange={(event) => this.handleInputChange(event, this.validatePassword)} 
             type="password"
            placeholder="Comfirm Passsword"
            autoComplete="current-password" 
            id="password"
          />
          </FormControl> */}
         
  
          {/* <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="companySize">Company Size</InputLabel>
          <Input
            name="companySize"
            value={this.state.companySize.value} 
            onChange={(event) => this.handleInputChange(event, this.validatePassword)} 
            type="number"
            placeholder="Company Size"
            autoComplete="number"
            autoFocus
  
          />
          </FormControl> */}
          
         
         
          <Button 
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
           id="buttonShipper"
           disabled={this.isFormInvalid()}
            >    
            Sign Up
          </Button>
  
        
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
  export default (SignUpPage);
  export { SignUpForm, SignUpLink };
  
