import React from 'react';
import './Layout.css'; // Create a corresponding CSS file for styling
import Sidebar from './Sidebar';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="centered-text">
        <h1><center>Let's make your Birthday everlasting and Funfilled ...</center></h1>
     
    
        <p><br/><br/><br/>"Welcome , here we craft unforgettable birthdays. Dreaming of a theme party, an elegant soirée, or a surprise extravaganza? Our expert planners bring your vision to life. From venue selection to personalized decor, entertainment, and delicious treats, we handle every detail. Let us plan while you enjoy cherished moments with loved ones. Join us for a birthday experience like no other!"</p>
      </div>
      
        <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
