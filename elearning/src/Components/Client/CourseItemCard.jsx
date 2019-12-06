import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";


class CourseItemCard extends Component {
  render() {
    let {course} = this.props
    return (
      <div className="card">
        <Link className='card_img' to={'/course/' + course.maKhoaHoc}>
          <img className="card-img-top" src={course.hinhAnh} alt="anh khoa hoc" />
        </Link>
        
        <div className="card-body">
          <h4 className="card-title">{course.tenKhoaHoc.length>13 ? course.tenKhoaHoc.substr(0,13)+"..." : course.tenKhoaHoc} </h4>
          <div className="rating d-flex justify-content-between"> 
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
export default withRouter(CourseItemCard)