import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import classes from '../../Components2/Css/Nav.module.css';


const Navigation = () => (
  <div>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
  </div>
);

const NavigationAuth = () => (

    <ul className={classes.NavigationItem}>
      <li>
        <NavLink to={ROUTES.LANDING}>Voucherz</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
);
  const NavigationNonAuth = () => (
    <ul  className={classes.NavigationItem}>
      
      <li>
        <NavLink to={ROUTES.LANDING}>Voucherz</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
      </li>
      
    </ul>

);
export default Navigation;