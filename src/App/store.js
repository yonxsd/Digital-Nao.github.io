import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSelice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});