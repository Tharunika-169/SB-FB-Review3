// // Sidebar.js
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <ul>
//         <li>
//           <NavLink exact to="/" activeClassName="active">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/signupform" activeClassName="active">
//             Sign Up
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import './Sidebar.css'; // Create a corresponding CSS file for styling

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Services</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        &#9776;
      </button>

      <div className="sidebar-content">
          
     
        <ul>
          <li>
          
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/delete">Delete</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
