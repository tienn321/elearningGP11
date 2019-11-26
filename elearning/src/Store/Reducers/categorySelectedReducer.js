import * as types from "../Constants/course";

const initialState = "BackEnd";

const CategorySelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY:
      return action.payload;

    default:
      return state;
  }
}
export default CategorySelectedReducer;
