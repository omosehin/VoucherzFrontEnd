import React, {Component} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Spinner from '../../components/Spinner'
import Button from '@material-ui/core/Button';


import axios from 'axios';



class StandalonTable extends Component{
    state={
      newUser:[],
      isLoading:true,
      error:null
    };

    //https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/
    //


        componentDidMount(){
        axios.get("http://172.20.20.17:8080/api/voucher/search/*/gift",{
          responseType: 'json'
      })
        .then(response=>{
          const newUser = response.data;
            this.setState({
              newUser,
              isLoading:false
            })
            console.log(newUser)
        })
        .catch(error=>this.setState({
          error,isLoading:false
        }));
    }




    render(){
        const { classes } = this.props;
        const { isLoading } = this.state;
          
        
        return(
          <Paper className={classes.root}>

          {!isLoading ?(<Table className={classes.table}>
            <TableHead>
              <TableRow style={{backgroundColor:'#972FB0',color:'white'}}>
                <TableCell  style={{color:'white',fontSize:'15px'}}>Id</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>VoucherType</TableCell>
                {/* <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Amount</TableCell> */}
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Start Date</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Expiration Date</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Voucher Code</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Status</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Category</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>value</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}></TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}></TableCell>



              </TableRow>
            </TableHead> 
            <TableBody>
            
              {this.state.newUser.map(user => (
                <TableRow key={user.merchantId}>
                  <TableCell  style={{fontSize:'12px'}}>{user.merchantId}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.voucherType}</TableCell>
                  {/* <TableCell align="right"  style={{fontSize:'12px'}}>{user.amount}</TableCell> */}
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.startDate}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.expirationDate}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.code}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.status}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.category}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.value}</TableCell>
                  <TableCell align="left"  style={{marginLeft:'-12px'}}>
                  <Button variant="contained" className={classes.button}>
                      Enable
                </Button>
                <Button variant="contained" className={classes.button}>
                      Update
                </Button>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
            {/* <p className='lds-ripple'  >{this.state.isLoading }</p> */}
          </Table>) : (
          <Spinner/>)}
        </Paper>
    
        );
    }
} 
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    fontSize:20
  },
  button: {
    margin: theme.spacing.unit,
  },
  table: {
    minWidth: 700,
    fontSize:20
  },
});




export default withStyles(styles)(StandalonTable)
  