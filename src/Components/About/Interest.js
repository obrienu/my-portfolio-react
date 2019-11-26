import React, { Component } from 'react';
import pic1 from "../../Styles/images/webdev.jpg"
import pic2 from "../../Styles/images/datasci.jpg"
import pic3 from "../../Styles/images/softwaredev.jpg"


export class Interest extends Component {
    render() {
const carousel = (
<div class="Pic-container bd-example">
<div id="carouselExampleCaptions" class= "arousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic1} class="img-fliud d-block w-100" alt="Web Developmentv" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Web Development</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic2}  class="img-fliud d-block w-100" alt="Data Sciencev" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Data Science</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic3}  class="img-fliud d-block w-100" alt="Software Development" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Software Development</h5>
      </div>
    </div>
  </div>

</div>
</div>
)

        return (
            <div  className={`${this.props.clickedRoute && "slide-in"} Background-body`}>
            {carousel}
            <div className="Background-header">
              <h4> My Interest</h4>
            </div>
            <div  className={`${this.props.clickedRoute && "fade"} Background-text`}>
                <p>My interests borders around Software Development, Web development and Data Science</p>
                <p>With the kn</p>
            </div>
        </div>
        );
    }
}

export default Interest;
