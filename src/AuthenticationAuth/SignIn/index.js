import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import * as ROUTES from '../../constants/routes';
import AppBar from '../../Components2/Navigation/AppBar'

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const SignInPage = () => (
  <div>
   <AppBar/>

    <h1 style={{textAlign:'center'}}>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {

    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        if((this.state.password && this.state.email).trim() === "")return;
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
      event.preventDefault();

  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const { classes } = this.props;

    const isInvalid = password === '' || email === '';

    return (
      <main className={classes.main}>
        <CssBaseline />

        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                name="email"
                id="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
                name="email"
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
                id="password"
                autoComplete="current-password"/>
                </FormControl>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
              <Button 
              fullWidth
              variant="contained"
              disabled={isInvalid}
              color="primary"
              className={classes.submit} 
              type="submit">
                Sign In
              </Button>

              {error && <p>{error.message}</p>}
          </form>
        </Paper>
      </main>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withStyles(styles)
)(SignInFormBase);

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default SignInPage;

export { SignInForm };