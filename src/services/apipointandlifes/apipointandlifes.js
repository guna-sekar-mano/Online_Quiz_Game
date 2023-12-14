import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;

const apigetpointandlifes=async()=>{
    try{
        const res=await axios.get(`${apiurl()}/users/apigetpointandlifes`,{headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 

export {apigetpointandlifes}