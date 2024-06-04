const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: true,
  error: "",
  products: [],
};

const fetchProducts = createAsyncThunk("Products/fetchProducts", () => {
    
});
const ProductSlice = createSlice({
  name: "Products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.massegs;
    });
  },
});

export { fetchProducts };

export default ProductSlice.reducer;
