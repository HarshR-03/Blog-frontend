import { useState,useReducer, useEffect } from 'react'
import './App.css'
// import Navbar from './pages/navbar/navbar'
import BaseLayout from './pages/baseLayout/baseLayout';
import LandingPage from './pages/landingpage/main'
import Home from './blogPages/home/homepage'
import DashboardLayout from './pages/dashboard/dashboardhome';
import { AuthContext, AuthReducerContext,AuthReducer } from './contexts/authContext';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router';
import BlogPage from './pages/BlogPage/BlogPage';

function App() {
    const token = localStorage.getItem('authToken');
    let isloggedin = false;
    if(token != null)
      isloggedin = true
    const [state, dispatch] = useReducer(AuthReducer,{isloggedin:isloggedin});

  return (
    <>
    <BrowserRouter>
      <AuthContext.Provider value = {state}>
        <AuthReducerContext.Provider value={dispatch}>
          <Routes>
            <Route path="" element={<BaseLayout/>}>
              <Route path="landing" element={
                state.isloggedin? <Navigate to="/home"/> : <LandingPage/>}/>
              <Route path="home" element={
                state.isloggedin? <Home/> : <Navigate to="/landing"/>}/>
              <Route path="user" element={
                state.isloggedin? <DashboardLayout/> : <Navigate to="/landing"/>}/>
              <Route path="blog/:id" element={
                state.isloggedin? <BlogPage/> : <Navigate to="/landing"/>}/>  
            </Route>
          </Routes>
        </AuthReducerContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
