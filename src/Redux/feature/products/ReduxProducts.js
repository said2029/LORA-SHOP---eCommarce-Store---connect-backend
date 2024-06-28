const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import getProductsApi from "../../../_utils/axiosProduct";
const initialState = {
  loading: true,
  error: "",
  products: [],
};

const fetchProducts = createAsyncThunk("Products/fetchProducts", async () => {
  return await fetch("/api/products_Manager/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      page: 0,
      categorys: [""],
      price: [0, 99999],
      rate: "",
      search: ""
    }),
    cache: "reload"
  })
    .then((res) => res.json())
    .then((res) => res);
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
