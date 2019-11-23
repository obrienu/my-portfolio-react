import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import logo from "../../Styles/images/logo.png"

export class NavBar extends Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }

      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }

      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

    render() {

        const { width } = this.state;
        const isMobile = width <= 500

        const internalLinks = (
                                <div className="inLinks">
                                     <img className="logo" src={logo} alt="logo" />
                                    <NavLink className="nav-link" to="#">Home</NavLink>
                                    <NavLink className="nav-link" to="#">About</NavLink>
                                    <NavLink className="nav-link" to="#">Projects</NavLink>
                                    <NavLink className="nav-link" to="#">Contact</NavLink>
                                </div>
    )

        const socialLinks = (
                            <div className="socialLink">
                                <a className=" social-icon bounce" href="#"><i className="fab fa-github"></i></a>
                                <a className= "social-icon bounce" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="social-icon bounce" href="#"><i className="fab fa-facebook"></i></a>
                                <a className="social-icon bounce" href="#"><i className="fab fa-github"></i></a>
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
                      {mobile}  
                        
                    </nav>
                </Router>
        );
    }
}

export default NavBar;