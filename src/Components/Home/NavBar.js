import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import logo from "../../Styles/images/logo.png"

export class NavBar extends Component {
   
    render() {

        
        const isMobile = this.props.width <= 700

        const internalLinks = (
                                <div className="inLinks">
                                     <img className="logo" src={logo} alt="logo" />
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                                    <NavLink className="nav-link" to="contact">Contact</NavLink>
                                </div>
    )

        const socialLinks = (
                            <div className="socialLink">
                                <a className=" social-icon bounce" target="blank" href="www.facebook.com/obrienu"><i className="fab fa-github"></i></a>
                                <a className= "social-icon bounce" target="blank" href="www.facebook.com/obrienu"><i className="fab fa-twitter"></i></a>
                                <a className="social-icon bounce" target="blank" href="www.facebook.com/obrienu"><i className="fab fa-facebook"></i></a>
                                <a className="social-icon bounce" target="blank" href="www.facebook.com/obrienu"><i className="fab fa-github"></i></a>
                            </div>
        )

        const mobile = (
            <div>
                <div className="topBar">
                    {internalLinks}
                </div>
                <div className="sideBar">
                    {socialLinks}
                </div>
            </div>
           )




        return (
                <Router>
                    <nav>
                      {isMobile ? mobile : ""}  
                        
                    </nav>
                </Router>
        );
    }
}

export default NavBar;