import api from '../../Api/';

class CourseService {
  getCategory = () => {
    return api({
      method: "get",
      url: `QuanLyKhoaHoc/LayDanhMucKhoaHoc`
    });
  };
  getCoursesByCategory = (maDanhMuc) => {
    return api({
      method: "get",
      url: `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`
    });
  };
}

export default new CourseService();