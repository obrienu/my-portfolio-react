import React, { Component } from 'react';

export class HomeBg extends Component {
    render() {
        return (
            <div className="Home-container">
                <div id="Home-Bg"></div>
                    <div className="Home-body">
                        <h1 className="display-3 bounce">Khugbor Longe  <span><i className="fab fa-studiovinari"></i></span></h1>
                        <h3 className="display-3 bounce">Full-Stack Software Developer</h3>
                    </div>
            </div>
        );
    }
}

export default HomeBg;
