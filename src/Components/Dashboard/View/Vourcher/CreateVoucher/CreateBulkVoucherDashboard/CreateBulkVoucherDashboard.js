import React, {Component} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../../../components/Grid/GridItem";
import GridContainer from "../../../../components/Grid/GridContainer";
// import Table from "../../components/Table/Table";
import Card from "../../../../components/Card/Card";
import CardHeader from "../../../../components/Card/CardHeader";
 import CardBody from "../../../../components/Card/CardBody";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardFooter from "../../../../components/Card/CardFooter";
import Store from "@material-ui/icons/Store";
import CardIcon from "../../../../components/Card/CardIcon";
// import Icons from "../View/views/Icons/Icons";
import Dashboard from "@material-ui/icons/Dashboard"
import DiscountVoucherForm from "../DiscountVoucher/DiscountVoucherForm";

const styles = theme => ({
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  centerGridContent:{
           textAlign:'center'
       },
    
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  flexContainer : {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    '&:hover': {
      color: 'none',
    },
  },
  Gridresponsive: {
    [theme.breakpoints.down('sm')]: {
        display:'flex',
        flexDirection:'column',
      }
  },
});

class TableList extends Component {
    state = {
        expanded: null,
        showComponent: false,

      };
      
      handleChangeExpanded = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };
      
      openthis=()=>{
        this.setState({
          showComponent: true,
        });
      }
      
     
    render(){
        const { classes } = this.props;
        const { expanded } = this.state;
        return(
<div>  
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
          <CardHeader color="primary">
            <h1 style={{color:'white'}}>Create Bulk Voucher</h1>
          </CardHeader>
          </Card>
          </GridItem>
          </GridContainer>

         
        <GridContainer>
          <GridItem xs={12} sm={12} lg={12}>
          <ExpansionPanel expanded={true} onChange={this.handleChangeExpanded('panel2')}>
          <ExpansionPanelSummary >
            <Typography className={classes.heading}>Choose Voucher Type</Typography>
          </ExpansionPanelSummary>
         <ExpansionPanelDetails className={classes.Gridresponsive}>
         
         <GridItem xs={12} sm={12} md={4} className={classes.centerGridContent}>
              <Card>
                  <CardHeader className={classes.centerGridContent}>
                      <CardIcon color="primary" style={{marginLeft:"20px"}}>
                      <Dashboard/>
                      </CardIcon>
           
                  </CardHeader>

                  <CardBody className={classes.centerGridContent}>
                      <h2>Gift Vourcher</h2>
                      </CardBody>
                  <CardFooter className={classes.centerGridContent}>
                     <p style={{align:'left'}}>A <b>pre-paid gift card</b>.Two types available:
                      <b>redeemable once</b> e.g pre-paid gift cards<br/>
                      <b>redeemable multiple times</b> against any of your product or service given a positive balance </p>
                  </CardFooter>
              </Card>
          </GridItem> 
           <GridItem xs={12} sm={12} md={4} className={classes.centerGridContent}>
            <Card>
         <CardHeader className={classes.centerGridContent}>
             <CardIcon color="primary" style={{marginLeft:"20px"}}>
             <Dashboard/>
            </CardIcon>
           
             </CardHeader>
            <CardBody className={classes.centerGridContent}>
                 <h2>Value Vourcher</h2>
             </CardBody>
             <CardFooter className={classes.centerGridContent}>
                 <p> Value Vouchers are <b>virtual PINs</b> that could be redeemed for other campaigns around Airtime, Paycode etc.</p>
             
             </CardFooter>
             </Card>
         </GridItem>
        
         <GridItem xs={12} sm={12} lg={4}
         onClick={this.openthis}
         >
          
            <Card>
              <CardHeader >
                
            <CardIcon color="primary" >
               <Store />
            </CardIcon>
               
               
              </CardHeader>
              <CardBody className={classes.centerGridContent}>
                 <h2 >Discount Voucher </h2>
             </CardBody>
             <CardFooter className={classes.centerGridContent}>
                 <p>Discount coupon-represents one of 3 discount types: one of 3 <br/>
                 discount types: <b>amount</b> (e.g N2000 off), <b>percentage</b> (e.g 30% off) or <b>unit</b> ( e.g 3 bags of rice)</p>
             </CardFooter>
            </Card>
           
            </GridItem>
           
           
          
          </ExpansionPanelDetails>
          
        <GridItem xs={12} sm={12} md={12} className={classes.centerGridContent}>
            
              {this.state.showComponent ?
           <DiscountVoucherForm/> :
           null
        }
          
          </GridItem> 
        
        </ExpansionPanel>
       
        </GridItem>  
        
        </GridContainer>

       
       
    </div>
        );
    }
 
}

export default withStyles(styles)(TableList);










