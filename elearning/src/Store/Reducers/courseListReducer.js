import * as types from "../Constants/course";
const initialState = [];

const CourseListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COURSES:
      return action.payload
      
    default:
      return state;
  }
};

export default CourseListReducer;
