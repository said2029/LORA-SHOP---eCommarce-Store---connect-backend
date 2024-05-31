import { configureStore } from "@reduxjs/toolkit";
import { fatchData } from "./feature/storeSetting/storeSetting";
import SettingStoreReducers from "./feature/storeSetting/storeSetting";

const store = configureStore({
  reducer: {
    storeSetting: SettingStoreReducers,
  },
});

store.dispatch(fatchData());


export default store;
