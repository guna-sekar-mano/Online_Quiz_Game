import {create} from 'zustand';

 const useTableState = create((set) => ({
  items:[],
  setItems: (value) => set({ items: value }),

  totalRecords: 0,
  setTotalRecords: (value) => set({ totalRecords: value }),

  page: 1,
  setPage: (value) => set({ page: value }),

  first: 0,
  setFirst: (value) => set({ first: value }),

  rows: 8,
  setRows: (value) => set({ rows: value }),

  globalFilter: '',
  setGlobalFilter: (value) => set({ globalFilter: value }),

  loading: false,
  setLoading: (value) => set({ loading: value }),
}));

export default useTableState;
