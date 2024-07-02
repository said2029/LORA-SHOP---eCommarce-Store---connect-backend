import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: {
  settingData: any;
  loading: boolean;
  error: string;
} = {
  settingData: {},
  loading: true,
  error: "",
};

const fetchStoreSetting = createAsyncThunk(
  "storeSetting/fetchStoreSetting",
  async () => {
    const respons = await axios
      .get("/api/setting/store_setting")
      .then((res) => res.data);
    return respons;
  }
);

const storeSetting = createSlice({
  name: "storeSetting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStoreSetting.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStoreSetting.fulfilled, (state, action) => {
      state.loading = false;
      state.settingData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchStoreSetting.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message || "";
    });
  },
});

export default storeSetting.reducer;

export { fetchStoreSetting };
