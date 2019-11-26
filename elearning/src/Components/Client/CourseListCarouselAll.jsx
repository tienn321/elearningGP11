import React, { Component } from 'react'
import { connect } from 'react-redux'
//components
import CourseItemCard from './CourseItemCard';

//slick
import Slider from "react-slick";
import NextArrow from './Buttons/NextArrow';
import PrevArrow from './Buttons/PrevArrow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class CourseListCarouselAll extends Component {
 
  render() {   
    //render dư liệu hiện ra
    const elmItem = this.props.courseListAll.map((course,index) => <CourseItemCard key={index} course={course}/> )

    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: this.props.cardPerRow,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    
    return (
      <React.Fragment>
        
        <Slider {...settings}>
          {elmItem}
          
        </Slider>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    courseListAll: state.CourseListReducer
  };
}

export default connect(mapStateToProps, null)(CourseListCarouselAll)
