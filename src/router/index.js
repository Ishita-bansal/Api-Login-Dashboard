import React, { useEffect,useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard, Login } from "../pages";
import { Maincontainer } from "../components";

const Router = () =>{
    const [logdata ,setlogdata] = useState();

  useEffect(()=>{
     const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
     setlogdata(loggedUser);
     
  },[])

const PublicRouter = ({element}) =>{
      return !logdata?.token ? element : Navigate("/dashboard");
}

const PrivateRouter = ({element}) => {
   return logdata?.token ? <Maincontainer element={element} /> : Navigate("/login")
}

  

    return(
        <>
           <BrowserRouter>
       <Routes>
        <Route path="/login"  element={<PublicRouter element = {<Login/>}/>}/>
         <Route path="/dashboard" element={<PrivateRouter element = {<Dashboard/>}/>} />
       </Routes>
      
     </BrowserRouter>
        </>
    )
}

export default Router;