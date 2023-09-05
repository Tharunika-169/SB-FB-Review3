import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import SignupForm from './SignupForm';
 function LoginForm() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
  //  const [isLogin, setIsLogin] = useState(true);
   const handleLogin = (e) => {
     e.preventDefault();
  
     console.log('Login clicked');
   };
 
   return (
   
     <div className="container">
       
       
       <center><h2>Login</h2></center>
       <br/>
       <center><form onSubmit={handleLogin}>
         <div className="login-container">
           <label htmlFor="customername">Customer Name:</label>
           <input
             type="text"
             id="customername"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             required
           />
           
         </div>
         
         <br/>
         <div classname="login-container">
           <label htmlFor="password">Password:</label>
           <input
             type="password"
             id="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
           />
           
         </div>
         <br/>
         <div className="login-container">
          <Link to="/layout">
          <button className="primary-button" id="reg_btn"><span>Log in </span></button>
           </Link>
         </div>
       </form>
       </center>
     </div>
     
   );
 }
 
 export default LoginForm;

