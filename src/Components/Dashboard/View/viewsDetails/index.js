import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
// import Details from './Details';

const styles = {
  dialogPaper: {
      minHeight: '80vh',
      maxHeight: '80vh',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Details extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={{width:'400px'}}>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen} center>
            DETAILS        
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          // fullWidth={true}
          PaperProps={{
            style: {
              minHeight: "70vh",
              minWidth: "40vw"
            }
          }}
          


        >
          <DialogTitle id="alert-dialog-slide-title">
            {"VOUCHER CODE"}
          
                    
                  
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
          <h6 style={{marginBottom:"20px"}}>Voucher Type: {this.props.voucherType}</h6>
           <h6 style={{marginBottom:"20px"}}>Start Date: {this.props.startDate}</h6>
           <h6 style={{marginBottom:"20px"}}>Expiration Date: {this.props.expirationDate}</h6>
           <h6 style={{marginBottom:"20px"}}>Voucher Code: {this.props.code}</h6>
           <h6 style={{marginBottom:"20px"}}>Status: {this.props.status}</h6>
           <h6 style={{marginBottom:"20px"}}>Category: {this.props.category}</h6>
           <h6 style={{marginBottom:"20px"}}>Value: {this.props.value}</h6>
           <h6 style={{marginBottom:"20px"}}>AdditionInfo: {this.props.additionInfo}</h6>
        
            </DialogContentText>
          </DialogContent>
          
          <DialogActions>
            <Button onClick={this.handleClose} color="primary"  style={{marginRight: '370px'}} >
              Disable
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Details;
