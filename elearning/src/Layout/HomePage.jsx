import React, { Component } from 'react'
import BannerCarousel from '../Components/Client/BannerCarousel';
//import CourseListCarousel from '../Components/Client/CourseListCarousel';
import CourseListTab from '../Components/Client/CourseListTab';
import StudentView from '../Components/Client/StudentView';
import Categories from '../Components/Client/Categories';
import Testimonial from '../Components/Client/Testimonial'


//import other methods
import { connect } from 'react-redux';
//import CourseService from '../Store/Services/course';
class HomePage extends Component {
  render() {
    
    return (
      <>

        <BannerCarousel />
        <CourseListTab/>
        <StudentView />
        <Categories />
        <Testimonial />
        
      </>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     courseList: state.CourseListReducer
//   };
// }

export default (HomePage)