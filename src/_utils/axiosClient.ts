import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.BACKENDURL,
});
export default axiosClient;
