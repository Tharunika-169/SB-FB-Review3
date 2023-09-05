import React from 'react'
import './LoginSignup.css'
import cake from './Front.png';

function LoginSignup() {
    const containerStyle = {
        backgroundImage: `url(${cake})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center'
        
        
    };
  return (
    <div style={containerStyle}>
    <div  className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        
                <div className="input">
                   
                    <input type="text"/>
                </div>
                <div className="input">
                    
                    <input type="email"/>
                </div>
                <div className="input">
                    
                    <input type="password"/>
                </div>
            
            <div className="forgot-password">Lost Password?</div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
    </div>
    </div>
  )
}

export default LoginSignup