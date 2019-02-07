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
        voucherType: "Discount_Bulk",
        unit:"",
        numberOfCodeToGenerate:"",
        percentage:"",
        amount:"",
        category:"",
        separator:"-",
        lengthPattern:"",
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
      lengthPatterns:["Length","Pattern"],
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
    const validateinput = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (e.target.value === "" || validateinput.test(e.target.value)){
      this.setState(
        prevState => ({
          newUser: {
            ...prevState.newUser,
            [name]: value
          }
        }),
        // () => console.log(this.state.newUser)
      );
    }
  }
    
    VoucherDateCharsethandleInput=(e) =>{
      let value = e.target.value;
      let name = e.target.name;
      
      let { amount, percentage, unit,length,pattern } = this.state.newUser;
      switch(value) {
        case 'Amount':
          percentage = '';
          unit = '';
          break;
        case 'Percentage':
          amount = '';
          unit = '';
          break;
        case 'Unit':
          amount = '';
          percentage = '';
          break;
          case 'Length':
          pattern = '';
          break;
        case 'Pattern':
          length = '';
          break;
      }

        this.setState(
          prevState => ({
            newUser: {
              ...prevState.newUser,
              unit,
              amount,
              percentage,
              length,
              pattern,
              [name]: value
            }
          }),
        );
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
          );
        }
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
    );
  }


  handleFormSubmit=(e)=>{
    e.preventDefault();
    // let userData=[this.state.newUser];
    const { amount,percentage,unit,category,numberOfCodeToGenerate,charset,length,prefix,postfix,pattern,startDate,expirationDate,additionInfo,lengthPattern} =this.state.newUser
    const discountValue=amount||percentage||unit;
    const RemainingValue={category,charset,length,numberOfCodeToGenerate,prefix,postfix,pattern,startDate,expirationDate,additionInfo,lengthPattern};
    const userData={...RemainingValue, discountValue};
     
    const voucherData = JSON.stringify(userData)
    console.log(voucherData);
     let user = sessionStorage.getItem('data');
     const token = user.data;

    const headers = {
        "Content-Type": "application/json",
          // "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb3lAZ21haWwuY29tIiwiaWF0IjoxNTQ5NTM3OTAxLCJleHAiOjE1NDk1Mzg5MDF9.aUzY60QAzvHeUqGIuwxM718OSDAxFxWueeYl19WoW1L7r1cy9A4EqrOYu_IxoiaxkCYN40GYHY2-s9D48LzoKw"
        "Authorization": `Bearer ${token}`

    }
    axios.post(`http://172.20.20.17:8080/api/voucher/value/single/create`,voucherData, {"headers": headers})
    .then(res => {
      alert( 'Successfully created with code ' + res.data.code);
      console.log("Succesfully Generated")
    })
    .catch((error) => {
      alert( error + " Voucher Creation Failed ")
      
    })
}
 

  handleClearForm=(e)=>{
      e.preventDefault();
      this.setState({
          newUser:{
            discountValue:"",
            percentage:"",
            amount:"",
            charset: "",
            length:"",
            category:"",
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
    
    // const {amount,percentage,discountValue} = this.state.newUser;

//  const discount Value=am





    return (
      
          <CardBody>
    <form className="container-fluid" onSubmit={this.handleFormSubmit} novalidate>
                <Grid container spacing={24} justify = "center">
                
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
                        handleEnable={this.handleEnable}
                        />
                </Grid >  
                 
                  <Grid xs={12} md={5} style={{margin:"3px"}}>
                  <Input
                    required={"required"}
                    disabled={(this.state.newUser.discountType==="Percentage")? "" : "disabled"}
                    inputType={"number"}                  
                    title={"Discount Value"}
                    name={"percentage"}
                    value={this.state.newUser.percentage}
                    fullWidth
                    placeholder={"Voucher value in Percentage (1-100%)"}
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
                    placeholder={"Voucher value in amount"}
                    handleChange={this.VoucherhandleInput}
                  >
                  </Input>
                  </Grid >

                  <Grid xs={12} md={5} style={{margin:"3px"}}>
                  <Input
                     required={"required"}
                    disabled={(this.state.newUser.discountType==="Unit")? "" : "disabled"}
                     inputType={"number"}                  
                    title={"Unit"}
                    name={"unit"}

                    value={this.state.newUser.unit}
                    fullWidth
                    placeholder={"Enter your Voucher Value in Unit(#)"}
                    handleChange={this.VoucherDateCharsethandleInput}
                  >
                  </Input>
                  </Grid >
                  {/* <Grid xs={12} md={5} style={{margin:"3px"}} > */}
                  <Input
                    inputType={'hidden'}
                     required={"required"}
                     readonly={'readonly'}
                    value={this.state.newUser.voucherType}
                    fullWidth

                  >
                  </Input>
                  {/* </Grid > */}
                  
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
                <Grid   xs={12} md={5} style={{margin:"3px"}}>
                  <Select
                        required={"required"}
                        title={"length or Patterns"}
                        name={"lengthPattern"}
                        options={this.state.lengthPatterns}
                        value={this.state.newUser.lengthPattern}
                        placeholder={"Length or Pattern"}
                        handleChange={this.VoucherDateCharsethandleInput}
                        handClick={this.handleDisable}

                        />
                </Grid >   
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
                    disabled={(this.state.newUser.lengthPattern==="Length")? "" : "disabled"}

                  >
                  </Input>
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
                        disabled={(this.state.newUser.lengthPattern==="Pattern")? "" : "disabled"}
                    >
                    </Input>
               
                  </Grid > 
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
                  <Grid xs={12} md={5}  style={{margin:"3px"}} >
                  <Input
                    required
                    inputType={"number"}                  
                    title={"Voucher Quantity"}
                    name={"numberCodeToGenerate"}
                    value={this.state.newUser.numberOfCodeToGenerate}
                    fullWidth
                    placeholder={"Enter your Voucher quantity"}
                    handleChange={this.VoucherhandleInput}
                  >
                  
                  </Input>
                  </Grid >  
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
                    required
                        name={"separator"}
                        value={this.state.newUser.separator}
                        inputType={'hidden'}
                        fullWidth
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
                 
          <Grid xs={4} md={4}style={{margin:"3px"}}>
                  <Button
                  // disabled={isInvalid}
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
