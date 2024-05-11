import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import priceSlice from "./priceSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        price: priceSlice
    }
});

export default store;