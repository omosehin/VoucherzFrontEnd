import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import './Registration.css';


export const Form = (props) => {
  const {
    values: { email, password},
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
       style={{margin:"0 auto",padding:'30px'}}
       value={email}
       onChange={change.bind(null, "email")}
     
     />
     <TextField
     id="password"
     name="password"
     helperText={touched.password ? errors.password : ""}
     error={touched.password && Boolean(errors.password)}
     label="Password"
     style={{margin:"0 auto",padding:'30px'}}

     
     type="password"
     value={password}
     onChange={change.bind(null, "password")}
     />
    
     <Button
      type="submit"
      
  
      variant="raised"
      color="primary"
      disabled={!isValid}
      >
       LogIn
     </Button>
     
   </form>
 );
};

