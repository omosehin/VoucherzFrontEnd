import React,{ Component} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Table from "../../components/Table/Table";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Standalone from "./Standalone"
import Bulk from "./Bulk";

const styles =(theme)=> ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: 20,
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: 20,
    color: theme.palette.text.secondary,
  },
  
});



class TableList extends Component{
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  render(){
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <div >
      <ExpansionPanel expanded={true} onChange={this.handleChange('panel1')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Standalone</Typography>
          </ExpansionPanelSummary>
         
         <Standalone/>        
          
      </ExpansionPanel>

      <ExpansionPanel expanded={true} onChange={this.handleChange('panel2')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Bulk</Typography>
          </ExpansionPanelSummary>
         
         <Bulk/>      
          
      </ExpansionPanel>
      
     
      </div>

    );

  }
}

export default withStyles(styles)(TableList);
