import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;
const apiinitwatchadandearn=async(params)=>{
    try{
        const res=await axios.get(`${apiurl()}/earnpoints/apiinitwatchadandearn`,{params:params,headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 
const apisavewatchandearn=async(data)=>{
    try{
        const res=await axios.post(`${apiurl()}/earnpoints/apisavewatchandearn`,data,{headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 

export {apiinitwatchadandearn,apisavewatchandearn}