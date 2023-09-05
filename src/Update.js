import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
function Update() {
    const [cakeid, setcakeid] = useState("")
    const [flavor, setflavor] = useState("")
    const [weight, setweight] = useState("")
    const [shape, setshape] = useState("")
    const [filling, setfilling] = useState("")
    const [budget, setbudget] = useState("")
    
    



  const handleSubmit = (e) => {
      e.preventDefault();
      const data={cakeid,flavor,weight,shape,filling,budget};
      Axios.put('http://localhost:8080/updatecake', {
         cakeid:cakeid,
          flavor:flavor,
          weight:weight,
          shape:shape,
          filling:filling,
          budget:budget
          
         
      }).then(response=>{console.log(response.data)})
    }

  return (
    <div className="App">
        <div className="container">
      <header className="App-header"> 
        <div className="logIn-form">
            <form onSubmit={handleSubmit}>
            <p><b>Changes! No worries, can be done here</b></p>
            <br/>
                <p>Id</p>

                <input
                type="text"
                placeholder="ID please"
                onChange={(e) => {setcakeid(e.target.value)}}
                />

                <p>Flavor</p>

                <input
                  type="text"
                  placeholder="Flavor please"
                  onChange={(e) => {setflavor(e.target.value)}}
                />

                <p>Quantity</p>

                <input
                  type="text"
                  placeholder = "Quantity please" 
                  onChange={(e) => {setweight(e.target.value)}}
                />

                <p>Shape</p>

                <input 
                type="text"
                placeholder = "shape please" 
                onChange={(e) => {setshape(e.target.value)}}
                />

                <p>Filling </p>

                <input 
                type="text"
                placeholder = "Filling please" 
                onChange={(e) => {setfilling(e.target.value)}}
                />
                <p>Budget </p>

                <input 
                type="text"
                placeholder = "budget" 
                onChange={(e) => {setbudget(e.target.value)}}
                />
               

                

                <div class="btn-container"><br/>
                    <button id="btn4" type="submit">Update</button>
                </div><br/>
                <p id="btn4-text" class="hidden">Updated Successfully!</p>

            </form>
            <br/>
        <footer>
          <p><Link to="/">Back to Homepage</Link>.</p>
        </footer>
        </div>
       
      </header>
      </div>
    </div>
  );

  }
export default Update;