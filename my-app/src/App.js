//  import Head from './Heading';
 import Form from './LogIn';
//  import Signup from './SignUp';
 var isuserRegister = true;
 function App() {
  return (
    <div className="container">
       <Form 
        isRegister = {isuserRegister}
       />

       {/* {(isLoggedIn) ? <Login /> : <Signup />} */}
    </div>
  );
}

export default App;
