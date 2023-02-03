import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dataBooking: [
    ],
}

const BookingReducer = createSlice({
    name: "bookingReducer",
    initialState,
    reducers: {
        addCart: (state, { type, payload }) => {
            state.dataBooking.push(payload);
        },
    }
});

export const { addCart } = BookingReducer.actions

export default BookingReducer.reducer