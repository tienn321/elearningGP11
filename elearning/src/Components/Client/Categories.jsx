import React, { Component } from 'react'
import CategoryItem from './CategoryItem'
import CategoryItemContainer from './CategoryItemContainer'
import CourseService from '../../Store/Services/course';
export default class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryList: [],
    }
  }
  componentDidMount() {
    this.getCategoryList();
  }

  getCategoryList = () => {
    CourseService.getCategory()
      .then((result) => {
        this.setState({
          categoryList: result.data
        },
        )
      })
      .catch((err) => console.log(err.message))
  }
  renderCategory = () => {
    return this.state.categoryList.map((category, index) => {
      return <CategoryItemContainer
        category={category.tenDanhMuc}
        key={index}
        
      />

    })
  }
  render() {
    
    return (
      <section className="container categories">
        <h3>Danh mục khóa học đang cung cấp</h3>
        <div className="categories_list">
          {this.renderCategory()}
          {/* <CategoryItemContainer category={this.state.categoryList}/> */}

          {/* <div className="categories_item">
            <i className="far fa-chart-bar"></i>
            <p>Business</p>
          </div>

          <div className="categories_item">
            <i className="fas fa-tv"></i>
            <p>IT & Software</p>
          </div>

          <div className="categories_item">
            <i className="fas fa-pencil-ruler"></i>
            <p>Design</p>
          </div>

          <div className="categories_item">
            <i className="fas fa-bullseye"></i>
            <p>Marketing</p>
          </div>

          <div className="categories_item">
            <i className="fas fa-music"></i>
            <p>Music</p>
          </div> */}
        </div>
      </section>
    )
  }
}
