import React, { Component } from 'react'
import CourseItemCard2 from './CourseItemCard2'
import CourseService from '../../Store/Services/course';
import _ from 'lodash';
export default class CourseItemDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courseActive: '',
      courseCategory:'',
      listRelated:[]
    }
  }
  componentDidMount() {
    let maKhoaHoc = this.props.match.params.makh;
    //console.log('maKH truyen vao',maKhoaHoc)
    this.getCourse(maKhoaHoc);
 
  }

  getCourse = (maKhoaHoc) => {
    CourseService.getCourseDetail(maKhoaHoc)
      .then((result) => {
        this.setState({
          courseActive: result.data,
          courseCategory: result.data.danhMucKhoaHoc.maDanhMucKhoahoc
        })
      })
      .then(() => this.getRelatedCourses())
      .catch((err) => console.log(err.message))
  }

  getRelatedCourses = () => {
    //let course = this.state.courseCategory;
    //console.log('course', course)
    CourseService.getCoursesByCategory(this.state.courseCategory)
      .then((result) => {
        this.setState({
          listRelated: result.data
        },
          //() => console.log('relatedlist', this.state.listRelated)
        )
      })
      .catch((err) => console.log(err.message))
  }
  renderRelatedCourses = () => {
    return this.state.listRelated.map((course, index) => {
      return <CourseItemCard2 index={index} course={course}/>
    })
  }
  
  render() {
    let { tenKhoaHoc, moTa, hinhAnh,ngayTao } = this.state.courseActive;
    return (
      <div className='coursedetail'>
        
        <div className='coursedetail_title'>
            <h1>{tenKhoaHoc}</h1>
        </div>
        
        <div className='row'>
          <div className='col-md-8 coursedetail_content'>
            <div className='coursedetail_content-top'>
              <h3>Mô tả khóa học</h3>
              <p>Ngày tạo: {ngayTao}</p>
            </div>
            
            <p className='coursedetail_detail'>
              {moTa} <br/>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <br />
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className='related_course'>
              <h4>Các khóa học khác</h4>
              <div className='related_morecourses'>
                  {this.renderRelatedCourses()}
              </div>
              
            </div>
          </div>

          <div className='col-md-4'>
            <div className="card coursedetail_card" style={{ width: '18rem' }}>
              <img src={hinhAnh} className="card-img-top" alt="hinhkhoahoc" />
              <div className="card-body">
                <h5 className="coursedetail_card_title">{tenKhoaHoc}</h5>
                {/* <p className="card-text coursedetail_card_content">chua biết viet gi</p> */}
                <div className="rating_stars my-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                </div>
                <button className="btn btn--red_big coursedetail_card_btn">GHI DANH</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
