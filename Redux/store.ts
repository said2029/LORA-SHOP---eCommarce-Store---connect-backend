import { configureStore, createSelector } from "@reduxjs/toolkit";
import { fatchData } from "./feature/storeSetting/storeSetting";
import SettingStoreReducers from "./feature/storeSetting/storeSetting";
import fetchCategorys from "./feature/dataFetch/Category";
import { CategorySliceReducer } from "./feature/dataFetch/Category";
import { RootState } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    storeSetting: SettingStoreReducers,
    CategoryData: CategorySliceReducer,
  },
});
store.dispatch(fatchData());
store.dispatch(fetchCategorys());

const getStoreSettingState = createSelector(
  (state) => state,
  ({ storeSetting, CategoryData }) => {
    return { storeSetting, CategoryData };
  }
);
export { getStoreSettingState };

export default store;
