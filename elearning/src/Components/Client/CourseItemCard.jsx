import React, { Component } from 'react'


export default class CourseItemCard extends Component {
  render() {
    return (
      <div class="card">
        <img class="card-img-top" src="./img/kh4.jpg" alt="anh khoa hoc" />
        <div class="card-body">
          <h4 class="card-title"> TÊN KHÓA HỌC </h4>
          <div class="rating d-flex"> ĐÁNH GIÁ
            <div class="rating_stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <span> (LƯỢT XEM)</span>
          </div>
          <div class="price">
            {/* <span class="old_price">GHI DANH</span> */}
            <span class="new_price">$13.79</span>
          </div>
        </div>
      </div>
    )
  }
}
