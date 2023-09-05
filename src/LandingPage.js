import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'


export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Birthday Event Organizer</h1>
            <br/><br/>
            <p className="main-para text-center">An event to make your little's wishes comes true.</p><br/><br/>
            <div className="buttons text-center">
                <Link to="/LoginForm">
                    <button className="primary-button"id="reg_btn"><span>log in</span></button>
                </Link>
                
                <Link to="/SignupForm">
                    <button className="primary-button" id="reg_btn"><span>Signup </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}