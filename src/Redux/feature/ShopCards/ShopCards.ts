import axiosClient from "@/_utils/axiosClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState: {
  items: {
    count: number;
    id: string;
    product: any;
  }[];
  totelPrice: number;
  discount: number;
  codeCoupon: string;
} = {
  items: [],
  totelPrice: 0,
  discount: 0.0,
  codeCoupon: "",
};
try {
  if (window != undefined)
    initialState = JSON.parse(
      window.localStorage.getItem("shopCard") || "{items:[],totelPrice:0}"
    );
} catch (error) {
  console.log("Can't parse JSON  \n:", error);
}

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
      if (state.items.some((e) => e.id == action.payload.id)) {
        const index = state.items.findIndex((b) => b.id == action.payload.id);
        state.items[index].count += 1;
      } else {
        state.items.push({
          count: 1,
          id: action.payload.id,
          product: action.payload.product,
        });
      }
      CalcolatePeoducPrice(state);
    },

    removeProductToCard: (state, action) => {
      if (state.items[action.payload.index].count > 1) {
        state.items[action.payload.index].count -= 1;
      } else state.items.splice(action.payload.index, 1);

      CalcolatePeoducPrice(state);
    },
    addDiscountCoupon: (state, action) => {
      state.discount = +action.payload.discount;
      state.codeCoupon = action.payload.codeCoupon;
      state.totelPrice -= state.discount;
      if (window)
        window.localStorage.setItem("shopCard", JSON.stringify(state));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fatchProductOfCard.fulfilled, (state, action) => {});
  },
});

function CalcolatePeoducPrice(state: any) {
  state.totelPrice = 0;
  state.items.map((e: any) => {
    if (e.product?.productSaleprice != undefined) {
      state.totelPrice += +e.product.productSaleprice.$numberDecimal * e.count;
    } else {
      state.totelPrice += +e.product.price * e.count;
    }
  });
  state.totelPrice -= state.discount;
  if (window) window.localStorage.setItem("shopCard", JSON.stringify(state));
}

export const { addProductToCard, removeProductToCard, addDiscountCoupon } =
  ShopCard.actions;
export default ShopCard.reducer;
