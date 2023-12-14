"use client"
import {create} from 'zustand';

const UseAds = create(() => ({
  isAdsEnabled: true,

  setIsAdsEnabled: () => {
    localStorage.setItem('isAdsEnabled', true)
    return true
  },
  checkAdsEnabled: () => {
    const isAdsEnabled = localStorage.getItem('isAdsEnabled')
    if (isAdsEnabled) {
        return true
    } else {
        return false
    }
  }
  
 
}));

export default UseAds;