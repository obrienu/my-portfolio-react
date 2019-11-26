import React, { Component } from 'react';
import NavBar from './NavBar';
import HomeBg from './HomeBg';
import '../../Styles/Home.css';


export class HomeUi extends Component {
    render() {
        return (
            <div className="HomeUi">
                <NavBar width = {this.props.width} />
                <HomeBg />
            </div>
        );
    }
}

export default HomeUi;
