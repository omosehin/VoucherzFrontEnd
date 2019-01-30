import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Input from "../../../../../components/Forms/Input"
import CardBody from "../../../../../components/Card/CardBody";
import Grid from '@material-ui/core/Grid';
import Select from "../../../../../components/Forms/Select"
import TextArea from "../../../../../components/Forms/TextArea"
import Button from "../../../../../components/Forms/Button"
import axios from "axios";


  


    
class DiscountVoucherForm extends Component {
  state={
      newUser:{
        discountType:"",
        voucherType: "Discount_Standalone",
        discountValue:"",
        percentage:"",
        category:"",
        amount:"",
        quantity:"",
        charset: "",
        length:"",
        prefix:"",
        postfix:"",
        pattern:"",
        startDate:"",
        expirationDate:"",
        additionInfo:"",
      },
      discountTypes:["Percentage","Amount","Unit"],
      charsetOptions:["Numbers","Alphabet","Alphanumeric"],
      disabled:false
  }

  handleDisable=()=>{
    this.setState((prevState)=>{
      return(
        ({disabled:!prevState.disabled})
      );
    })
  }
  

  VoucherhandleInput=(e) =>{
    let value = e.target.value;
    let name = e.target.name;
    const validateinput = /^[+]?([1-9]+(?:[\.][1-9]*)?|\.[1-9]+)$/;
    if (e.target.value === "" || validateinput.test(e.target.value)){
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

  VoucherPercenthandleInput=(e) =>{
    let value = e.target.value;
    let name = e.target.name;
    const validateinput = /^[1-9]$|^[1-9][0-9]$|^(100)$/;
    if (e.target.value === "" || validateinput.test(e.target.value)){
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
          additionInfo: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  
  handleFormSubmit=(e)=>{
      e.preventDefault();
      let userData=[this.state.newUser];
      console.log(userData);
      axios({
        method:"post",
        url:"http(s)://mockapi.io/api/v1/usercreation",
        mode: 'no-cors',
        body:JSON.stringify(userData),
        header:{
            'Accept':"application/json",
            "Content-Type":"application/json"
        }
    })
    .then(response=>{
      console.log(response);
    })
    .catch( error=> {
      console.log(error);
    });

  }
  
 

  handleClearForm=(e)=>{
      e.preventDefault();
      this.setState({
          newUser:{
            discountValue:"",
            percentage:"",
            amount:"",
            category:"",
            charset: "",
            length:"",
            prefix:"",
            postfix:"",
            pattern:"",
            startDate:"",
            expirationDate:"",
            additionInfo:"",
          }
      });
  }


  render(){
    
    const { percentage, prefix} = this.state.newUser;
    const isEnabled =
    percentage.length < 0 &&
    prefix.length < 0 ;

    return (
      
          <CardBody>
    <form className="container-fluid" onSubmit={this.handleFormSubmit} novalidate>
                <Grid container spacing={24} justify = "center">
                <Grid xs={12} md={5} style={{margin:"3px"}} >
                  <Input
                    inputType={'hidden'}
                     required={"required"}
                     readonly={'readonly'}
                    value={this.state.newUser.voucherType}
                    fullWidth

                  >
                  </Input>
                  </Grid >

                <Grid   xs={12} md={10} style={{margin:"3px"}}>
                <Select
                        required={"required"}
                        title={"Discount Type"}
                        name={"discountType"}
                        options={this.state.discountTypes}
                        value={this.state.newUser.discountType}
                        placeholder={"Choose Discount Type"}
                        handleChange={this.VoucherDateCharsethandleInput}
                        handClick={this.handleDisable}
                        />
                </Grid >  
                 
                  <Grid xs={12} md={5} style={{margin:"3px"}}>
                  <Input
                      required={"required"}
                    disabled={(this.state.newUser.discountType==="Percentage")? "" : "disabled"}
                    inputType={"number"}                  
                    title={"Discount Value for %"}
                    name={"percentage"}
                    value={this.state.newUser.percentage}
                    fullWidth
                    placeholder={"1-100%"}
                    handleChange={this.VoucherPercenthandleInput}
                  >
                  </Input>
                  </Grid >
                  <Grid xs={12} md={5} style={{margin:"3px"}}>
                  <Input
                    required={"required"}
                    disabled={(this.state.newUser.discountType==="Amount")? "" : "disabled"}
                    inputType={"number"}                  
                    title={"Discount Value for amount"}
                    name={"amount"}
                    value={this.state.newUser.amount}
                    fullWidth
                    placeholder={"Discount Value Amount"}
                    handleChange={this.VoucherhandleInput}
                  >
                  </Input>
                  </Grid >

                  <Grid xs={12} md={5} style={{margin:"3px"}}>
                  <Input
                     required={"required"}
                     disabled={(this.state.newUser.discountType==="Unit")? "" : "disabled"}
                     inputType={"number"}                  
                    title={"Discount Voucher Value for unit"}
                    name={"discountValue"}
                    value={this.state.newUser.discountValue}
                    fullWidth
                    placeholder={"Enter your Voucher Value in Naira(#)"}
                    handleChange={this.VoucherhandleInput}
                  >
                  </Input>
                  </Grid >
                  
                <Grid   xs={12} md={5} style={{margin:"3px"}}>
                <Select
                        required={"required"}
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
                    title={"Voucher Quantity"}
                    name={"quantity"}
                    value={this.state.newUser.quantity}
                    fullWidth
                    placeholder={"Enter your Voucher quantity"}
                    handleChange={this.VoucherhandleInput}
                  >
                  
                  </Input>
                  </Grid>
                <Grid xs={12} md={5}  style={{margin:"3px"}} >
                  <Input
                    
                    required={"required"}
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
                    required={"required"}
                    // inputType={"number"}
                     title={"Category"}
                    name={"category"}
                    value={this.state.newUser.category}
                    fullWidth
                    placeholder={"Enter Voucher categorye.g Valentine "}
                    handleChange={this.VoucherDateCharsethandleInput}
                  >
                  </Input>
                  </Grid>
                  <Grid xs={12} md={5}  style={{margin:"3px"}}>
                  <Input 
                    required={"required"}
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
                        required={"required"}
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
                        required={"required"}
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
                    required={"required"}
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
                    required={"required"}
                    inputType={"date"}
                        title={"Expiry Date"}
                        name={"expirationDate"}
                        value={this.state.newUser.expirationDate}
                        fullWidth
                        placeholder={"expirationDate"}
                        handleChange={this.VoucherDateCharsethandleInput}
                    >
                    </Input>
               
                  </Grid > 
                  <Grid xs={12} md={10}>
                  <TextArea
                     title={"additionInfo Information"}
                     rows={10}
                     value={this.state.newUser.additionInfo}
                     name={"currentPetInfo"}
                     handleChange={this.handleTextArea}
                     placeholder={"additionInfo Information"}
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

export default withStyles(styles)(DiscountVoucherForm);

const styles = {

  form: {
   width: '100%', // Fix IE 11 issue.
  },

};
const buttonStyle = {
   backgroundColor:"#972FAF",
   color:"white",
  };
