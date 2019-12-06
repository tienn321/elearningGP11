//dùng để import tất cả các file
import React from 'react';
import HomePage from './HomePage';
import CourseListPage from './CourseListPage';
import CourseItemDetail from '../Components/Client/CourseItemDetail';
import NotFoundPage from './NotFoundPage';
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageCommon from '../Components/Client/PageCommon';
// import CourseItemDetail from '../Components/Client/CourseItemDetail';



const Layout = () => {
  return (
    <Router>
      

      <PageCommon>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/all-courses' exact component={CourseListPage} />
          <Route path='/course/:makh' exact component={CourseItemDetail} />
          <Route path='' exact={false} component={NotFoundPage} />
        </Switch>
      </PageCommon>
      
    </Router>
  );
};

export default Layout;