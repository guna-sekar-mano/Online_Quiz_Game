"use client"
import {create} from 'zustand';

const UseStorege = create(() => ({

  clearlocalstorage: () => {
    localStorage.removeItem('userAnswers');
    localStorage.removeItem('currentQuestionIndex');
    localStorage.removeItem('timer');
    localStorage.removeItem('setonetimer');
    localStorage.removeItem('Guestid');
    localStorage.removeItem('testinit')
    localStorage.removeItem('isAdsEnabled')
  },
 
}));

export default UseStorege;