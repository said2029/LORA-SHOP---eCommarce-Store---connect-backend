const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: true,
  error: "",
  coupons: [],
};

const fetchCoupons = createAsyncThunk(
  "CouponRedux/fatchCoupons",
  async () => {
    return (
      await fetch(process.env.BACKENDURL + "/coupons?published=true", {
        next: { revalidate: 20000 },
      }).then(async (res) => res)
    ).json();
  }
);

const CouponSlice = createSlice({
  name: "CouponRedux",
  initialState,
  extraReducers: (bulder:any) => {
    bulder.addCase(fetchCoupons.pending, (state:any) => {
      state.loading = true;
    });
    bulder.addCase(fetchCoupons.fulfilled, (state:any, action:any) => {
      state.loading = false;
      state.copons = action.payload;
    });
    bulder.addCase(fetchCoupons.rejected, (state:any, action:any) => {
      state.loading = true;
      state.error = action.error.massegs;
    });
  },
});
export const CouponsSliceReducer = CouponSlice.reducer;

export default fetchCoupons;
