import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;
const apigetstages=async(data)=>{
    const res=await axios.get(`${apiurl()}/stages/apigetstages`,{params:data,headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
    return res.data;
} 
const apicheckstages=async(data)=>{
    const res=await axios.post(`${apiurl()}/stages/apicheckstages`,data, {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
    return res.data;
} 
export {apigetstages,apicheckstages};