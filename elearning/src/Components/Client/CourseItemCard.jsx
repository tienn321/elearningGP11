import React, { Component } from 'react'


export default class CourseItemCard extends Component {
  render() {
    let {course} = this.props
    return (
      <div className="card">
        <img className="card-img-top" src={course.hinhAnh} alt="anh khoa hoc" />
        <div className="card-body">
          <h4 className="card-title">{course.tenKhoaHoc} </h4>
          <div className="rating d-flex"> {course.danhGia}
            {/* <div className="rating_stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div> */}
            <span> ({course.luotXem})</span>
          </div>
          <div className="price">
            {/* <span className="old_price">GHI DANH</span> */}
            <span className="new_price">GHI DANH</span>
          </div>
        </div>
      </div>
    )
  }
}
