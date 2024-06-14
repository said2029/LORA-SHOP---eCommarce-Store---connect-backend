"use server";
import axiosClient from "../axiosClient";

const sing_up = async (formData: FormData) => {
  try {
    await axiosClient.post("/Regaster", formData);
  } catch (error: any) {
    return { error: error.message };
  }
};
export async function log_In(formData: FormData) {
  try {
    const value = await axiosClient.post(
      "/sign_in",
      Object.fromEntries(formData)
    );
    return value.data;
  } catch (error: any) {
    return { error: error.message };
  }
}
export default sing_up;
