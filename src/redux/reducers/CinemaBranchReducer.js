import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lstBranches: [],
    activeCards: [
        {
            order: 1,
            maHeThong: "CGV"
        },
        {
            order: 1,
            maHeThong: "BHDStar"
        },
        {
            order: 1,
            maHeThong: "Galaxy"
        },
        {
            order: 1,
            maHeThong: "MegaGS"
        },
        {
            order: 1,
            maHeThong: "CineStar"
        },
        {
            order: 1,
            maHeThong: "LotteCinima"
        }
    ]
}

const CinemaBranchReducer = createSlice({
    name: "cinemaBranchReducer",
    initialState,
    reducers: {
        addBranches: (state, { type, payload }) => {
            payload.map((element, index) => {
                state.lstBranches.push(element);
            })
        },
        addActiveCard: (state, { type, payload }) => {
            state.activeCards.push(payload)
        },
        deleteActiveCard: (state, { type, payload }) => {
            state.activeCards = state.activeCards.filter(element => element.maHeThong != payload);
        },
    }
});

export const { addBranches, addActiveCard, deleteActiveCard } = CinemaBranchReducer.actions

export default CinemaBranchReducer.reducer