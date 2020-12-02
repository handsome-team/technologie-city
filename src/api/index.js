import axios from "axios";

const baseURL = "http://localhost:9700";

// 设置一个响应拦截器
axios.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

const getCompanyData = () => {
  return axios.get(`${baseURL}/company`);
};

const getCompanyDetail = (id) => {
  return axios.get(`${baseURL}/company/detail?id=${id}`);
};
const getConnetData = () => {
  return axios.post(baseURL + "/qualifications");
};
export { getCompanyData, getCompanyDetail, getConnetData };
