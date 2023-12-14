import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;
const apipracticeinit=async(params)=>{
    const res=await axios.get(`${apiurl()}/practice/apipracticeinit`,{params:params});
    return res.data;
} 
const apipracticeresult=async(data)=>{
    const res=await axios.post(`${apiurl()}/practice/apipracticeresult`,data);
    return res.data;
} 
const apisavepracticeresult=async(data)=>{
    const res=await axios.post(`${apiurl()}/practice/apisavepracticeresult`,data,{headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
    return res.data;
} 
const apiupdateguestuser=async(data)=>{
    const res=await axios.post(`${apiurl()}/practice/apiupdateguestuser`,data,{headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
    return res.data;
} 

export {apipracticeinit,apisavepracticeresult,apipracticeresult,apiupdateguestuser}