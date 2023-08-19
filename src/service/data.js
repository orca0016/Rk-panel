import Axios  from "axios"
const SERVER_URL = "http://localhost:9000"


export const getAlldata = ()=>{
    const  url =  `${SERVER_URL}/data`
    return Axios.get(url)
}