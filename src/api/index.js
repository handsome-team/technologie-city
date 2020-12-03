import axios from 'axios'
const baseURL = 'http://localhost:9700'

const getProductdata = ()=>{
    return axios.post(`${baseURL}/product`)
}
export {getProductdata}
