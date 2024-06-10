import { configureStore, createSelector } from "@reduxjs/toolkit";
import { fatchData } from "./feature/storeSetting/storeSetting";
import SettingStoreReducers from "./feature/storeSetting/storeSetting";
import fetchCategorys from "./feature/dataFetch/Category";
import { CategorySliceReducer } from "./feature/dataFetch/Category";
import ProductsReducer from "./feature/products/ReduxProducts";
import { fetchProducts } from "./feature/products/ReduxProducts";
import { CouponsSliceReducer } from "./feature/dataFetch/Copons";
import fetchCoupons from "./feature/dataFetch/Copons";
import { p_a_SliceReducer } from "./feature/dataFetch/privacy_About";
import fetch_p_a from "./feature/dataFetch/privacy_About";
import ShopCardProducts from "@/Redux/feature/ShopCards/ShopCards";
import { fatchProductOfCard } from "@/Redux/feature/ShopCards/ShopCards";

const store = configureStore({
  reducer: {
    storeSetting: SettingStoreReducers,
    CategoryData: CategorySliceReducer,
    Products: ProductsReducer,
    Coupons: CouponsSliceReducer,
    p_a: p_a_SliceReducer,
    ShopCard: ShopCardProducts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
store.dispatch(fatchData());
store.dispatch(fetchCategorys());
store.dispatch(fetchProducts());
store.dispatch(fetchCoupons());
store.dispatch(fetch_p_a());
store.dispatch(fatchProductOfCard());

const getStoreState = createSelector(
  (state) => state,
  ({ storeSetting, CategoryData, Products, Coupons, p_a, ShopCard }) => {
    return { storeSetting, CategoryData, Products, Coupons, p_a, ShopCard };
  }
);
export { getStoreState };

export default store;
