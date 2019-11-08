import React, { Component } from 'react'
import CourseItem from './CourseItem'

export default class StudentView extends Component {
  render() {
    return (
      <section class="student container">
        <h3>Student are viewing</h3>
        <div class="student_course owl-carousel owl-theme">
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
        </section>
    )
  }
}
