import axios from "axios";

const baseURL = "http://localhost:9700";

const getCompanyData = () => {
  return axios.get(baseURL + "/company");
};

const getCompanyDetailData = (id) => {
  return axios.get(baseURL + `/company/detail?id=${id}`);
};

export { getCompanyData, getCompanyDetailData };
