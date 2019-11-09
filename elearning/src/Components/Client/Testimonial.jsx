import React, { Component } from 'react'
//import TestimonialStudent from './TestimonialStudent'

export default class Testimonial extends Component {
  render() {
    return (
      <section class="testimonial">
        <div class="container">
          <h3>What our student have to say</h3>
           <div class="testmnl_list owl-carousel owl-theme">
            {/*<div class="testmnl_item ">
              <div class="testmnl_person">
                <div class="ava ava1">
                  <!-- <img src="./img/person1.jpg" alt="" /> -->
              </div>
                <p class="name">Borivoje</p>
              </div>
              <p class="testmnl_cmt">
                Udemy is a life saver. I don't have the time or money for a college education. My goal
                is to become a freelance web developer, and thanks to Udemy, I'm really close.
            </p>
            </div>

            <div class="testmnl_item ">
              <div class="testmnl_person">
                <div class="ava ava2">
                  <!-- <img src="./img/person2.jpg" alt="" /> -->
              </div>
                <p class="name">Dipesh</p>
              </div>
              <p class="testmnl_cmt">
                I believe in lifelong learning and Udemy is a great place to learn from experts. I've
                learned a lot and recommend it to all my friends.
            </p>
            </div>

            <div class="testmnl_item ">
              <div class="testmnl_person">
                <div class="ava">
                  <span>K</span>
                </div>
                <p class="name">Kathy</p>
              </div>
              <p class="testmnl_cmt">
                My children and I LOVE Udemy! The courses are fantastic and the instructors are so fun
                and knowledgeable. I only wish we found it sooner.
            </p>
            </div>

            <div class="testmnl_item ">
              <div class="testmnl_person">
                <div class="ava ava4">
                  <!-- <img src="./img/person4.jpg" alt="" /> -->
              </div>
                <p class="name">Zulaika</p>
              </div>
              <p class="testmnl_cmt">
                I work in project management and joined Udemy because I get great courses for less.
                The instructors are fantastic, interesting, and helpful. I plan to use Udemy for a
                long time!
            </p>
            </div>

            <div class="testmnl_item ">
              <div class="testmnl_person">
                <div class="ava ava5">
                  <!-- <img src="./img/person5.jpg" alt="" /> -->
              </div>
                <p class="name">Marco</p>
              </div>
              <p class="testmnl_cmt">
                Thank you Udemy! You've renewed my passion for learning and my dream of becoming a web
                developer.
            </p>
            </div>

            <div class="testmnl_item ">
              <div class="testmnl_person">
                <div class="ava">
                  <span>J</span>
                </div>
                <p class="name">Justin</p>
              </div>
              <p class="testmnl_cmt">
                The best part about Udemy is the selection. You can find a course for anything you
                want to learn!
            </p>
            </div> */}
            {/* <TestimonialStudent />
            <TestimonialStudent />
            <TestimonialStudent /> */}
          </div> 
          <div class="testmnl_partner">
            <p>Trusted by companies of all sizes</p>
            <div class="testmnl_partner-logo">
              <div class="partner_logo">
                <img src="./img/booking.svg" />
              </div>

              <div class="partner_logo">
                <img src="./img/volkswagen.svg" />
              </div>

              <div class="partner_logo">
                <img src="./img/mercedes.svg" />
              </div>

              <div class="partner_logo">
                <img src="./img/pinterest.svg" />
              </div>

              <div class="partner_logo">
                <img src="./img/adidas.svg" />
              </div>

              <div class="partner_logo">
                <img src="./img/paypal.svg" />
              </div>
            </div>

            <div class="testmnl_coop">
              <div class="testmnl_coop-item teacher">
                <h4>Teach on Udemy</h4>
                <p>Teach what you love. Udemy gives you the tools to create an online course.</p>
                <button class="btn btn--red">Starteaching</button>
              </div>

              <div class="testmnl_coop-item">
                <h4>Udemy for Business</h4>
                <p>Get unlimited access to 3,500+ of Udemy’s top courses for your team.</p>
                <button class="btn btn--red">Get Udemy for Business</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
