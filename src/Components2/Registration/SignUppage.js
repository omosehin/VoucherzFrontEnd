import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import * as Yup from "yup";
import { Form } from "./SignUp";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SignInpage  from './SignInpage';
import { Link } from 'react-router-dom'
import {Route, Switch} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './Registration.css';



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
            <h1 className="SignUp">SignUp</h1>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
            />
          </Paper>
          </Grid>
        </div>
        <Typography variant="subtitle1" gutterBottom>
            Already have an account? 
        </Typography>
        <Button component={ Link } to="/SignIn"variant="outlined" className={classes.button}>
        Login
      </Button>
        </Grid>
        <Switch>
        <Route path="/SignIn" component={SignInpage} />
      </Switch>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);