import axios from "../axios";

const danhmuchoanoibat = () => {
  return axios.get("/api/danhmuchoanoibat");
};
const danhmuchoachitiettheodanhmuc = (iddanhmuchoa) => {
    return axios.get(`api/danhmuchoachitiettheodanhmuc?iddanhmuchoa=${iddanhmuchoa}`);
}

export { 
    danhmuchoanoibat,
    danhmuchoachitiettheodanhmuc
 };
