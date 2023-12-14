import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;
const apigettrackyouractivity=async(params)=>{
    try{
        const res=await axios.get(`${apiurl()}/profile/apigettrackyouractivity`,{params:params,headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 
const apigetallearnpointhistory=async(params)=>{
    try{
        const res=await axios.get(`${apiurl()}/profile/apigetallearnpointhistory`,{params:params,headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 

export {apigettrackyouractivity, apigetallearnpointhistory}