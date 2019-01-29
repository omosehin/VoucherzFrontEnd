import React from "react";
import PropTypes from "prop-types";
import { withRouter,Switch, Route, Redirect } from "react-router-dom";
 import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";


import dashboardRoutes from "../../routes/dashboard";

import dashboardStyle from "../../assets/jss/material-dashboard-react/layouts/dashboardStyle";

 import image from "../../assets/img/sidebar-2.jpg";
import logo from "../../assets/img/logo.png";
 import CreateBulkVoucherDashboard from "../../View/Vourcher/CreateVoucher/CreateBulkVoucherDashboard/CreateBulkVoucherDashboard";
 import CreateSingleVoucherDashboard from "../../View/Vourcher/CreateVoucher/CreateSingleVoucherDashboard/CreateSingleVoucherDashboard";


const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
        <Route  exact path="/Bulk" component={CreateBulkVoucherDashboard}/>
        <Route  exact path="/Standalone" component={CreateSingleVoucherDashboard}/>

        
  </Switch>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
     return this.props.location.pathname !== "/maps";
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
       const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={dashboardRoutes}
          logoText={"Voucherz"}
          logo={logo}
           image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(dashboardStyle)(App));