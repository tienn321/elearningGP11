import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      
        
      <Slider {...settings}>
          <div className="testmnl_item">
            <div className="testmnl_person">
              <div className="ava">
                <span>K</span>
              </div>
              <p className="name">Kathy</p>
            </div>
            <p className="testmnl_cmt">
              My children and I LOVE Udemy! The courses are fantastic and the instructors are so fun
              and knowledgeable. I only wish we found it sooner.
            </p>
          </div>

          <div className="testmnl_item ">
            <div className="testmnl_person">
              <div className="ava ava1">
                <img src="./img/person1.jpg" alt="" />
              </div>
              <p className="name">Borivoje</p>
            </div>
            <p className="testmnl_cmt">
              Udemy is a life saver. I don't have the time or money for a college education. My goal
              is to become a freelance web developer, and thanks to Udemy, I'm really close.
            </p>
          </div>

          <div className="testmnl_item ">
            <div className="testmnl_person">
              <div className="ava ava2">
                <img src="./img/person2.jpg" alt="" />
              </div>
              <p className="name">Dipesh</p>
            </div>
            <p className="testmnl_cmt">
              I believe in lifelong learning and Udemy is a great place to learn from experts. I've
              learned a lot and recommend it to all my friends.
            </p>
          </div>

          <div className="testmnl_item ">
            <div className="testmnl_person">
              <div className="ava ava4">
                <img src="./img/person4.jpg" alt="" />
              </div>
              <p className="name">Zulaika</p>
            </div>
            <p className="testmnl_cmt">
              I work in project management and joined Udemy because I get great courses for less.
              The instructors are fantastic, interesting, and helpful. I plan to use Udemy for a
              long time!
            </p>
          </div>

          <div className="testmnl_item ">
            <div className="testmnl_person">
              <div className="ava ava5">
                <img src="./img/person5.jpg" alt="" />
              </div>
              <p className="name">Marco</p>
            </div>
            <p className="testmnl_cmt">
              Thank you Udemy! You've renewed my passion for learning and my dream of becoming a web
              developer.
            </p>
          </div>

          <div className="testmnl_item ">
            <div className="testmnl_person">
              <div className="ava">
                <span>J</span>
              </div>
              <p className="name">Justin</p>
            </div>
            <p className="testmnl_cmt">
              The best part about Udemy is the selection. You can find a course for anything you
              want to learn!
            </p>
          </div>

          
        </Slider>
      
    );
  }
}
