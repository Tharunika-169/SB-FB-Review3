import React from 'react'
import LandingPage from './LandingPage';
import './App.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './Layout';
import Home from './Home';
import Update from './Update';
import Delete from './Delete';
import Contact from './Contact';

function App() {
  return(
 
    <div className="App">
      
      <Router>
            <div>
                <Switch>
                   
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/loginform" component={ LoginForm } />
                    <Route path="/signupform" component={ SignupForm } />
                    <Route path="/layout" component={ Layout } />
                    <Route path="/Home" component={ Home } />
                    <Route path="/Update" component={ Update } />
                    <Route path="/Delete" component={ Delete } />
                    <Route path="/Contact" component={ Contact } />
                    
    </Switch>
    
    </div>
    </Router>
    
    </div>
    )
  }

export default App
  