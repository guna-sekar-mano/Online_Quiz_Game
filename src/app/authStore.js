'use client'
// authStore.js
import { create } from 'zustand';

const checkIsLoggedIn = () => {
  const token = typeof window !== 'undefined' ? localStorage?.getItem(process.env.LOCALSTORAGE_KEY) || null : null;
  return token !== null;
};

const useAuthStore = create((set) => ({
  token: checkIsLoggedIn() ? localStorage?.getItem(process.env.LOCALSTORAGE_KEY) : null,
  user: null,
  isLogin: checkIsLoggedIn(),
  setToken: (token) => {
    set({ token, isLogin: true });
    localStorage.setItem(process.env.LOCALSTORAGE_KEY, token);
  },
  setUser: (user) => set({ user }),

  getUserDetails: () => {
    const { token } = useAuthStore.getState();
    if (token !== null) {
      try {
        const userData = window.atob(token.split('.')[1]);
        const user = JSON.parse(userData);
        useAuthStore.getState().setUser(user);
        return user;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    } else {
      return null;
    }
  },

  removeToken: () => {
    localStorage.removeItem(process.env.LOCALSTORAGE_KEY);
    set({ token: null, isLogin: false }); 
  },
}));

export default useAuthStore;
