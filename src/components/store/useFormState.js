import {create} from 'zustand';

 const useFormState = create((set) => ({
  formdata:{},
  setformdata: (value) => set({ formdata: value }),
  showModal:{visible:false,formname:''}, 
  setShowModal:(value) => set({ showModal: value }),
}));

export default useFormState;
