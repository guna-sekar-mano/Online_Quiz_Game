import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;
const apistartgameinit=async(data)=>{
    const res=await axios.get(`${apiurl()}/startgame/apistartgameinit`,{params:data,headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
    return res.data;
} 
const apisavestartgameresult=async(data)=>{
    try{    
        const res=await axios.post(`${apiurl()}/startgame/apisavestartgameresult`,data,{headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 
const apigetstartgameresult=async(data)=>{
    try{   
        const res=await axios.get(`${apiurl()}/startgame/apigetstartgameresult`,{params:data,headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 
export {apistartgameinit,apisavestartgameresult,apigetstartgameresult}