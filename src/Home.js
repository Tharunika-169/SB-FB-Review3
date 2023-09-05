

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
//import Navbar from './components/pages/Navbar'




export default function Home() {
  const [formData, setFormData] = useState({
    cakeid: '',
    flavor: '',
    weight: '',
    shape: '',
    filling: '',
    budget: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const prodata = {
      cakeid: formData.cakeid,
      flavor: formData.flavor,
      weight: formData.weight,
      filling: formData.filling,
      shape: formData.shape,
      budget: formData.budget,
      
    };

    axios.post('http://localhost:8080/addcakes', prodata);
    

  };

  return (
    <header style={HeaderStyle}>
        <div className="container">
      <div className="text-center m-5-auto">
       
        <h2>Join us</h2>
        <br/>
        <h5>Let's make your dream cake (Cake Bake)</h5>
        <br/>
        <form onSubmit={handleSubmit}>
          <p>
            <label>Cake Id : </label>
            <input
              type='number'
              name='cakeid'
              value={formData.cakeid}
              onChange={handleChange}
              required
            />
          </p>
          <br />
          <p>
            <label>Flavor : </label>
            <input
              type='text'
              name='flavor'
              value={formData.flavor}
              onChange={handleChange}
              required
            />
          </p>
          <br />
          <p>
            <label>Quantity : </label>
            <input
              type='text'
              name='weight'
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </p>
          <br />
          <p>
            <label>Filling : </label>
            <input
              type='text'
              name='filling'
              value={formData.filling}
              onChange={handleChange}
              required
            />
          </p>
          <br />
          <p>
            <label>Shape : </label>
            <input
              type='text'
              name='shape'
              value={formData.shape}
              onChange={handleChange}
              required
            />
          </p>
          <br/>
          <p>
            <label>Budget : </label>
            <input
              type='number'
              name='budget'
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </p>
          <br/>
          
          <p>
            <button id="sub_btn" type="submit">Register</button>
          </p>
        </form>
        <br/>
        <footer>
          <p><Link to="/">Back to Homepage</Link>.</p>
        </footer>
      </div>
      </div>
    </header>
          
  );
}

const HeaderStyle = {
  width: '150%',
  height: '100vh',
  position: 'fixed',
  top: '20%',
  left: '40%'
  
  
};