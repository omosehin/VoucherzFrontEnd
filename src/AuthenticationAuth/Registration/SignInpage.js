import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import * as Yup from "yup";
import { Form } from "./SignIn";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import SignUppage from './SignUppage';
import { Link } from 'react-router-dom'
import {Route, Switch} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ForgotPasswordU from './ForgotPasswordU';



const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    Shadow:0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`,

  },
  container: {
    maxWidth: "200px"
  },
  grid:{
   margin:'100px'
  },
});

const validationSchema = Yup.object().shape({

  firstname: Yup.string("Enter your Firstname")
    .typeError("Enter a Firstname")
    .required("First Name is required"),

   secondname: Yup.string("Enter your Secondname")
    .typeError("Enter a Secondname")
    .required("Second Name is required"),

  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must contain atleast 8 characters")
    .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    const values = { name: "",firstname: "",secondname:"",email: "", confirmPassword: "", password: "" };
    return (
      <React.Fragment>
        <Grid style={{margin:'0 auto','width':'70%' }}>
        <div className={classes.container}>
        <Grid item xs={12}>
          <Paper elevation={1} className={classes.paper}>
            <h1>SignIn</h1>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
            />
          </Paper>
         
          </Grid>
        </div>
        <Grid container spacing={12} center >
        
        <Grid item xs={12} lg={6}>  
        <Typography variant="subtitle1" gutterBottom>
            Dont have an account? 
        </Typography>      
          <Button component={ Link } to="/SignUp"variant="outlined" className={classes.button}>
          SignUp          
          </Button>
        </Grid>
        <Grid item xs={12} lg={6}>  
        <Typography variant="subtitle1" gutterBottom>
            Forgot Password? 
        </Typography>      
          <Button component={ Link } to="/ForgotPassword"variant="outlined" className={classes.button}>        
          Reset Password          
          </Button>
        </Grid>
      </Grid>

        </Grid>
        <Switch>
        <Route path="/SignUp" component={SignUppage} />
        <Route path="/ForgotPassword" component={ForgotPasswordU} />
      </Switch>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);