import api from '../../Api/';
import { get } from 'http';

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
  getCourseDetail = (maKhoaHoc) => {
    return api({
      method: "get",
      url: `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    });
  }
}

export default new CourseService();