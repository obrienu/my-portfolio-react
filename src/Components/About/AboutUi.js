import React, { Component } from 'react';
import NavBar from './NavBar';
import {
    Switch,
    Route
  } from "react-router-dom";
import Background from './Background'
import Decagon from './Decagon'
import Interest from './Interest'

import '../../Styles/About.css'

export class AboutUi extends Component {
    constructor(props){
        super()
        this.state ={
            isClicked : false,
            isClickedRoute: true
        }

    this.handleNav = this.handleNav.bind(this)
    
    }

    handleNav(e){
        this.setState(curState => ({
            isClicked: !curState.isClicked,
            isClickedRoute: !curState.isClickedRoute
        }))
    }

    render() {
        
        return (
            <div className="About">
                <NavBar navIconFunc = {this.handleNav} clicked= {this.state.isClicked} />
            <Switch>
                <Route exact path="/" render={() => <Background clickedRoute = {this.state.isClickedRoute} />} />
                <Route exact path="/decagon" render={ () => <Decagon clickedRoute = {this.state.isClickedRoute} />} />
                <Route exact path="/interests" render={ () => <Interest clickedRoute = {this.state.isClickedRoute} />} />
            </Switch>    
            </div>
        );
    }
}

export default AboutUi;
