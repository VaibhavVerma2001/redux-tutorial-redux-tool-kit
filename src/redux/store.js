import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// store 
export default configureStore({
    reducer: {
        user : userReducer,
    }
});
