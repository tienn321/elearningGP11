import React from 'react'

export default function CategoryItem(props) {
  return (
    <React.Fragment>
     {props.category}
      {props.children}
    </React.Fragment>)
  }
