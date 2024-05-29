import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://loradash.onrender.com",
});
export default axiosClient;
