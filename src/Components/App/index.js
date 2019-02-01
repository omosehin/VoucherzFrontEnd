import React, {Component} from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
//  import Navigation from '../../AuthenticationAuth/Navigation/AppBar';
  import SignUpPage from '../../AuthenticationAuth/SignUp';
  import SignInPage from '../../AuthenticationAuth/SignIn';
// import PasswordForgetPage from '../../AuthenticationAuth/PasswordForget';
 import HomePage from '../../AuthenticationAuth/HomePage/Hompage';
// import AccountPage from '../../AuthenticationAuth/Account';
// import AdminPage from '../../AuthenticationAuth/Admin';
 import * as ROUTES from '../../constants/routes';
// import AppBar from '../../Components2/Navigation/AppBar';
// import { withAuthentication } from '../../AuthenticationAuth/Session';
import Dashboard from '../../Components/Dashboard/Layout/Dashboard/Dashboard';
import PasswordForgetPage from '../../AuthenticationAuth/PasswordForget';



class App extends Component{

  render(){
   
    return(
<Router>
    <div>
     <Route exact path={ROUTES.LANDING} component={HomePage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} /> 
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/> 
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route exact path={ROUTES.VOUCHER} component={Dashboard} />
      <Route exact path={ROUTES.TABLE} component={Dashboard} />
      <Route exact path={ROUTES.BULK} component={Dashboard} />
      <Route exact path={ROUTES.STANDALONE} component={Dashboard} />

    </div>
  </Router>
    );
    }
  }

export default App;