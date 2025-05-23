import { useEffect } from "react";
import axiosClient from "../_utils/axiosClient";
const UsePOST = (url: string, body: {}) => {
  useEffect(() => {
    axiosClient.post(url, body).then((res) => {
      return res.data;
    });
  }, []);
};
export default UsePOST;
