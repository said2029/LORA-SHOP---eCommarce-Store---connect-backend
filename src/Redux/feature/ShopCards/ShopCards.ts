import axiosClient from "@/_utils/axiosClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      count: 0,
      id: "",
    },
  ],
};

initialState.items = JSON.parse(
  window.localStorage.getItem("shopCard") || "[]"
);

export const fatchProductOfCard = createAsyncThunk(
  "shopCardProducts/fatchProductOfCard",
  async () => {
    const data = await axiosClient.get(`/product?id=${initialState.items}`);
    return data.data;
  }
);

const ShopCard = createSlice({
  name: "shopCardProducts",
  initialState,
  reducers: {
    addProductToCard: (state, action) => {
      if (state.items.some((e) => e.id == action.payload)) {
        state.items[
          state.items.findIndex((b) => b.id == action.payload)
        ].count += 1;
      } else {
        state.items.push({ count: 1, id: action.payload });
      }
      window.localStorage.setItem("shopCard", JSON.stringify(state.items));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fatchProductOfCard.fulfilled, (state, action) => {});
  },
});

export const { addProductToCard } = ShopCard.actions;
export default ShopCard.reducer;
