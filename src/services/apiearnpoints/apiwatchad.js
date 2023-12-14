import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";

const apigetwatchads=async(params)=>{
  const res=await axios.get(`${apiurl()}/watchads/apigetwatchads`,{params:params,headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
  return res.data;
}
const apisavewatchads=async(data)=>{
    const res=await axios.post(`${apiurl()}/watchads/apisavewatchads`,data,{headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
    return res.data;
}
const apiupdatewatchads=async(data)=>{
    const res=await axios.put(`${apiurl()}/watchads/apiupdatewatchads`,data,{headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
    return res.data;
}
const apideletewatchads=async(data)=>{
  const res=await axios.delete(`${apiurl()}/watchads/apideletewatchads`,{params:data,headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
  return res.data;
}

export {apigetwatchads, apisavewatchads, apiupdatewatchads, apideletewatchads};