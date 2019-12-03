import React from 'react'

export default function CategoryItem(props) {
  return (
    <>
      <p>{props.category} </p>
      {props.children}
    </>)
  }
