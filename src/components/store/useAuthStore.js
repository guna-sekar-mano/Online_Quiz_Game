
import {create} from 'zustand';
const tokenname=process.env.SECRET_TOKEN;
const useAuthStore = create((set) => ({
  isAuthenticated: typeof window !== 'undefined' ?JSON.parse(localStorage.getItem(tokenname))?true:false:null,
  login: (user) => {
    localStorage.setItem(tokenname, JSON.stringify(user));
    set({ isAuthenticated: true, user });
  },
  logout: () => {
    localStorage.removeItem(tokenname);
    localStorage.clear();
    set({ isAuthenticated: false, user: null });
  },
  decodeToken: () => {
    const token =  typeof window !== 'undefined' ?localStorage.getItem(tokenname):null;
    if (token) {
      return JSON.parse(window.atob(token.split('.')[1]));
    } else {
      return null;
    }
  },
  userdetails: () => {
    const token =  typeof window !== 'undefined' ?localStorage.getItem(tokenname):null;
    if (token) {
      return JSON.parse(window.atob(token.split('.')[1]));
    } else {
      return null;
    }
  },
}));

export default useAuthStore;