import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import CustomInput from "../CustomInput/CustomInput";
import SignOut from "../../../../AuthenticationAuth/SignOut"



import Button from "../CustomButtons/Button";

import headerLinksStyle from "../../assets/jss/material-dashboard-react/components/headerLinksStyle";

class HeaderLinks extends React.Component {
  state = {
    results: [],
    loading: true,
    open: false
  };
  componentDidMount(){
    this.performSearch();
  }

  performSearch=(query='')=>{
    fetch()
    .then(response=>response.json())
    .then(responseData =>{
      this.setState({
        results:responseData.results,
        loading:false
      });
    })
    .catch(error=>{
      console.log('Error fetching and parsing data',error)
    })
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
       
        <Button
        style={{marginRight:'20px'}}
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Person"
          className={classes.buttonLink}
        >
           <SignOut/>
          
        </Button>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
