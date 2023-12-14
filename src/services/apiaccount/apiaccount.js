import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const apisendotp=async(data)=>{
    const res=await axios.post(`${apiurl()}/api/apisendotp`,data);
    return res.data;
}
const apiregisterUser=async(data)=>{
    const res=await axios.post(`${apiurl()}/api/apiregisterUser`,data);
    return res.data;
} 
const apiuserlogin=async(data)=>{
    const res=await axios.post(`${apiurl()}/api/apiuserlogin`,data);
    return res.data;
} 
export {apisendotp,apiregisterUser,apiuserlogin};