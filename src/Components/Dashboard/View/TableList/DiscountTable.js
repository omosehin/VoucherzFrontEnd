import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Spinner from "../../components/Spinner";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ViewsDetails from "../viewsDetails";
// import TableSearchVouchertype from './TableSearchVouchertype/FormSearchVouchertype';
import { CSVLink,CSVDownload  } from "react-csv";


const inputStyle = {
  height: '50px',
  width:'50%'
}
class StandalonTable extends Component {

constructor(){
super()
   this.state = {
    newUser: [],
    isLoading: true,
    error: null,
    searchVouchertype: "",
    searchStartdate: "",
    filterData: {}
  };
  this.download = this.download.bind(this)

}
 

  updateSearchVouchertype = e => {
    this.setState({ searchVouchertype: e.target.value.substr(0, 20) });
  };

  componentDidMount() {
    axios
      .get("http://demo5882170.mockable.io/create", {
        responseType: "json"
      })
      .then(response => {
        const newUser = response.data;
        this.setState({
          newUser,
          isLoading: false
        });
        console.log(response);
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
  }

  ///////////////////////
  download(){
    this.filteredData = this.state.newUser.map(user => user);
    this.headers = [
      { label: "Merchant ID", key: "merchantid" },
      { label: "Merchant ID", key: "merchantid" },
      { label: "Voucher ID", key: "voucherType" },
      { label:  "StartDate", key:"startDate"},
      { label:  "ExpirationDate", key:"expirationDate"},
      { label: "Voucher Code", key: "Code"},
      { label:  "Status", key:"Status"},
      { label:  "Category", key:"category"},


    ];

     return <CSVLink data={this.filteredData}>Export CSV</CSVLink>;
  }
  //////////////////////////////////

  render() {
    const { classes } = this.props;
    const { isLoading } = this.state;
    let i=1;
    let filteredvoucherType = this.state.newUser.filter(user => {
      return (
        user.voucherType
          .toLowerCase()
          .indexOf(this.state.searchVouchertype.toLowerCase()) !== -1
      );
    });

    return (
      <Paper className={classes.root}>
        <input
          style={inputStyle}
          type="text"
          value={this.state.searchVouchertype}
          onChange={this.updateSearchVouchertype}
          placeholder={" Seach VoucherType"}
        />
 {this.download()}
        {!isLoading ? (
          <Table className={classes.table}>
            <TableHead>
              <TableRow style={{ color: "Purple" }}>
                <TableCell style={{ color: "purple", fontSize: "15px" }}>
                  No
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "purple", fontSize: "15px" }}
                >
                  VoucherType
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "purple", fontSize: "15px" }}
                >
                  Start Date
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "purple", fontSize: "15px" }}
                >
                  Expiration Date
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "purple", fontSize: "15px" }}
                >
                 Voucher Code
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "purple", fontSize: "15px" }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: "purple", fontSize: "15px", display:"none" }}
                >
                  Category
                </TableCell>
                <TableCell
                align="right"
                style={{color:'purple',fontSize:'15px'}}>
                Value
              </TableCell>
              <TableCell
                align="right"
                style={{color:'purple',fontSize:'15px'}}>
                More Info
              </TableCell>
                <TableCell
                  align="left"
                  style={{ color: "purple", fontSize: "15px" }}
                >
                  CSV
                </TableCell>
                <TableCell
                  align="left"
                  style={{ color: "purple", fontSize: "15px" }}
                >
                  View
                </TableCell>
                
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredvoucherType.map(user => (
                <TableRow key={user.merchantId}>
                  <TableCell style={{ fontSize: "12px" }}>
                    {i++}
                  </TableCell>
                  <TableCell 
                    align="right" 
                    style={{ fontSize: "12px" }}>
                    {user.voucherType}
                  </TableCell>
                  
                  <TableCell 
                    align="right" 
                    style={{ fontSize: "12px" }}>
                    {user.startDate}
                  </TableCell>
                  <TableCell 
                    align="right"  
                    style={{fontSize:'12px'}}>
                    {user.expirationDate.length<5 ? user.expirationDate:user.expirationDate.substring(0,6)+'...'}
                  </TableCell>
                  
                  <TableCell 
                    align="right"  
                    style={{fontSize:'12px'}}>
                    {user.Code.length<10 ? user.Code:user.Code.substring(0,12)+'...'}
                  </TableCell>
                  <TableCell 
                   align="right" 
                    style={{ fontSize: "12px" }}>
                    {user.Status}
                  </TableCell>
                  <TableCell
                     align="right" 
                     style={{ fontSize: "12px",display:"none"}}>
                    {user.category}
                  </TableCell>
                  <TableCell align="right"
                    style={{fontSize:'12px'}}>
                    {user.value}
                  </TableCell>
                  <TableCell 
                    align="right" 
                    style={{ fontSize: "12px" }}>
                    {user.additionInfo.length < 5
                      ? user.additionInfo
                      : user.additionInfo.substring(0, 6) + "..."}
                  </TableCell>
                  <TableCell align="left">
                   
                  </TableCell>
                  <TableCell align="left">
                    <ViewsDetails
                      voucherType={user.voucherType}
                      startDate={user.voucherType}
                      expirationDate={user.startDate}
                      code={user.code}
                      status={user.status}
                      category={user.category}
                      additionInfo={user.additionInfo}
                    />
                  </TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Spinner />
        )}
      </Paper>
    );
  }
}
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

export default withStyles(styles)(StandalonTable);