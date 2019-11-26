import { combineReducers } from "redux";
import CourseListReducer from './courseListReducer';
import CategorySelectedReducer from "./categorySelectedReducer";

const rootReducer = combineReducers({
  CourseListReducer,
  CategorySelectedReducer
});

export default rootReducer;
