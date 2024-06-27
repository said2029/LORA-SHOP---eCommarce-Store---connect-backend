const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: true,
  error: "",
  categorys: [],
};

const fetchCategorys = createAsyncThunk(
  "categoryRedux/fatchCategorys",
  async () => {
    return (
      await fetch("/api/categorys", {
        cache:"force-cache"
      }).then(async (res) => res)
    ).json();
  }
);

const CategorySlice = createSlice({
  name: "categoryRedux",
  initialState,
  extraReducers: (bulder:any) => {
    bulder.addCase(fetchCategorys.pending, (state:any) => {
      state.loading = true;
    });
    bulder.addCase(fetchCategorys.fulfilled, (state:any, action:any) => {
      state.loading = false;
      state.error = "";
      state.categorys = action.payload;
    });
    bulder.addCase(fetchCategorys.rejected, (state:any, action:any) => {
      state.loading = true;
      state.error = action.error.massegs;
      state.categorys = [];
    });
  },
});
export const CategorySliceReducer = CategorySlice.reducer;

export default fetchCategorys;
