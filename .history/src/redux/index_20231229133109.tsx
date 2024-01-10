import userReducer from "./features/userSlice";
import loadingReducer from "./features/loadingSlice";
import postReducer from "./features/postSlice";
import departmentReducer from "./features/departmentSlice";
import categoryReducer from "./features/postCategorySlice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const rootReducers = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  post: postReducer,
  department: departmentReducer,
  category: categoryReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
