import React, { Component } from 'react'

export default class Categories extends Component {
  render() {
    return (
      <section class="container categories">
        <h3>Top categories</h3>
        <div class="categories_list">
          <div class="categories_item">
            <i class="far fa-window-maximize"></i>
            <p>Development</p>
          </div>

          <div class="categories_item">
            <i class="far fa-chart-bar"></i>
            <p>Business</p>
          </div>

          <div class="categories_item">
            <i class="fas fa-tv"></i>
            <p>IT & Software</p>
          </div>

          <div class="categories_item">
            <i class="fas fa-pencil-ruler"></i>
            <p>Design</p>
          </div>

          <div class="categories_item">
            <i class="fas fa-bullseye"></i>
            <p>Marketing</p>
          </div>

          <div class="categories_item">
            <i class="fa fa-book"></i>
            <p>Personal Development</p>
          </div>

          <div class="categories_item">
            <i class="fas fa-camera"></i>
            <p>Photography</p>
          </div>

          <div class="categories_item">
            <i class="fas fa-music"></i>
            <p>Music</p>
          </div>
        </div>
      </section>
    )
  }
}
