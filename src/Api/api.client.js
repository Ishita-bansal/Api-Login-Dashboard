import axios from "axios";
import { BASE_URL, API_PREFIX } from "./api.constant";
import axiosInstance from "../Api/baseService";


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

export const getApi = async(url)=>{
  try {
    const response = await axiosInstance.get(url);
    console.log("response-=-=-=-=>",response.data);
    
  } catch (error) {
    console.error("GET API Error:", error.response ? error.response.data : error.message);
    throw error;
  }
}