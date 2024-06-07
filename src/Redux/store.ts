import { configureStore, createSelector } from "@reduxjs/toolkit";
import { fatchData } from "./feature/storeSetting/storeSetting";
import SettingStoreReducers from "./feature/storeSetting/storeSetting";
import fetchCategorys from "./feature/dataFetch/Category";
import { CategorySliceReducer } from "./feature/dataFetch/Category";
import ProductsReducer from "./feature/products/ReduxProducts";
import { fetchProducts } from "./feature/products/ReduxProducts";
import {CouponsSliceReducer} from "./feature/dataFetch/Copons";
import fetchCoupons from "./feature/dataFetch/Copons";

const store = configureStore({
  reducer: {
    storeSetting: SettingStoreReducers,
    CategoryData: CategorySliceReducer,
    Products: ProductsReducer,
    Coupons: CouponsSliceReducer,
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

const getStoreState = createSelector(
  (state) => state,
  ({ storeSetting, CategoryData, Products,Coupons }) => {
    return { storeSetting, CategoryData, Products,Coupons };
  }
);
export { getStoreState };

export default store;
