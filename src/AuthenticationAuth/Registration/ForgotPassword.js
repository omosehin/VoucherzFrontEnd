import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export const Form = (props) => {
  const {
    values: { email },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
 
  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
   <form 
   onSubmit={(e) => {
   
     alert("submitted");
     e.preventDefault();
     console.log(e);
   
   }}>
    
     <TextField
       id="email"
       name="email"
       helperText={touched.email ? errors.email : ""}
       error={touched.email && Boolean(errors.email)}
       label="Email"
       style={{ margin:'2px 30px',width: '50%'}}
       type="email"
       value={email}
       onChange={change.bind(null, "email")}
     />
     
     <Button
      type="submit"
      fullWidth
      
      variant="raised"
      color="primary"
      disabled={!isValid}
      style={{ margin:'2px 30px',width: '50%',marginTop:'50px'}}
      >
       Reset
     </Button>
     
   </form>
 );
};

