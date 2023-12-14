"use client"
import {create} from 'zustand';

const useCoins = create((set) => ({
  coins: 0,
  setCoins: (coins) => {
    set({coins: coins})
  },

}));

export default useCoins;