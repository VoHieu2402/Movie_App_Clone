import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lstMovies: []
}

const MovieListReducer = createSlice({
    name: "movieListReducer",
    initialState,
    reducers: {
        addMovie: (state, { type, payload }) => {
            state.lstMovies = payload;
        },
    }
});

export const { addMovie } = MovieListReducer.actions

export default MovieListReducer.reducer