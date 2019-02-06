import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Input from "../../../../../components/Forms/Input"
import CardBody from "../../../../../components/Card/CardBody";
import Grid from '@material-ui/core/Grid';
import Select from "../../../../../components/Forms/Select"
import TextArea from "../../../../../components/Forms/TextArea"
import Button from "../../../../../components/Forms/Button"
import axios from "axios";
import Spinner from "../../../../../components/Spinner";
import {withRouter,Redirect} from 'react-router-dom';
import * as ROUTES from '../../../../../../../constants/routes';





    
class ValueVoucherForm extends Component {
  state={
      newUser:{
        voucherType:"Value",
        amount:"",
        charset: "",
        lenght:"",
        pattern:"",
        lengthPattern:"",
        separator:"-",
        category:"",
        prefix:"",
        postfix:"",
        startDate:"",
        expirationDate:"",
        additionalInfo:"",
      },
      lengthPatterns:["Length","Pattern"],
      charsetOptions:["Numbers","Alphabet","Alphanumeric"],
      disabled:false,
      isLoading:false,

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
    const re = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    if (e.target.value === "" || re.test(e.target.value)){
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
        );
      }
      
  

  handleTextArea=(e)=>{
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          additionalInfo: value
        }
      }),
    );
  }

  // componentDidMount(){
  //   if(sessionStorage.getItem('data')){
  //     {
  //       let user=JSON.parse(sessionStorage.getItem('data'));
  //       console.log(user);
  //       const token=user.data.id;
  //       console.log(token);
  //       axios.post(`http://172.20.20.17:8080/api/voucher/value/single/create`,
  //         {headers:{"Authorization":`Bearer $ {token}`}}
  //       )
  //       .then(res=>{
  //         console.log(res.data);
  //         this.setState({
  //           userData:res.data,
  //           redirectToReferrer:false
  //         })
  //       })
  //     }
     
  //     }
  //     else{
  //       this.setState({
  //         redirectToReferrer:true
  //       })
  //   }
  // }


  handleFormSubmit=(e)=>{
    e.preventDefault();
    this.setState({
      isLoading:true
    })

    let userData=this.state.newUser
    console.log(userData);
    axios.post(`http://172.20.20.17:8080/api/voucher/value/single/create`,  userData )
      .then(res => {
        console.log(res);
        console.log(res.data);
        if(res.code==='201'){
          this.setState({
            isLoading:false

          })

        }
        alert("voucher created Succesfully")
        this.props.history.push('./table')
           })
     
      .catch((error)=>{
        console.log(error)
      })
     
}


 


  handleClearForm=(e)=>{
      e.preventDefault();
      this.setState({
          newUser:{
            amount:"",
            charset: "",
            length:"",
            category:"",
            prefix:"",
            postfix:"",
            pattern:"",
            separator:"-",         
            startDate:"",
            expirationDate:"",
            additionalInfo:"",
            lengthPattern:""
          }
         
      });
  }
  isFormValid = () => {
    const { amount, prefix,length,category,postfix,startDate,expirationDate,charset} = this.state.newUser;
  
    return amount && prefix && length && category && postfix&&startDate &&expirationDate&& charset
  }

  render(){
    // if (res.code==='201'){

    // }

    // if (this.state.isLoading){
      
    //   return (<Redirect to={ROUTES.TABLE}/>)
    //   }
    
    const {isLoading} =this.state;


    return (
          <CardBody>
    {!isLoading?(<form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Grid container spacing={24} justify = "center">
                <Grid xs={12} md={5} style={{margin:"3px"}} >
                  <Input
                    inputType={"hidden"}
                     required={"required"}
                     readonly={'readonly'}
                    value={this.state.newUser.voucherType}
                    fullWidth

                  >
                  </Input>
                </Grid >
               
                  <Grid xs={12} md={10} style={{margin:"3px"}}>
                  <Input
                    required
                    inputType={"number"}                  
                    title={"Voucher Value"}
                    name={"amount"}
                    value={this.state.newUser.amount}
                    fullWidth
                    placeholder={"Enter your Voucher Value in Naira"}
                    handleChange={this.VoucherhandleInput}
                  >
                  </Input>
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
                <Grid xs={12}  md={5}  style={{margin:"3px"}}>
                    <Input
                         required
                        // inputType={"number"}
                        title={"Pattern"}
                        name={"pattern"}
                        value={this.state.newUser.pattern}
                        fullWidth
                        placeholder={"Pattern(##-####)"}
                        handleChange={this.VoucherDateCharsethandleInput}
                        disabled={(this.state.newUser.lengthPattern==="Pattern")? "" : "disabled"}


                    >
                    </Input>
               
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
                    disabled={(this.state.newUser.lengthPattern==="Length")? "" : "disabled"}

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
               
                  <Grid xs={12} md={5}  style={{margin:"3px"}}>
                  <Input 
                    required={"required"}
                    // inputType={"number"}
                     title={"Category"}
                    name={"category"}
                    value={this.state.newUser.category}
                    fullWidth
                    placeholder={"Enter Voucher category.g Valentine "}
                    handleChange={this.VoucherDateCharsethandleInput}
                  >
                  </Input>
                  </Grid> 
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
                        name={"separator"}
                        value={this.state.newUser.separator}
                        inputType={'hidden'}
                        fullWidth
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
                     title={"additionalInfo Information"}
                     rows={2}
                     value={this.state.newUser.additionalInfo}
                     name={"currentPetInfo"}
                     handleChange={this.handleTextArea}
                     placeholder={"additionalInfo Information"}
        />
                  </Grid>
                 
          <Grid xs={4} md={4}>
                  <button
                  disabled={!this.isFormValid}
                          action={this.handleFormSubmit}                           
                            type='Submit'
                            id="buttonShipper"
                            
               style={buttonStyle}>
               Submit
                </button>

                </Grid>

                <Grid xs={4} md={4}>
                    <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                    />

                </Grid>
        </Grid>
        </form>):(
          <Spinner/>
        )
}
        </CardBody>
     
      );
  }
 
 
}

export default withStyles(styles)(withRouter(ValueVoucherForm));



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
   width: '81px',
   height: '33px',
   color: 'white',
  };