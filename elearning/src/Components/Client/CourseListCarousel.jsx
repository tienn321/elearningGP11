import React, { Component } from 'react'
import Slider from "react-slick";
import NextArrow from './Buttons/NextArrow';
import PrevArrow from './Buttons/PrevArrow';
import CourseItemCard from './CourseItemCard';


export default class CourseListCarousel extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
      <div className='container'>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <CourseItemCard/>
          </div>
          <div>
            <CourseItemCard />
          </div>
          <div>
            <CourseItemCard/>
          </div>
          <div>
            <CourseItemCard/>
          </div>
          <div>
            <CourseItemCard/>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    )
  }
}
