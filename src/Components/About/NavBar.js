import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


export class NavBar extends Component {
    constructor(props){
        super(props)
    
    this.handleClick =this.handleClick.bind(this)
    }

handleClick(){
    this.props.navIconFunc()
}

    render() {
        let Nav = ""
        if(this.props.clicked === true){
            Nav = (
                <div className="About-nav nav-animation">
                   
                        <NavLink className="About-link" onClick={this.handleClick}  exact activeClassName=".activeLink" to="/">Background</NavLink>
                        <NavLink className="About-link" onClick={this.handleClick} exact activeClassName=".activeLink" to="/decagon">Decagon</NavLink>
                        <NavLink className="About-link" onClick={this.handleClick} exact activeClassName=".activeLink" to="/interests">Interests</NavLink>
                   
                </div>
        )
        }else Nav = (
            <span onClick={this.handleClick} className="Nav-icon"><i  className="fas fa-bars"></i></span>
        )
        return (
            <div className="About-NavContainer">
                {Nav}
            </div>
        );
    }
}

export default NavBar;
