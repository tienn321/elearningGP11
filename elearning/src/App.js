import React, { useEffect } from "react";

//import './App.css';
import './Style/main.scss';
import Layout from "./Layout";
import { connect } from 'react-redux';
import { getCourses } from './Store/Actions/course';
//import CourseService from './Store/Services/course'

function App(props) {



  //lấy danh sách khóa học ở đây đưa lên redux
  useEffect(() => {
      props.getCourses();
    },[])
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default connect(null,{getCourses})(App);
