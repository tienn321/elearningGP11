//dùng để import tất cả các file
import React from 'react';
import HomePage from './HomePage';
import CourseListPage from './CourseListPage';
import CourseItemPage from './CourseItemPage';
import NotFoundPage from './NotFoundPage';
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseItemDetail from '../Components/Client/CourseItemDetail';



const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/all-courses' exact component={CourseListPage} />
        <Route path='/course/:id' exact component={CourseItemPage} />
        <Route path='' exact={false} component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Layout;