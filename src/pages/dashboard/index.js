import React, { useEffect } from "react";
import { APIS } from "../../Api/api.constant";
import { API_SERVER_URL } from "../../Api/api.constant";
import { getApi } from "../../Api/api.client";
import { useNavigate } from "react-router-dom";
const items = [
   
  {
    text: "Total students registered", 
    img: "./images/stu1.png" },
  {
    text: "Total students registered today",
    img: "./images/stu2.png",
  },
  {
    text: "Total students registered in this month",
    img: "./images/stu3.png",
  },
  {
    text: "Total students registered in this year",
    img: "./images/stu4.png",
  },
];

const items2 = [
     
      {
        text: "Total classes registered", 
        img: "./images/stu1.png" },
      {
        text: "Total classes registered today",
        img: "./images/stu2.png",
      },
      {
        text: "Total classes registered in this month",
        img: "./images/stu3.png",
      },
      {
        text: "Total classes registered in this year",
        img: "./images/stu4.png",
      },
]
const Dashboard = () => {
       const navigate = useNavigate();

    useEffect(() => {
        fetchData();
      }, []);

      const Url = API_SERVER_URL + APIS.STUDENT;
      const fetchData = async () => {
        try {
          const result = await getApi(Url);
          console.log("result",result);
        } catch (error) {
          console.log("error", error);
        }
      };

  return (
    <>
    <div class="row">
      <div class="col-lg-8" >
        <h3 style={{ textAlign: "left", padding:"40px 0px 0px 50px" }}>Students</h3>
        <div style={{display:"flex",flexWrap:"wrap", gap:"20px",margin:"20px 0"}}>
        {items.map((info) => {
          return (
            <>
              <div
                style={{
                  width: "43%",
                  border: "2px solid ",
                  padding: "20px",
                  display: "flex",
                  justifyContent:"flex-start",
                  gap: "50px",
                  alignItems: "center",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  border: "none",
                  marginLeft: "50px",
                }}
              >
                <img src={info.img} alt="img" />
                <div>
                  <h5>1</h5>
                  <p>{info.text}</p>
                </div>
              </div>
            </>
          );
        })}
        </div>
      </div>
      <div class="col-lg-4" style={{margin:"100px auto" ,width:"380px",height:"250px", backgroundColor:"white"}}>

      </div>
    </div>

{/* part-2 */}
<div class="row">
<div class="col-lg-8" >
  <h3 style={{ textAlign: "left", padding:"0px 0px 0px 50px" }}>classes</h3>
  <div style={{display:"flex",flexWrap:"wrap", gap:"20px",margin:"0px 0px"}}>
  {items2.map((info) => {
    return (
      <>
        <div
          style={{
            width: "43%",
            border: "2px solid ",
            padding: "20px",
            display: "flex",
            justifyContent:"flex-start",
            gap: "50px",
            alignItems: "center",
            borderRadius: "10px",
            backgroundColor: "white",
            border: "none",
            marginLeft: "50px",
          }}
        >
          <img src={info.img} alt="img" />
          <div>
            <h5>1</h5>
            <p>{info.text}</p>
          </div>
        </div>
      </>
    );
  })}
  </div>
</div>
<div class="col-lg-4" style={{margin:"55px auto" ,width:"380px",height:"250px", backgroundColor:"white"}}>

</div>
</div>
</>
  );
};

export default Dashboard;
