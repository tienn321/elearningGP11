import React, { Component } from 'react'
import {connect} from 'react-redux'
//import CourseItemCard from './CourseItemCard'
import CourseListCarousel from './CourseListCarousel'
import CategoryItem from './CategoryItem'
import CategoryTab from './CategoryTab'
import CourseByCategory from './CourseByCategory'
import CourseService from '../../Store/Services/course';
class CourseListTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryList1: [],
      activeCategory:'BackEnd'
    }
  }
  componentDidMount() {
    this.getCategoryList();
  }

  getCategoryList = () => {
    CourseService.getCategory()
      .then((result) => {
        this.setState({
          categoryList1: result.data
        },
          //() => console.log('cateList', this.state.categoryList1)
        )
      })
      .catch((err) => console.log(err.message))
  }

  renderCategory = () => {
    return this.state.categoryList1.map((category, index) => {
      return <CategoryTab
        category={category}
        key={index}
        getActiveCategory={this.getActiveCategory}
      />     
      
    })
  }

  getActiveCategory = (maDanhMuc) => {
    this.setState({
      activeCategory: maDanhMuc
    },
      () => { console.log('active1',this.state.activeCategory)}
    )
  }
 

  // getListCourses = () => {
  //   this.props.courseListAll.filter((course) => {course.ma} )
  // }

  // getCoursesList = () => {
  //   //console.log('category', this.props.category)
  //   CourseService.getCoursesByCategory(this.state.activeCategory)
  //     .then((result) => {
  //       this.setState({
  //         listCourses: result.data
  //       })
  //     })
  //     .catch((err) => console.log(err.message))
  // }

  //renderContent = () => {
    
   // let a = this.state.categoryList1[0]
    // if (this.state.activeCategory === '') {
    //   this.setState({
    //     activeCategory: a.maDanhMuc
    //   },
    //     () => console.log('object active', this.state.activeCategory)
    //   )
    // }
    //let maDanhMuc = this.getActiveCategory();
    //this.props.courseListAll.filter((cate1) => cate1.maDanhMucKhoaHoc === maDanhMuc)
    //danhSach.map((category, index) => {
    //return <CourseByCategory />
    //})
 // }
  render() {
    

    return (
     
      <section className="courses">
        <div className="container courses_content">
          <div className="row">
            <div className="col-md-3 course_intro">
              <h2>The world’s largest selection of courses</h2>
              <p>
                CHỖ NÀY MUỐN VIẾT GÌ VIẾT
            </p>
            </div>

            <div className="col-md-9 course_tab">
              <ul className="nav nav-tabs" role="tablist">
               
                {this.renderCategory()}
              
              </ul>

              <div className="tab-content">
                <CourseListCarousel activeCategory={this.state.activeCategory} cardPerRow={4} />
              </div>
              {/* <div className="tab-content" id="myTabContent"> */}
                {/* <CourseByCategory /> */}
                
                {/* <div
                  className="tab-pane fade show active"
                  id="business"
                  role="tabpanel"
                  aria-labelledby="business-tab">
                    <CourseListCarousel/>
                </div> */}
               
              {/* </div> */}
            
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
const mapStateToProps = (state) => {
  return {
    courseListAll: state.CourseListReducer
  };
}

export default connect(mapStateToProps, null)(CourseListTab)