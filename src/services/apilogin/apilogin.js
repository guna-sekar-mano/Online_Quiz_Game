import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const apiadminlogin=async(data)=>{
  const res=await axios.post(`${apiurl()}/api/apiadminlogin`,data);
  return res.data;
}
export {apiadminlogin};