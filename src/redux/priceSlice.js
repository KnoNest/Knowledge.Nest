const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    price: []
}

const priceSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload
        }
    }
})

export const { setPrice } = priceSlice.actions
export default priceSlice.reducer