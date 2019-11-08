import React, { Component } from 'react'


export default class CourseItem extends Component {
  render() {
    return (
      <div class="card">
        <img class="card-img-top" src="./img/kh4.jpg" alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">
            The Data Science Course 2019: Complete Data Science Bootcamp
                      </h4>
          <p class="card-text">365 Careers, 365 Careers Team</p>
          <div class="rating d-flex">
            <div class="rating_stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <span> 4.8 </span>
            <span> (43028)</span>
          </div>
          <div class="price">
            <span class="old_price">$179.99</span>
            <span class="new_price">$13.79</span>
          </div>
        </div>
      </div>
    )
  }
}
