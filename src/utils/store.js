import { configureStore } from "@reduxjs/toolkit";
import shopSlicer from "./shopSlicer"

export default configureStore({
    reducer: {
        shop: shopSlicer
    }
})