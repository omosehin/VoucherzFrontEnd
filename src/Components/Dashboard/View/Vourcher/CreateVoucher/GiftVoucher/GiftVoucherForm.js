import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Input from "../../../../components/Forms/Input"
import CardBody from "../../../../components/Card/CardBody";
import Grid from '@material-ui/core/Grid';
import Select from "../../../../components/Forms/Select"
import TextArea from "../../../../components/Forms/TextArea"
import Button from "../../../../components/Forms/Button"
import {notification } from 'antd';


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    display: 'flex',
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  menu: {
    width: 400,
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width:'100%',
  },
  icon: {
    margin: 5,
  },
  form: {
   width: '100%', // Fix IE 11 issue.
  },

};
const buttonStyle = {
   backgroundColor:"#972FAF",
   color:"white",
  };

    
class GiftVourcherForm extends Component {
  state={
      newUser:{
        Giftvouchername:"",
        charset: "",
        length:"",
        prefix:"",
        postfix:"",
        pattern:"",
        startDate:"",
        expiryDate:"",
        additional:"",
      },
      charsetOptions:["Numbers","Alphabet","Alphanumeric"],
      voucherType: "GiftStandalone",

    }


  VoucherhandleInput=(e) =>{
    let value = e.target.value;
    let name = e.target.name;
    const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (e.target.value === "" || re.test(e.target.value)){
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            [name]: value
          }
        }),
        () => console.log(this.state.newUser)
      );
    }
  }
    
    VoucherDateCharsethandleInput=(e) =>{
      let value = e.target.value;
      let name = e.target.name;
      
        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              [name]: value
            }
          }),
          () => console.log(this.state.newUser)
        );
      }
      
  

  handleTextArea=(e)=>{
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          additional: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  
  handleFormSubmit=(e)=>{
      e.preventDefault();
      let userData=[this.state.newUser]
      let userBData=[this.state.voucherType];
      let giftDataVoucher=userData.concat(userBData)   
      console.log(giftDataVoucher);

        fetch("http://google.com",{
            method:"POST",
            body:JSON.stringify(giftDataVoucher),
            header:{
                Accept:"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(response=>{
            response.json().then(data=>{
              notification.success({
                message:"Voucher Not Created",
                description:("Thank you! You're successfully registered " + data)
                  // console.log("Successful" + data)
              });
              
            });
        })

        // .catch(error=>{
        //   notification.error({
        //     message:"Voucher Created",
        //         description:"error"
        //   })
        // })
  }
 

  handleClearForm=(e)=>{
      e.preventDefault();
      this.setState({
          newUser:{
            Giftvouchername:"",
            charset: "",
            length:"",
            prefix:"",
            postfix:"",
            pattern:"",
            startDate:"",
            expiryDate:"",
            additional:"",
          }
      });
  }


  render(){
    
    const { Giftvouchername, prefix} = this.state.newUser;
    const isEnabled =
    Giftvouchername.length < 0 &&
    prefix.length < 0 ;

    return (
      
          <CardBody>
    <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Grid container spacing={24} justify = "center">
                  <Grid xs={12} md={10}>
                  <Input
                    required
                    inputType={"number"}                  
                    title={"Voucher Value"}
                    name={"Giftvouchername"}
                    value={this.state.newUser.Giftvouchername}
                    fullWidth
                    placeholder={"Enter your Voucher Value in Naira"}
                    handleChange={this.VoucherhandleInput}
                  >
                  </Input>
                  </Grid >
                  
                <Grid   xs={12} md={5} style={{margin:"3px"}}>
                <Select
                        title={"Charset"}
                        name={"charset"}
                        options={this.state.charsetOptions}
                        value={this.state.newUser.charset}
                        placeholder={"Charset"}
                        handleChange={this.VoucherDateCharsethandleInput}
                        />
                </Grid >  
                <Grid xs={12} md={5}  style={{margin:"3px"}} >
                  <Input
                    required
                    inputType={"number"}
                     title={"Length"}
                    name={"length"}
                    value={this.state.newUser.length}
                    fullWidth
                    placeholder={"Enter Voucher Length"}
                    handleChange={this.VoucherhandleInput}
                  >
                  </Input>
                  </Grid >  
                  <Grid xs={12} md={5}  style={{margin:"3px"}}>
                  <Input
                    required
                    // inputType={"number"}
                     title={"Prefix"}
                    name={"prefix"}
                    value={this.state.newUser.prefix}
                    fullWidth
                    placeholder={"Enter Voucher Prefix"}
                    handleChange={this.VoucherDateCharsethandleInput}
                  >
                  </Input>
                  </Grid>
                  
                  <Grid xs={12} md={5}  style={{margin:"3px"}}>
                    <Input
                        required
                        // inputType={"number"}
                        title={"Postfix"}
                        name={"postfix"}
                        value={this.state.newUser.postfix}
                        fullWidth
                        placeholder={"Enter Voucher Postfix"}
                        handleChange={this.VoucherDateCharsethandleInput}
                    >
                    </Input>
               
                  </Grid > 
                  <Grid xs={12}  md={5}  style={{margin:"3px"}}>
                    <Input
                        required
                        // inputType={"number"}
                        title={"Pattern"}
                        name={"pattern"}
                        value={this.state.newUser.pattern}
                        fullWidth
                        placeholder={"Enter Voucher Pattern"}
                        handleChange={this.VoucherDateCharsethandleInput}
                    >
                    </Input>
               
                  </Grid > 
                  <Grid xs={12}  md={5}>
                    <Input
                        required
                        inputType={"date"}
                        title={"Start Date"}
                        name={"startDate"}
                        value={this.state.newUser.startDate}
                        fullWidth
                        placeholder={"startDate"}
                        handleChange={this.VoucherDateCharsethandleInput}
                    >
                    </Input>
               
                  </Grid > 
                  <Grid xs={12} md={5}>
                    <Input
                        required
                        inputType={"date"}
                        title={"Expiry Date"}
                        name={"expiryDate"}
                        value={this.state.newUser.expiryDate}
                        fullWidth
                        placeholder={"expiryDate"}
                        handleChange={this.VoucherDateCharsethandleInput}
                    >
                    </Input>
               
                  </Grid > 
                  <Grid xs={12} md={10}>
                  <TextArea
                     title={"Additional Information"}
                     rows={10}
                     value={this.state.newUser.additional}
                     name={"currentPetInfo"}
                     handleChange={this.handleTextArea}
                     placeholder={"Additional Information"}
        />
                  </Grid>
                 
          <Grid xs={4} md={4}>
                  <Button
                  disabled={!isEnabled}
                          action={this.handleFormSubmit}                           
                            title={"Submit"}
               style={buttonStyle}/>
                </Grid>

                <Grid xs={4} md={4}>
                    <Button

                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                    />

                </Grid>
        </Grid>
        </form>

        </CardBody>
     
      );
  }
 
 
}

export default withStyles(styles)(GiftVourcherForm);
