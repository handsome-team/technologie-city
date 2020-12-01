import axios from 'axios'
const baseURL = 'http://localhost:9700'
const getConnetData = () =>{
    return axios.post(baseURL + '/qualifications')
}
export {getConnetData}