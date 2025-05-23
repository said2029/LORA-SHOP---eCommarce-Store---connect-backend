import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: true,
  error: "",
  coupons: [],
};

const fetchCoupons = createAsyncThunk(
  "CouponRedux/fatchCoupons",
  async () => {
    return await axios.get("/api/coupons").then(async (res) => res.data)
  }
);

const CouponSlice = createSlice({
  name: "CouponRedux",
  initialState,
  extraReducers: (bulder: any) => {
    bulder.addCase(fetchCoupons.pending, (state: any) => {
      state.loading = true;
    });
    bulder.addCase(fetchCoupons.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.copons = action.payload;
    });
    bulder.addCase(fetchCoupons.rejected, (state: any, action: any) => {
      state.loading = true;
      state.error = action.error.massegs;
    });
  },
});
export const CouponsSliceReducer = CouponSlice.reducer;

export default fetchCoupons;
