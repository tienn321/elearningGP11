import React, { Component } from 'react'


export default class CourseItemCard extends Component {
  render() {
    let {course} = this.props
    return (
      <div className="card">
        <div className='card_img'>
          <img className="card-img-top" src={course.hinhAnh} alt="anh khoa hoc" />
        </div>
        
        <div className="card-body">
          <h4 className="card-title">{course.tenKhoaHoc} </h4>
          <div className="rating d-flex justify-content-between"> {course.danhGia}
            <div className="rating_stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-half-alt"></i>
            </div>
            
            <span> <i className="fa fa-eye"></i> {course.luotXem}</span>
          </div>
          <div className="price">
            <button className="new_price btn btn--white">Chi Tiết</button>
            <button className="new_price btn btn--red">Ghi Danh</button>
          </div>
        </div>
      </div>
    )
  }
}
