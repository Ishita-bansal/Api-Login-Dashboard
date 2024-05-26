import React, { useState } from "react";
import "./sidenav.css"
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import { styled } from '@mui/material/styles';
const Sidebar = () =>{
     const [open ,setOpen] = useState(false);
     const [activeIndex, setActiveIndex] = useState(0); 
     const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .MuiTooltip-tooltip`]: {
            marginLeft: '22px',
        },
    });

     const menuItems = [

        {
            text:"Dashboard",
            icon:"./images/dashicon.png"
        },
        {
            text:"Student Management",
            icon:"./images/student.png"
        },

        {
            text:"Teacher Management",
            icon:"./images/student.png"
        },
        {
            text:"To do Management",
            icon:"./images/todo.png"
        },
        {
             text:"Setting",
             icon:"./images/setting.png"
        },
        {
             text:"Terms & Condition",
             icon:"./images/terms&condition.png"
        },
        {
            text:"Privacy Policy",
            icon:"./images/privacypolicy.png"
        }
     ]
     const toglebutton = () => {
        setOpen(!open);
     }

     const handleMenuItemClick = (index) => {
        setActiveIndex(index);
    };


    return(
        <>
          <div className= {open ? "side-nav-container" :"side-nav-container side-nav-container-NX" }>
              <div className="nav-upper">
                  <div className="nav-heading">
                      <div className="nav-brand">
                        {
                            open ?  <img width="60%" src = "./images/logo.png" alt="icon" style={{paddingTop:"22px",paddingLeft:"33px"}}/> :  <img width="60%" src = "./images/logoicon.png" alt="icon" style={{paddingTop:"22px"}}/>
                        } 
                      </div>
                      <button className={open ? "hamburger" : "hamburger-in" } onClick={toglebutton}>
                       {
                        open ?  <FontAwesomeIcon style={{color:"white"}} icon={faLessThan} /> : <FontAwesomeIcon style={{color:"white"}}  icon={faGreaterThan} />
                       }   
                      </button>
                  </div>
              </div>
              <div className="nav-menu">
                   {
                    menuItems.map((info,index)=>{
                        return(
                            <React.Fragment key={index}>
                            {
                                open ?  
                                <a href=""  className={`menu-items ${index === activeIndex ? "active" : ""}`}  onClick={() => handleMenuItemClick(index)}>
                                <CustomTooltip title={info.text}>
                                <img src={info.icon} alt="image" height="24px" width="22px" />
                                </CustomTooltip>
                                <div className="span">
                                <span>{info.text}</span>
                                </div>
                                </a> 
                                 : 
                                 <a href="" className={`menu-items-in ${index === activeIndex ? "active" : ""}`}
                                 onClick={() => handleMenuItemClick(index)}>
                                     <CustomTooltip title={info.text}>
                                <img src={info.icon} alt="image"/>
                                </CustomTooltip>
                            </a>
                            }
                            
                            </React.Fragment>
                        )
                    })
                   }

              </div>
            </div> 
        </>
    )
}

export default Sidebar;