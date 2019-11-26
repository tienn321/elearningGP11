import React, { Component } from 'react'
import { connect } from 'react-redux';
import CourseService from '../Store/Services/course';

//import component
import CourseListCarousel from '../Components/Client/CourseListCarousel'
import CategoryItem from '../Components/Client/CategoryItem'

class CourseListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryList: []
    }
  }
  componentDidMount() {
    
      this.getCategoryList();

  }
  
  getCategoryList = () => {
  
    CourseService.getCategory()
      .then((result) => {
        this.setState({
          categoryList : result.data
        })
      })
      .catch((err) => console.log(err.message))
  }

  renderCategory = () => {
    return this.state.categoryList.map((category, index) => {
      return <CategoryItem category={category.tenDanhMuc} key={index}>
        <CourseListCarousel cardPerRow={4} activeCategory={category.maDanhMuc} />
      </CategoryItem>
      
    })
  }



  render() {
    return (
      <div>
        <section className="intro course-list-page">
          <h2 className='courselist_title'>ALL COURSE</h2>
        </section>
        {this.renderCategory()}
       
        
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    courseListAll: state.CourseListReducer
  };
}

export default connect(mapStateToProps,null)(CourseListPage)