import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash';
//components
import CourseItemCard from './CourseItemCard';

//slick
import Slider from "react-slick";
import NextArrow from './Buttons/NextArrow';
import PrevArrow from './Buttons/PrevArrow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseService from '../../Store/Services/course';

class CourseListCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theList: [],
      activeCategory2:''
    }
  }

  componentDidMount() {
    
   // if (!_.isUndefined(this.props.category)) {
    this.getCoursesList();
    // }
    // else {
      // this.setState({
      //   activeCategory2: this.props.activeCategory
      // })
    // }
      // this.getAllCourses();
    // this.setState({
    //   theList: this.props.listCourses
    //   })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let a = nextProps.activeCategory;
    let b = prevState.activeCategory;
    if (nextProps.activeCategory !== prevState.activeCategory) {
      return {
         activeCategory2: a,
       } 
    }
    else return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeCategory !== this.props.activeCategory) {
      //Perform some operation here
      this.setState({ activeCategory2: this.props.activeCategory });
      this.getCoursesList();
    }  }

  getCoursesList = () => {
    console.log('active2', this.state.activeCategory2)
    CourseService.getCoursesByCategory(this.state.activeCategory2 )
      .then((result) => {
        this.setState({
          theList: result.data
        })
      })
      .catch((err) => console.log(err.message))
  }
 
  render() {   
    //render dư liệu hiện ra
    //console.log('ds in ra',this.state.theList)
    const elmItem = this.state.theList.map((course,index) => <CourseItemCard key={index} course={course}/> )

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
    categorySelected: state.categorySelected
  };
}

export default connect(mapStateToProps, null)(CourseListCarousel)
