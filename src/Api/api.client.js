import axios from "axios";
import { BASE_URL, API_PREFIX, API_SERVER_URL } from "./api.constant";
import axiosInstance from "../Api/baseService";



// export const postApi = async(url, data , isFormData = false)=>{
//   try {
//     const response = await axiosInstance.post(url, data ,isFormData ? data : {...data},isFormData && {
//       headers:{
//         "content-Type": "multipart/form-data",
//       }
//     })
//     return response.data;
//   }
//   catch(error){
//        throw error;
//   }
// }

export const postApi =async (url, data, isFormData = false) => {
    try {
        const response = await axiosInstance.post(url, isFormData ? data : { ...data }, isFormData && {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return response.data;
      } catch (error) {
        throw error;
      }
  };
