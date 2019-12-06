import React, { Component } from 'react'


export default class CourseItemCard2 extends Component {
  render() {
    let {course} = this.props
    return (
      <div className="card related_morecourses_card">
        <div className='card_img related_morecourses_card_img'>
          <img className="card-img-top" src={course.hinhAnh} alt="anh khoa hoc" />
        </div>
        
        <div className="card-body">
          <h4 className="card-title related_morecourses_card_title">{course.tenKhoaHoc} </h4>
          <div className="rating">
            <div className="rating_stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
          </div>
          <div className="price">
            <button className="new_price btn btn--red_big">Xem thêm</button>
            {/* <button className="new_price btn btn--red">Ghi Danh</button> */}
          </div>
        </div>
      </div>
    )
  }
}
