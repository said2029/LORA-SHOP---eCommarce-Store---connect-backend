const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: true,
  error: "",
  p_a: [],
};

const fetch_p_a= createAsyncThunk(
  "privacy_about/fetch_p_a",
  async () => {
    return (
      await fetch("/api/A_P", {
        cache:"force-cache"
      }).then(async (res) => res)
    ).json();
  }
);

const p_a_Slice = createSlice({
  name: "privacy_about",
  initialState,
  extraReducers: (bulder:any) => {
    bulder.addCase(fetch_p_a.pending, (state:any) => {
      state.loading = true;
    });
    bulder.addCase(fetch_p_a.fulfilled, (state:any, action:any) => {
      state.loading = false;
      state.p_a = action.payload;
    });
    bulder.addCase(fetch_p_a.rejected, (state:any, action:any) => {
      state.loading = true;
      state.error = action.error.massegs;
    });
  },
});
export const p_a_SliceReducer = p_a_Slice.reducer;

export default fetch_p_a;
