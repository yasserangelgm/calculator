import { configureStore } from "@reduxjs/toolkit";
import displayValueReducer from "../features/display/displayValueSlice";
import digitSliceReducer from "../features/Buttons/digitSlice";

export const store = configureStore({
  reducer: {
    buildNumber: displayValueReducer,
    digitClick: digitSliceReducer,
  },
});
