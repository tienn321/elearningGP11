import React, { Component } from 'react'
//import CourseItemCard from './CourseItemCard'
import CourseListCarousel from './CourseListCarousel'
// import kh1 from '../../../Assets/img/kh1.jpg';
// import kh2 from '../../../Assets/img/kh2.jpg';
// import kh3 from '../../../Assets/img/kh3.jpg';
// import kh4 from '../../../Assets/img/kh4.jpg';
// import kh5 from '../../../Assets/img/kh5.jpg';
// import kh6 from '../../../Assets/img/kh6.jpg';
// import kh7 from '../../../Assets/img/kh7.jpg';
// import kh8 from '../../../Assets/img/kh8.jpg';
// import kh9 from '../../../Assets/img/kh9.jpg';
// import kh10 from '../../../Assets/img/kh10.jpg';
// import kh11 from '../../../Assets/img/kh11.jpg';
// import kh12 from '../../../Assets/img/kh12.jpg';
// import kh13 from '../../../Assets/img/kh13.jpg';
// import kh14 from '../../../Assets/img/kh14.jpg';

export default class CourseListTab extends Component {
  //courseArr = [kh1,kh2,kh3,kh4,kh5,kh6,kh7,kh8,kh9,kh1]
  render() {
    return (
     
      <section class="courses">
        <div class="container courses_content">
          <div class="row">
            <div class="col-md-4 course_intro">
              <h2>The world’s largest selection of courses</h2>
              <p>
                Choose from over 100,000 online video courses with new additions published every month
            </p>
            </div>
            <div class="col-md-8 course_tab">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="business-tab"
                    data-toggle="tab"
                    href="#business"
                    role="tab"
                    aria-controls="business"
                    aria-selected="true"
                  >Business</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="design-tab"
                    data-toggle="tab"
                    href="#design"
                    role="tab"
                    aria-controls="design"
                    aria-selected="false"
                  >Design</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="photo-tab"
                    data-toggle="tab"
                    href="#photo"
                    role="tab"
                    aria-controls="photo"
                    aria-selected="false"
                  >Photography</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="development-tab"
                    data-toggle="tab"
                    href="#development"
                    role="tab"
                    aria-controls="development"
                    aria-selected="false"
                  >Development</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="marketing-tab"
                    data-toggle="tab"
                    href="#marketing"
                    role="tab"
                    aria-controls="marketing"
                    aria-selected="false"
                  >Marketing</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="it-tab"
                    data-toggle="tab"
                    href="#it"
                    role="tab"
                    aria-controls="it"
                    aria-selected="false"
                  >IT & Software</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="personal-tab"
                    data-toggle="tab"
                    href="#personal"
                    role="tab"
                    aria-controls="personal"
                    aria-selected="false"
                  >Personal Development</a
                  >
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="business"
                  role="tabpanel"
                  aria-labelledby="business-tab"
                >
                  <div class="course_item owl-carousel owl-theme">
                    
                    <CourseListCarousel/>
                  </div>
                </div>
                <div class="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
                  ...
              </div>
                <div class="tab-pane fade" id="photo" role="tabpanel" aria-labelledby="photo-tab">
                  ...
              </div>
                <div
                  class="tab-pane fade"
                  id="development"
                  role="tabpanel"
                  aria-labelledby="development-tab"
                >
                  ...
              </div>
                <div
                  class="tab-pane fade"
                  id="marketing"
                  role="tabpanel"
                  aria-labelledby="marketing-tab"
                >
                  ...
              </div>
                <div class="tab-pane fade" id="it" role="tabpanel" aria-labelledby="it-tab">
                  ...
              </div>
                <div
                  class="tab-pane fade"
                  id="personal"
                  role="tabpanel"
                  aria-labelledby="personal-tab"
                >
                  ...
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}
