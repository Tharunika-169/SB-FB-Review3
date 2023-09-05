import React, { useState } from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
 function Delete() {

  const [cakeid, setcakeid] = useState("")


   const handleSubmit = (e) => {
    e.preventDefault();
    Axios.delete('http://localhost:8080/deleteparamcake?cakeid=1',{
    cakeid:cakeid    
    })
  }

  return (
    <div className="App">
        <div className="container">
      <header className="App-header"> 
        <div className="logIn-form">
        <form onSubmit={handleSubmit}>
        <p><b>Deletion! come to me</b></p>
        <br/>
        <input
                type="text"
                placeholder="ID please"
                onChange={(e) => {setcakeid(e.target.value)}}
                />
        
        <div class="btn-container">
            <button id="btn4" type="submit">Delete</button>
        </div><br/>
        <p id="btn-text" class="hidden">Deleted Successfully!</p>
        <br/>
        </form>
        </div>
      </header>
      <footer>
          <p><Link to="/">Back to Homepage</Link>.</p>
        </footer>
      </div>
    </div>
  )
}
export default Delete;