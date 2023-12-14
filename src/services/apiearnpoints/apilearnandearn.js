import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;
const apiinitlearnandearn=async(params)=>{
    try{
        const res=await axios.get(`${apiurl()}/earnpoints/apiinitlearnandearn`,{params:params,headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 
const apigetlearningquestions=async(params)=>{
    try{
        const res=await axios.get(`${apiurl()}/earnpoints/apigetlearningquestions`,{params:params,headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 
const apisavelearningquestions=async(data)=>{
    try{
        const res=await axios.post(`${apiurl()}/earnpoints/apisavelearningquestions`,data,{headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 

export {apiinitlearnandearn, apigetlearningquestions,apisavelearningquestions}