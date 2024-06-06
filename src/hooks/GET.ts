import { useEffect, useState } from "react";
import axiosClient from "../_utils/axiosClient";
const UseGET = (url: string) => {
  let [respons, setSespons] = useState({});
  useEffect(() => {
    axiosClient.get(url).then((res) => {
      setSespons(res.data);
    });
  }, []);
  return respons;
};
export default UseGET;
