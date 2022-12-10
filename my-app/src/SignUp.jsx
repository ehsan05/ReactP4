import React from 'react';
import Input from './Input';

function signUp() {
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
     <Input 
      type = "password"
      ph = "Confirm Password"
     />
     <button type="submit">Register</button>
      </form>
   );
}

export default signUp;