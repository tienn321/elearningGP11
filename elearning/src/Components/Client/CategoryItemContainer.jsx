import React, { Component } from 'react'
import CategoryItem from './CategoryItem'
export default class CategoryItemContainer extends Component {
  render() {
    return (
      <div className="categories_item">
        <i className="fa fa-check"></i>    
          <CategoryItem category={this.props.category} />
                
      </div>
    )
  }
}
