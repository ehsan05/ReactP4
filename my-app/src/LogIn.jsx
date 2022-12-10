import React from 'react';
import Input from './Input';

function logIn(props) {
   return (
     <form className="form">
     <Input 
      type = "text"
      ph = "Username"
     />
     <Input 
      type = "password"
      ph = "Password"
     />
     {props.isRegister === false && <Input
     type = "password"
     ph = "Confirm Password" />}
     
     <button type="submit">
       {props.isRegister ? "Log In" : "Register"} 
     </button>
      </form>
   );
}

export default logIn;