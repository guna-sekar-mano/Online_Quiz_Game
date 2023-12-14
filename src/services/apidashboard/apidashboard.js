import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";

const apigetdashboardcardcount=async()=>{
    const res=await axios.get(`${apiurl()}/admin/apigetdashboardcardcount`,{headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
    return res.data;
}
export {apigetdashboardcardcount}