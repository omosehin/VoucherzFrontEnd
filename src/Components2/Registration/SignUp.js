import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import'./Registration.css';

export const Form = (props) => {
  const {
    values: {firstname,secondname, email, password, confirmPassword },
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
       id="firstname"
       name="firstname"
       label="First Name"
       helperText={touched.firstname?errors.firstname :""}
       error={touched.firstname && Boolean(errors.firstname)}
       value={firstname}
       onChange={change.bind(null, "firstname")}
       style={{margin:"0 auto",padding:'30px'}}
      />
      <TextField
       id="secondname"
       name="secondname"
       label="Last Name"
       helperText={touched.secondname?errors.secondname :""}
       error={touched.secondname && Boolean(errors.secondname)}
       value={secondname}
       onChange={change.bind(null, "secondname")}
       style={{margin:"0 auto",padding:'30px'}}

      />
     <TextField
       id="email"
       name="email"
       helperText={touched.email ? errors.email : ""}
       error={touched.email && Boolean(errors.email)}
       label="Email"
       style={{margin:"0 auto",padding:'30px'}}
       type="email"
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
     <TextField
       id="confirmPassword"
       name="confirmPassword"
       helperText={touched.confirmPassword ? errors.confirmPassword : ""}
       error={touched.confirmPassword && Boolean(errors.confirmPassword)}
       label="Confirm Password"
       
       type="password"
       value={confirmPassword}
       onChange={change.bind(null, "confirmPassword")}
       style={{margin:"0 auto",padding:'30px'}}
     />
     <Button
      type="submit"     
      variant="raised"
      color="primary"
      disabled={!isValid}

      >
       Submit
     </Button>
     
   </form>
 );
};

