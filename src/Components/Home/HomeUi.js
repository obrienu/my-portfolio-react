import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavBar from './NavBar';
import HomeBg from './HomeBg';
import '../../Styles/Home.css';


export class HomeUi extends Component {
    render() {
        return (
            <div className="HomeUi">
                <NavBar />
                <HomeBg />
            </div>
        );
    }
}

export default HomeUi;
