import React, { Component } from 'react'
//import logo from '/public/logoelearning.jpg'; => cái này làm không được 
import logo from '../../../Assets/img/logoelearning.jpg'

export default class Header extends Component {
  render() {
    return (
      <header className="container-fluid myNavBar">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="col-xl-8 col-lg-9 col-md-8 col-sm-6">
            <div className="row">
              <a className="navbar-brand" href="#index.html">
                <img src={logo} alt="Logo Udemy" />
              </a>
              <div className="myNavBar_categories">
                <i className="fa fa-th  mx-2" />
                Categories
              </div>
              <div className="myNavBar_search">
                <form className="input-group ">
                  <input type="text" className="form-control" placeholder="Search for anything" />
                  <div className="input-group-append">
                    <span className="btn input-group-text"><i className="fa fa-search" /></span>
                  </div>
                </form>
              </div>
            </div>
            {/* END row */}
          </div>
          {/* END col-6 */}
          <div className="col-xl-4 col-lg-3 col-md-4 col-sm-4">
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <a className="nav-link business" href="index.html">Udemy for business</a>
                </li>
                <li className="nav-item instructor">
                  <a className="nav-link" href="index.html">Teach on Udemy</a>
                </li> */}
                <li className="nav-item">
                  <i className="fa fa-shopping-cart" />
                </li>
                <li className="nav-item ">
                  <div className="button d-flex">
                    <button className="btn mr-1 btn--white" type="submit">Log In</button>
                    <button className="btn btn--red" type="submit">Sign Up</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* END col-6 */}
          <button className="navbar-toggler d-lg-none col-sm-2" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
      </header>

    )
  }
}
