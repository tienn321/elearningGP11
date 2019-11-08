import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
      <div>
        <div>
          <section className="myCover">
            <div className="myCover_content">
              <h1>Learn on your schedule</h1>
              <p>Shape your future with experts. Courses from $13.99. Ends 9/3, 11:59 p.m. PDT.</p>
              <div className="myCover_search">
                <form className="input-group ">
                  <input type="text" className="form-control" placeholder="What do you want to learn" />
                  <div className="input-group-append">
                    <span className="btn input-group-text"><i className="fa fa-search" /></span>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* END cover */}
          <section className="intro">
            <div className="intro_content row">
              <div className="col-md-4 intro_item">
                <i className="fa fa-bullseye intro_icon" />
                <div className="icon_content">
                  <p>80,000 online courses</p>
                  <p>Explore a variety of fresh topic</p>
                </div>
              </div>
              <div className="col-md-4 intro_item">
                <i className="fa fa-spinner intro_icon" />
                <div className="icon_content">
                  <p>Expert instruction</p>
                  <p>Find the right instructor for you</p>
                </div>
              </div>
              <div className="col-md-4 intro_item">
                <i className="fa fa-history intro_icon" />
                <div className="icon_content">
                  <p>Lifetime access</p>
                  <p>Learn on your schedule</p>
                </div>
              </div>
            </div>
          </section>
          {/* END intro */}
        </div>

      </div>
    )
  }
}
