import React, {Component} from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
// import Navigation from '../../AuthenticationAuth/Navigation/AppBar';
// import LandingPage from '../../AuthenticationAuth/Home';
//  import SignUpPage from '../../AuthenticationAuth/SignUp';
//  import SignInPage from '../../AuthenticationAuth/SignIn';
// import PasswordForgetPage from '../../AuthenticationAuth/PasswordForget';
// import HomePage from '../../AuthenticationAuth/HomePage/Hompage';
// import AccountPage from '../../AuthenticationAuth/Account';
// import AdminPage from '../../AuthenticationAuth/Admin';
//  import * as ROUTES from '../../constants/routes';
// import AppBar from '../../Components2/Navigation/AppBar';
// import { withAuthentication } from '../../AuthenticationAuth/Session';
import Dashboard from '../../Components/Dashboard/Layout/Dashboard/Dashboard';
// import DiscountVoucherForm from '../Dashboard/View/Vourcher/CreateVoucher/DiscountVoucher/DiscountVoucherForm';
// import Toolbar from "../../Toolbar/Toolbar"
// import SideDrawer from '../../SideDrawer/SideDrawer';
// import Backdrop from '../../Backdrop/Backdrop';


class App extends Component{
  state={
      sideDrawerOpen:false
  };
  // drawerToggleClickedHandler=()=>{
  //   this.setState((prevState)=>{
  //     return {sideDrawerOpen:!prevState.sideDrawerOpen};
  //   });
  // };

  // backdropClicked=()=>{
  //   this.setState({sideDrawerOpen:false})
  // };
  render(){
    // let backdrop;

    //     if (this.state.sideDrawerOpen) {
    //       backdrop=<Backdrop click={this.backdropClicked}/>
    // }
    return(
<Router>
    <div style={{height:'100%'}}>
      {/* <Toolbar drawerClickedHandler={this.drawerToggleClickedHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      <main style={{marginTop:'64px'}}>
      <p>This is the page co ntent</p> 
      </main> */}
        {/* <Route exact path={ROUTES.LANDING} component={HomePage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    

     <Navigation/>   */}


      {/* <Route exact path={ROUTES.LANDING} component={HomePage} />
      {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
      {/* <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/> */}
      {/* <Route exact path={ROUTES.HOME} component={HomePage} /> */}
      {/* <Route exact path={ROUTES.ACCOUNT} component={AccountPage} /> */}
      {/* <Route exact path={ROUTES.ADMIN} component={AdminPage} /> */}
    <Dashboard/>

    </div>
  </Router>
    );
    }
  }

export default App;