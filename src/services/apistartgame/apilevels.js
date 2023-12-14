import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;
const apigetlevelsbycategory=async(data)=>{
    const res=await axios.get(`${apiurl()}/levels/apigetlevelsbycategory`,{params:data,headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
    return res.data;
} 
const apichecklevels=async(data)=>{
    const res=await axios.post(`${apiurl()}/levels/apichecklevels`,data, {headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
    return res.data;
} 
const apigetactivelevels=async()=>{
    const res=await axios.get(`${apiurl()}/levels/apigetactivelevels`,{headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
    return res.data;
} 
export {apigetlevelsbycategory,apichecklevels,apigetactivelevels};