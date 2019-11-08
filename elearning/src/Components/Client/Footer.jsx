import React, { Component } from 'react'
import logo from '../../../Assets/img/logoelearning.jpg'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_head">
          {/* <div class="footer_menu"> */}
          <ul className="footer_menu">
            <li> <a href="#"><strong> Udemy for Business </strong></a></li>
            <li> <a href="#"> Careers</a></li>
            <li> <a href="#"> Sitemap</a></li>
            <li> <a href="#"><strong> Teach on Udemy</strong></a></li>
            <li> <a href="#"> Blog</a></li>
            <li> <a href="#"> Popular courses</a></li>
            <li> <a href="#"> Udemy app</a></li>
            <li> <a href="#"> Help and Support</a></li>
            <li> </li>
            <li> <a href="#"> About us</a></li>
            <li> <a href="#"> Affiliate</a></li>
            <li> <a href="#"> </a></li>
          </ul>
          {/* </div> */}
          <div className="footer_language">
            <i className="fa fa-globe" aria-hidden="true" />
            <p>English</p>
            <i className="fa fa-angle-up" />
          </div>
        </div>
        <div className="footer_end">
          <div className="copyright">
            <a className="footer_logo" href="#">
              <img src={logo} alt="Logo Udemy" />
            </a>
          </div>
          <div className="policy">
            <a href="#">Term</a>
            <a href="#">Privacy Policy and Cookie Policy</a>
          </div>
        </div>
      </footer>

    )
  }
}
