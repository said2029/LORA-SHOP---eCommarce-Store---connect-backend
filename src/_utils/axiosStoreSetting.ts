import axiosClient from "./axiosClient";

const homeSettingApi = () => axiosClient.get("/api/setting/homeSetting");

export default {
  homeSettingApi,
};
