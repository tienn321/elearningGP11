import React, { Component } from 'react'
import Header from '../Components/Client/Header';
import BannerCarousel from '../Components/Client/BannerCarousel';
//import CourseListCarousel from '../Components/Client/CourseListCarousel';
import CourseListTab from '../Components/Client/CourseListTab';
import StudentView from '../Components/Client/StudentView';
import Categories from '../Components/Client/Categories';
import Testimonial from '../Components/Client/Testimonial'
import Footer from '../Components/Client/Footer';
export default class HomePage extends Component {
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
