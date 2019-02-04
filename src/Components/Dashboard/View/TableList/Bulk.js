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
import axios from 'axios';
import Button from '@material-ui/core/Button';
import  ViewsDetails from '../viewsDetails';
// import TableSearch from './TableSearch/FormSearch';


class StandalonTable extends Component{
    state={
      newUser:[],
      isLoading:true,
      error:null,
      search:''
    };

   
    updateSearch=e=>{

      this.setState({search:e.target.value.substr(0, 20)});
    }


        componentDidMount(){
        axios.get("http://demo5882170.mockable.io/create",{
          responseType: 'json'
      })
        .then(response=>{
          const newUser = response.data;
            this.setState({
              newUser,
              isLoading:false
            })
            console.log(response)
        })
        .catch(error=>this.setState({
          error,isLoading:false
        }));
    }



    render(){
        const { classes } = this.props;
        const { isLoading } = this.state;
        let filteredContacts=this.state.newUser.filter(
          (user)=>{
            return user.voucherType.toLowerCase().indexOf(
              this.state.search.toLowerCase()) !==-1;
          }
        );

        
        return(
          <Paper className={classes.root}>
            <input type='text'
            value={this.state.search}
            onChange={this.updateSearch}
            placeholder={}/>
          {!isLoading ?(<Table className={classes.table}>
            <TableHead>
              <TableRow style={{backgroundColor:'#972FB0',color:'white'}}>
                <TableCell  style={{color:'white',fontSize:'15px'}}>Dessert</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Calories</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Calories</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Fat</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Carbs</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Protein</TableCell>
                <TableCell align="right" style={{color:'white',fontSize:'15px'}}>Quantity</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
            
              {filteredContacts.map(user => (
                <TableRow key={user.merchantId}>
                <TableCell  style={{fontSize:'12px'}}>{user.merchantId}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.voucherType}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.voucherType}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.startDate}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.expirationDate.length<5 ? user.expirationDate:user.expirationDate.substring(0,6)+'...'}</TableCell>
                  <TableCell align="right"  style={{fontSize:'12px'}}>{user.status}</TableCell>
                  <TableCell align="center"  style={{marginLeft:'-12px'}}>
                      
                      <ViewsDetails
                       voucherType={user.voucherType}
                       startDate={user.voucherType}
                       expirationDate={user.startDate}
                       code={user.code}
                       status={user.status}
                       category={user.status}
                      />
                
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
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
 
  },
  table: {
    minWidth: 700,

  },
});




export default withStyles(styles)(StandalonTable)
  