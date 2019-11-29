import React, { Component } from 'react'

export default class BannerCarousel extends Component {
  render() {
    return (
      
        <div className="mb-5">
          <section className="myCover">
            {/* <div className="myCover_content">
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
            </div> */}
          </section>
          {/* END cover */}
          <section className="intro">
            <div className="intro_content row">
              <div className="col-md-4 intro_item">
                <i className="fa fa-bullseye intro_icon" />
                <div className="icon_content">
                  <p>Tài liệu phong phú</p>
                  <p>Chia sẻ kho tài liệu học tập miễn phí, hữu ích với nhiều lĩnh vực phong phú.</p>
                </div>
              </div>
              <div className="col-md-4 intro_item">
                <i className="fa fa-spinner intro_icon" />
                <div className="icon_content">
                  <p>Lộ trình đầy đủ</p>
                  <p>Học theo định hướng sẽ giúp bạn tự tin trước khi bắt đầu con đường sự nghiệp</p>
                </div>
              </div>
              <div className="col-md-4 intro_item">
                <i className="fa fa-history intro_icon" />
                <div className="icon_content">
                  <p>Hỗ trợ 24/7</p>
                  <p>Nhóm chat với hàng ngàn thành viên thân thiện giúp đỡ nhau</p>
                </div>
              </div>
            </div>
          </section>
          {/* END intro */}
        </div>

      
    )
  }
}
