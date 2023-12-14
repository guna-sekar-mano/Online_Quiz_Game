import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const token=process.env.SECRET_TOKEN;

const apiinvitefriends=async(data)=>{
    try{
        const res=await axios.post(`${apiurl()}/invite/apiinvitefriends`,data,{headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem(token))}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 

export {apiinvitefriends}