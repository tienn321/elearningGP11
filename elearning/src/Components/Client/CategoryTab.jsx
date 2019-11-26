import React, { Component } from 'react'
import CategoryItem from './CategoryItem'
import { connect } from 'react-redux';
import {getCategory} from '../../Store/Actions/course'

class CategoryTab extends Component {
  render() {
    let { category } = this.props 
    console.log('category',this.props.category)
    return (
      <li className="nav-item">
        <button
          className="nav-link"
          // activeClass='active'
          // id={`${category.maDanhMuc}-tab`}
           data-toggle="tab"
           //href='#123'
          role="tab"
           aria-controls={category.maDanhMuc}
          aria-selected="true"
          onClick={() => { this.props.getActiveCategory(category.maDanhMuc) }}
        >
          <CategoryItem category={category.tenDanhMuc}/>
        </button >
      </li>
    )
  }
}
export default connect(null, {getCategory})(CategoryTab)