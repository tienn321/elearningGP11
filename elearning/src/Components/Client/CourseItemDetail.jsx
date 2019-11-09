import React, { Component } from 'react'
import CourseItemCard from './CourseItemCard'
export default class CourseItemDetail extends Component {
  render() {
    return (
      <div className='coursedetail'>
        <div className='coursedetail_title'>
          <h1>Complete Python Bootcamp: Go from zero to hero</h1>
        </div>
        <div className='row'>
          <div className='col-md-8 coursedetail_content'>
            <h3>Mô tả khóa học</h3>
            <p className='coursedetail_detail'>
              DDaay laf mo ta khoa hoc
            </p>
            <div className='related_course'>
              <h4>Các khóa học khác</h4>
              <div className='related_morecourses'>
                <CourseItemCard />
                <CourseItemCard />
              </div>
              
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card coursedetail_card" style={{ width: '18rem' }}>
              <img src="..." className="card-img-top" alt="hinhkhoahoc" />
              <div className="card-body">
                <h5 className="card-title coursedetail_card_title">tieu de khoa hoc</h5>
                <p className="card-text coursedetail_card_content">chua biết viet gi</p>
                <button className="btn btn--red_big coursedetail_card_btn">GHI DANH</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
