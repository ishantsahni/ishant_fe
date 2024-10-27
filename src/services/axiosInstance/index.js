import axios from "axios";
import API_URLS from "../../config/API_URLS";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URLS.baseUrl,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
