import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";
const apigetallearnpointhistory=async(params)=>{
    try{
        const res=await axios.get(`${apiurl()}/earnpoints/apigetallearnpointhistory`,{params:params,headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
        return res.data;
    }
    catch(err){
        console.log(err)
    }
} 


export {apigetallearnpointhistory}