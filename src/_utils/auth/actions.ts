"use server";
import axiosClient from "../axiosClient";

const sing_up = async (formData: FormData) => {
  try {
    await axiosClient.post("/Regaster", formData);
  } catch (error:any) {
    return { error: error.message };
  }
};
export const log_In = async (formData: FormData) => {
  console.log("log_In", formData);
};
export default sing_up;
