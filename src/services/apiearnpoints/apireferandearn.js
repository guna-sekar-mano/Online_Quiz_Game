import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;
const apiinitreferandearn=async(params)=>{
    try{
        const res=await axios.get(`${apiurl()}/earnpoints/apiinitreferandearn`,{params:params,headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 


export {apiinitreferandearn}