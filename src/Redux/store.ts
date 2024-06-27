import { configureStore, createSelector } from "@reduxjs/toolkit";
import { fatchData } from "./feature/HomeSetting/HomeSetting";
import HomeSettingReducers from "./feature/HomeSetting/HomeSetting";
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
import storeSetting from "./feature/storeSetting/storeSetting";
import {fetchStoreSetting} from "./feature/storeSetting/storeSetting";

const store = configureStore({
  reducer: {
    HomeSetting: HomeSettingReducers,
    CategoryData: CategorySliceReducer,
    Products: ProductsReducer,
    Coupons: CouponsSliceReducer,
    p_a: p_a_SliceReducer,
    ShopCard: ShopCardProducts,
    storeSetting: storeSetting,
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
store.dispatch(fetchStoreSetting());

const getStoreState = createSelector(
  (state:any) => state,
  ({ HomeSetting, CategoryData, Products, Coupons, p_a, ShopCard,storeSetting }) => {
    return { HomeSetting, CategoryData, Products, Coupons, p_a, ShopCard,storeSetting };
  }
);
export { getStoreState };

export default store;
