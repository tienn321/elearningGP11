import React, { Component } from 'react';
import { connect } from 'react-redux';

import CourseListCarouselAll from './CourseListCarouselAll'

class StudentView extends Component {
  render() {
    return (
      <section className="student container">
        <h3>Student are viewing</h3>
        <div className="student_course owl-carousel owl-theme">
          <CourseListCarouselAll cardPerRow={6}/>
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

export default connect(mapStateToProps, null)(StudentView)
