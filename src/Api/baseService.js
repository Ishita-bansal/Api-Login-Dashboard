import axios, { AxiosError } from "axios";
import { BASE_URL,PERSIST_STORAGE  } from "./api.constant";
import { store } from "../redux/store";
import { logout } from "../redux/authSlice";
import { useSelector } from "react-redux";

const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = useSelector(state=>state?.auth);
    const token = state.auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);



export default axiosInstance;


