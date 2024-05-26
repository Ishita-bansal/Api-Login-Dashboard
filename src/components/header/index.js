import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [userData , setUserData] = useState();
    const navigate = useNavigate();

   useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("loggedUser"));
    console.log("data",data);
    setUserData(data);
   },[])

   const logout = () => {
     localStorage.clear();
     setUserData();
     navigate("/login");
   }
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (

    <nav
      class="navbar navbar-expand-lg"
      style={{ width: "100%",backgroundColor:"white"}}
    >
      <a class="navbar-brand" href="#" style={{paddingLeft:"20px",fontWeight:"bolder", fontSize:"30px"}}> 
        Dashboard
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{display:"flex",justifyContent:"flex-end",alignItems:"center",paddingRight:"20px",fontSize:"20px"}}>
        <ul class="navbar-nav mr-auto">
          <li class={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}  style={{display:"flex"}}  >
          <Avatar >{userData?.user?.name?.[0]}</Avatar>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              onClick={toggleDropdown}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen ? "true" : "false"}>
                
              {userData?.user?.name}
            </a>
            <div
              class={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
              aria-labelledby="navbarDropdown"
              style={{marginTop:"50px"}}
            >
              <a class="dropdown-item" href="#" >{userData?.user?.name}</a>
              <a class="dropdown-item" href="#">{userData?.user?.email}</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/login" onClick={logout}>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
   
  );
};

export default Header;
