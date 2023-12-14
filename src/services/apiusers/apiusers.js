import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";

const apigetfullusers=async(params)=>{
    const res=await axios.get(`${apiurl()}/users/apigetfullusers`,{params,headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
    return res.data;
}
const apiupdateusers=async(datas)=>{
    const res=await axios.put(`${apiurl()}/users/apiupdateusers`,datas,{headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
    return res.data;
}
const apigetactivitybyuser=async(params)=>{
    const res=await axios.get(`${apiurl()}/users/apigetactivitybyuser`,{params,headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`} });
    return res.data;
}
const apigetdetailedactivityresult=async(params)=>{
    const res=await axios.get(`${apiurl()}/users/apigetdetailedactivityresult`,{params,headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
    return res.data;
}
export {apigetfullusers,apiupdateusers,apigetactivitybyuser,apigetdetailedactivityresult}