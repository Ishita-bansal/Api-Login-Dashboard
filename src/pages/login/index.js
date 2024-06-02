import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ErrorHandle } from "../../components";
import { API_SERVER_URL, APIS} from "../../Api/api.constant";
import { postApi } from "../../Api/api.client";
import { useNavigate } from "react-router-dom";
import { useDispatch, UseDispatch } from "react-redux";
import { loggedDetails } from "../../redux/authSlice";
// import { Header } from "../../Components";
const initilValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required*"),
//   password: Yup.string().min(3, "Invalid Format").required("Required*"),
});
const Login = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

  const onSubmit = async (values) => {
     const loginUrl = API_SERVER_URL+APIS.LOGIN; 
     console.log("loginUrl-=--->",loginUrl);
      try {
        const result = await postApi(loginUrl,values,false);
        console.log("result??????",result?.payload?.data);
           if(result?.status === true && result?.payload?.data?.token){
                 dispatch(loggedDetails( {
                     name : result?.payload?.data?.user?.name,
                     email : result?.payload?.data?.user?.email,
                     role: result?.payload?.data?.user?.role,
                     userId:result?.payload?.data?.user?.userId,
                     token: result?.payload?.data?.token
                 } ));
           }
      } catch (error) {
        console.log("error", error);
      }
  };

  const formik = useFormik({
    initialValues: initilValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
  });
  const { values, handleSubmit, setTouched, setFieldValue, touched, errors } =
    formik;
  return (
    <>
      <div  style={{ height:"100vh", width:"100%", display:"flex", justifyContent:"center",alignItems:"center",backgroundColor:"#e75a7b17"}}>
        <div class="row" style={{width:"65%",backgroundImage:"url('/images/login.jpg')" ,backgroundRepeat:"no-repeat",backgroundPosition:"left",backgroundSize:"contain", borderRadius:"30px"}}>
          <div class="col-lg-6"  >

          </div>
          <div class="col-lg-6" style={{backgroundColor:"white", borderTopLeftRadius:"100px"}}>
            <div style={{ height: "80vh" ,padding:"40px"}}>
                <div style={{backgroundImage:"url('/images/logo.png')", width:"100%",height:"15%",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",marginBottom:"40px"}}>
                  
            </div>
            <div style={{display:"flex",flexDirection:"column", gap:"30px"}}>
              <h2 style={{fontWeight:"bolder"}}>Welcome to R.I.S.E. Academy</h2>
                <h4 style={{color:"#197bbd"}}>Admin Login !</h4>
            </div>   
              <form onSubmit={handleSubmit}>
                <div style={{display:"flex" , flexDirection:"column" }}>
                  <div style={{paddingTop: "30px" }}>
                    <input
                      placeholder="Your Email"
                      name="email"
                      value={values.email}
                      onChange={(e) => setFieldValue("email", e.target.value)}
                      onBlur={() => {
                        setTouched({ ...touched, email: "true" });
                        
                      }}
                      type="text"
                      style={{ paddingLeft:"20px", width:"100%", height:"45px",border:" 1px solid #197bbd", borderRadius:"20px",backgroundColor:"#3498db46"}}
                    />
                  </div>
                  <ErrorHandle
                      touched={touched}
                      errors={errors}
                      fieldname="email"
                    />
                  <div>
                    <input
                      placeholder="Your Password"
                      name="password"
                      value={values.password}
                      onChange={(e) => {
                        setFieldValue("password", e.target.value);
                      }}
                      onBlur={() => {
                        setTouched({ ...touched, password: "true" });
                      }}
                      type="text"
                      style={{  paddingLeft:"20px",width:"100%", height:"45px",border:" 1px solid #197bbd", borderRadius:"20px",backgroundColor:"#3498db46"}}
                    />
                  </div>
                  <ErrorHandle
                      touched={touched}
                      errors={errors}
                      fieldname="password"
                    />
                  <button style={{backgroundColor:"#e75a7c", border:"none", outline:"none", height:"45px", borderRadius:"20px"}} type="submit" >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
