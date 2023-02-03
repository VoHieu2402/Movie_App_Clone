import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lstBanner: []
}

const HomeCarouselReducer = createSlice({
    name: "homeCarouselReducer",
    initialState,
    reducers: {
        addBanner: (state, { type, payload }) => {
            payload.map((elemtent, index) => {
                state.lstBanner.push(elemtent);
            })
        },
    }
});

export const { addBanner } = HomeCarouselReducer.actions

export default HomeCarouselReducer.reducer