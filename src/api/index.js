import axios from "axios";
const baseURL = "http://localhost:9700";
// 用户案例
const getuserProject = () => {
  return axios.post(baseURL + "/userpro");
};
// 关于我们
const getAboutus = () => {
  return axios.post(baseURL + "/aboutus");
};
export { getuserProject, getAboutus };
