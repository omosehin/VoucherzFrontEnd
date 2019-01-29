import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import * as Yup from "yup";
import  {Form}  from "./ForgotPassword";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';




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
          <Grid style={{margin:'50px 16px','width':'90%' }}>
        <div className={classes.container}>
        <Grid item xs={12}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Reset Password</h1>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
            />
          </Paper>
          </Grid>
        </div>     
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);