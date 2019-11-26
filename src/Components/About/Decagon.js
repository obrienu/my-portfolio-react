import React, { Component } from 'react';
import pic from '../../Styles/images/decagon.jpg'


export class Decagon extends Component {
    render() {
        return (
            <div  className={`${this.props.clickedRoute && "slide-in"} Background-body`}>
            <div className="Pic-container">
                <img className="img-fluid" src={pic} alt="pic of khugbor" />
            </div>
            <div className="Background-header">
              <h4> Decagon Institute</h4>
            </div>
            <div  className={`${this.props.clickedRoute && "fade"} Background-text`}>
                <p>nda e tempora ut si assumenda tenetur amet eaque, veritatis minima! Debitis commodi quae, 
                    perferendis aliquid corporis labore nihil? Sed earum cum expedita rem fugiat excepturi 
                    corporis odio nulla numquam?
                </p>
            </div>
        </div>
    
        );
    }
}

export default Decagon;
