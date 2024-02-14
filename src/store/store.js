import { configureStore } from "@reduxjs/toolkit";
import userDetailSlice from "../features/UserDetailSlice";

export const store = configureStore({
    reducer: {
        userDetail: userDetailSlice.reducer
    }
});
