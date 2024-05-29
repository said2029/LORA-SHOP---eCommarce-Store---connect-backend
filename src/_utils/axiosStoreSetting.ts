import axiosClient from "./axiosClient";

const homeSettingApi = () => axiosClient.get("/setting/homeGet");

export default {
  homeSettingApi,
};
