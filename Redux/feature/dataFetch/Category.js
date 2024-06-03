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
      await fetch(process.env.NEXT_PUBLIC_BACKENDURL + "/cateorys?all=dsfd").then(async (res) => res)
    ).json();
  }
);

const CategorySlice = createSlice({
  name: "categoryRedux",
  initialState,
  extraReducers: (bulder) => {
    bulder.addCase(fetchCategorys.pending, (state) => {
      state.loading = true;
    });
    bulder.addCase(fetchCategorys.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.categorys = action.payload;
    });
    bulder.addCase(fetchCategorys.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.massegs;
      state.categorys = [];
    });
  },
});
export const CategorySliceReducer = CategorySlice.reducer;

export default fetchCategorys;
