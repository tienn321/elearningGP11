import React from 'react'
import Header from './Header'
import Footer from './Footer'

const PageCommon = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default PageCommon;