import axiosClient from "@/_utils/axiosClient";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  settingData: {} as any,
  loading: true,
  error: "",
};

const fatchData = createAsyncThunk("HomeSetting/fatchData", async () => {
  return await axiosClient.get("/setting/homeGet").then((res) => res.data.body[0]);
});

const HomeSettingReducers = createSlice({
  name: "HomeSetting",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fatchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fatchData.fulfilled, (state, action) => {
      state.loading = false;
      state.settingData = action.payload;
      state.error = "";
    });
    builder.addCase(fatchData.rejected, (state, action) => {
      state.loading = true;
      state.settingData = {};
      state.error = action.error.message || "";
    });
  },
});

export default HomeSettingReducers.reducer;
export { fatchData };
