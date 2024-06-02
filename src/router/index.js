import React, { useEffect,useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Login } from "../pages";
import { Maincontainer } from "../components";
import { useSelector } from "react-redux";
const Router = () =>{
    const getToken = useSelector(state => state?.auth);
    console.log("getToken=======>",getToken);

const PublicRouter = ({element}) =>{
      return !getToken.token ? element : <Navigate to="/dashboard" />;;
}

const PrivateRouter = ({element}) => {
   return getToken.token ? <Maincontainer element={element} /> : <Navigate to="/login" />;
}

   const LogedIn = () => {
    return <Navigate to="/login" />;
   }

    return(
        <>
           <BrowserRouter>
       <Routes>
        <Route path="/" element={<LogedIn/>} />
        {/* <Route path="/login" element={<Login/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/> */}
        <Route path="/login" element={<PublicRouter element = {<Login/>}/>}/>
         <Route path="/dashboard" element={<PrivateRouter element = {<Dashboard/>}/>} />
       </Routes>
      
     </BrowserRouter>
        </>
    )
}

export default Router;