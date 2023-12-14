'use client'
import { useState} from "react";
export default () => {
   const [formDialog, setformDialog] = useState(false);
   const [formdata, setFormdata] = useState({});
   const [formconfig, setFormconfig] = useState({});
   const [viewdata, setViewdata] = useState([]);
   return {formDialog,setformDialog,formdata,setFormdata,formconfig,setFormconfig,viewdata, setViewdata}
 }