import { createStore } from "redux";

import reducer from './reducer';


const initialState = {
    user:{
        },
    schemes: [],
    
  }

  function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
    } catch(e) {
      console.log(e)
    }
  }
  
  function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('state')
      if (serializedState === null) return initialState
      return JSON.parse(serializedState)
    } catch(e) {
      console.log(e)
      return undefined
    }
  }
  const persistedState = loadFromLocalStorage() || initialSstate
  
  
  
  const store=createStore(reducer, persistedState);
  store.subscribe(() => saveToLocalStorage(store.getState()));
  export default store;