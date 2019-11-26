import React, { Component } from 'react';
import CourseListCarousel from './CourseListCarousel';
import CourseItemCard from './CourseItemCard';
import CategoryItem from './CategoryItem';
import CourseService from '../../Store/Services/course';
import { connect } from 'react-redux'


class CourseByCategory extends Component {  
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     theList: []
  //   }
  // }

  // componentDidMount() {
  //   this.getCoursesList();
  // }

  // getCoursesList = () => {
  //   console.log('cate', this.props.categorySelected)
  //   CourseService.getCoursesByCategory(this.props.categorySelected)
  //     .then((result) => {
  //       this.setState({
  //         theList: result.data
  //       },()=>{console.log('thelist',this.state.theList)})
  //     })
  //     .catch((err) => console.log(err.message))
  // }
 
  render() {
    let { category } = this.props
    //console.log('thelist categorySelected', this.props.categorySelected)
    //console.log('activeCategory123', category)

    // const getCoursesList = () => {
    //   console.log('cate', this.props.categorySelected)
    //   CourseService.getCoursesByCategory(this.props.categorySelected)
    //     .then((result) => {
    //       this.setState({
    //         theList: result.data
    //       })         
    //     }, () => <CourseListCarousel cardPerRow={4} listCourses={this.state.theList} /> 
    //     )
        
        
    //     .catch((err) => console.log(err.message))
    // }

    return (
      <div
        className="tab-pane fade show active"
        id={category}
        role="tabpanel"
        aria-labelledby={`${category}-tab`}>
        {/* {getCoursesList()} */}
        {/* <CourseListCarousel cardPerRow={4}
          //listCourses={this.state.theList}
        /> */}
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     categorySelected: state.CategorySelectedReducer
//   };
// }
//export default connect(mapStateToProps, null)
export default   (CourseByCategory)