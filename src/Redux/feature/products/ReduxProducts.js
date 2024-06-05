const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import getProductsApi from "../../../_utils/axiosProduct";
const initialState = {
  loading: true,
  error: "",
  products: [],
};

const fetchProducts = createAsyncThunk("Products/fetchProducts", async () => {
  return await getProductsApi().then((res) => res);
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
