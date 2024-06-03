import { configureStore } from "@reduxjs/toolkit";
import { fatchData } from "./feature/storeSetting/storeSetting";
import SettingStoreReducers from "./feature/storeSetting/storeSetting";
import fetchCategorys from "./feature/dataFetch/Category";
import { CategorySliceReducer } from "./feature/dataFetch/Category";

const store = configureStore({
  reducer: {
    storeSetting: SettingStoreReducers,
    CategoryData: CategorySliceReducer,
  },
});
store.dispatch(fatchData());
store.dispatch(fetchCategorys());

export default store;
