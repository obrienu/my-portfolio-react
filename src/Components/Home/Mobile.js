import React, { Component } from 'react';
export class Mobile extends Component {
    render() {
        return (
            <div className="Mobile">
                {this.children.props}
            </div>
        );
    }
}

export default Mobile;
