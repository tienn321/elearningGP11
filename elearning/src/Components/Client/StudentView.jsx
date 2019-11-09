import React, { Component } from 'react'

import CourseListCarousel from './CourseListCarousel'

export default class StudentView extends Component {
  render() {
    return (
      <section class="student container">
        <h3>Student are viewing</h3>
        <div class="student_course owl-carousel owl-theme">
          <CourseListCarousel/>
        </div>
        </section>
    )
  }
}
