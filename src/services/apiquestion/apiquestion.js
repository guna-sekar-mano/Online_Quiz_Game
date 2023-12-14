
import apiurl from "../apiendpoint/apiendpoint";
import axios from "axios";

const apiimportquestions=async(file)=>{
  const formdata=new FormData();
  formdata.append('Questionfile',file);
  const res=await axios.post(`${apiurl()}/question/apiimportquestions`,formdata,{headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
  return res.data;
}
const apigetallquestions=async(params)=>{
    const res=await axios.get(`${apiurl()}/question/apigetallquestions`,{params,headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
    return res.data;
}
const converttoFormdata=(datas)=>{
  var formData = new FormData();
  formData.append('Category', datas['Category']);
  formData.append('Sub Category', datas['Sub Category']);
  formData.append('Question', datas['Question']);
  formData.append('Option A', datas['Option A']);
  formData.append('Option B', datas['Option B']);
  formData.append('Option C', datas['Option C']);
  formData.append('Option D', datas['Option D']);
  formData.append('Correct Answer', datas['Correct Answer']);
  formData.append('Level', datas['Level']);
  formData.append('Stage', datas['Stage']);
  formData.append('Explanation', datas['Explanation']);
  formData.append('files', datas['Image for Question']?.file);
  formData.append('files', datas['Image for Explanation']?.file);
  return formData;

}
const apisavequestion=async(datas)=>{
  var formData=converttoFormdata(datas);
  const res=await axios.post(`${apiurl()}/question/apisavequestion`,formData,{headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
  return res.data;
}
const apiupdatequestion=async(datas)=>{
  var formData=converttoFormdata(datas);
  formData.append("_id",datas['_id']);
  const res=await axios.put(`${apiurl()}/question/apiupdatequestion`,formData,{headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
  return res.data;
}
const apideletequestion=async(id)=>{
  const res=await axios.delete(`${apiurl()}/question/apideletequestion`,{params:id,headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
  return res.data;
}
const apibulkupdatequestion=async(datas)=>{
  const res=await axios.put(`${apiurl()}/question/apibulkupdatequestion`,datas,{headers: {Authorization: `Bearer ${localStorage.getItem(process.env.LOCALSTORAGE_KEY)}`}});
  return res.data;
}
export {apiimportquestions,apigetallquestions,apisavequestion,apiupdatequestion,apideletequestion,apibulkupdatequestion};