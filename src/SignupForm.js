import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function SignupForm() {
  const [newUsername, setNewUsername] = useState('');
  const [newTime, setNewTime] = useState(''); // Add state for time
  const [newDate, setNewDate] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Sign Up clicked');
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <br/>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="newUsername">Customer Name:</label>
          <input
            type="text"
            id="newUsername"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="newTime">Preferred Time:</label> {/* Add time input */}
          <input
            type="time"
            id="newTime"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="newTime">Happy Date:</label> {/* Add time input */}
          <input
            type="date"
            id="newDate"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            required
          />
        </div>
        <br/>
        <div>
          <label htmlFor="newPassword">Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <br />
         <div className="login-container">
        
           
           <Link to="/layout">
                    <button className="primary-button" id="reg_btn"><span>Signup </span></button>
                </Link>
    
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
