import { createSlice } from '@reduxjs/toolkit'

export const ShopSlice = createSlice({
    name: 'shop',
    initialState: {
        shopContent: [],
    },
    reducers: {
        setShopContent: (state, item) => {        
            state.shopContent = item.payload
        }
    }
})

export const { setShopContent } = ShopSlice.actions

export default ShopSlice.reducer

export const selectCount = state => state.shop.shopContent