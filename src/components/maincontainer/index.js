import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";

const Maincontainer = ({element}) => {
    return(
        <div style={{display:"flex",backgroundColor:"#75757510"}}>
        
            <Sidebar />
        
         <div style={{width:"100%"}}>
              <Header/>
           { element}
         </div>
        </div>
    )
}

export default Maincontainer;