import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  settingData: {},
  loading: true,
  error: "",
};

const fetchStoreSetting = createAsyncThunk(
  "storeSetting/fetchStoreSetting",
  async () => {
    const fatch = await fetch("/api/store_setting",{
      cache:"reload"
    });
    const respons = await fatch.json();
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
