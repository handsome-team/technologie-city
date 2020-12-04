import axios from "axios";
const baseURL = "http://8.131.83.251:2089";

// 设置一个响应拦截器
axios.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err)
);
const getProductdata = () => {
  return axios.post(`${baseURL}/product`);
};
const getCompanyData = () => {
  return axios.get(`${baseURL}/company`);
};

const getCompanyDetail = id => {
  return axios.get(`${baseURL}/company/detail?id=${id}`);
};
const getConnetData = () => {
  return axios.post(baseURL + "/qualifications");
};
// 用户案例
const getuserProject = () => {
  return axios.get(baseURL + "/userpro");
};
// 关于我们
const getAboutus = () => {
  return axios.get(baseURL + "/aboutus");
};
// 留言板
const takeMessage = obj => {
  // console.log(obj)
  return axios.post(baseURL + "/message", { params: obj });
};
export {
  getCompanyData,
  getCompanyDetail,
  getConnetData,
  takeMessage,
  getuserProject,
  getAboutus,
  getProductdata
};
