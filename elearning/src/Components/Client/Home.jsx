import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import CourseList from './CourseList'
import StudentView from './StudentView'
import Categories from './Categories'
import Testimonial from './Testimonial'
import Footer from './Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <CourseList />
        <StudentView />
        <Categories />
        <Testimonial />
        <Footer />
      </div>
    )
  }
}
