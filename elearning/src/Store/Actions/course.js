import * as types from "../Constants/course";
import api from "../../Api";

export const getCourses = () => {
  return dispatch => {
    api
      .get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
      .then(result => {
        dispatch({
          type: types.GET_COURSES,
          payload: result.data
        });
      }) //THÀNH CÔNG VÀO .THeN
      .catch(err => console.log(err.message)); //thất bại vào .catch
  };
};
export const getCategory = (maDanhMuc) => {  
  return {
    type: types.GET_CATEGORY,
    payload: maDanhMuc
  };
};


