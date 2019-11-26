import React, { Component } from 'react'

import Header from '../Components/Client/Header';
import BannerCarousel from '../Components/Client/BannerCarousel';
//import CourseListCarousel from '../Components/Client/CourseListCarousel';
import CourseListTab from '../Components/Client/CourseListTab';
import StudentView from '../Components/Client/StudentView';
import Categories from '../Components/Client/Categories';
import Testimonial from '../Components/Client/Testimonial'
import Footer from '../Components/Client/Footer';

//import other methods
import { connect } from 'react-redux';
//import CourseService from '../Store/Services/course';
class HomePage extends Component {
  render() {
    
    return (
      <div>
        <Header />
        <BannerCarousel />
        <CourseListTab/>
        {/* <CourseListCarousel/> */}
        <StudentView />
        <Categories />
        <Testimonial />
        <Footer/>
      </div>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     courseList: state.CourseListReducer
//   };
// }

export default (HomePage)