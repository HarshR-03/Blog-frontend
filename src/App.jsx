import { useState,useReducer, useEffect } from 'react'
import './App.css'
import Navbar from './navbar/navbar'
import LandingPage from './landingpage/main'
import { AuthContext, AuthReducerContext,AuthReducer } from './contexts/authContext';

function App() {
    const token = localStorage.getItem('authToken');
    let isloggedin = false;
    if(token != null)
      isloggedin = true
    const [state, dispatch] = useReducer(AuthReducer,{isloggedin:isloggedin});

  return (
    <>
    <AuthContext.Provider value = {state}>
      <AuthReducerContext.Provider value={dispatch}>
        <Navbar/>
        <LandingPage/>
      </AuthReducerContext.Provider>
      </AuthContext.Provider>
    </>
  )
}

export default App
