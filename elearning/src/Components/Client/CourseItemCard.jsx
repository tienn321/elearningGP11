import React, { Component } from 'react'


export default class CourseItemCard extends Component {
  render() {
    let {course} = this.props
    return (
      <div className="card courseitem_card">
        <img className="card-img-top courseitem_card_img" src={course.hinhAnh} alt="anh khoa hoc" />
        <div className="card-body">
          <h4 className="card-title">{course.tenKhoaHoc} </h4>
          <div className="rating">
            
            <span className='courseitem_card_view'> <i class="fa fa-eye"></i> {course.luotXem}</span>
          </div>
          <div className="price">
            
            <button className="btn btn-success new_price courseitem_card_price mt-2">GHI DANH</button>
          </div>
        </div>
      </div>
    )
  }
}
