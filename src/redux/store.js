//redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import HomeCarouselReducer from './reducers/HomeCarouselReducer';
import MovieListReducer from './reducers/MovieListReducer';
import CinemaBranchReducer from './reducers/CinemaBranchReducer';
import DetailMovieReducer from './reducers/DetailMovieReducer';
import BookingReducer from './reducers/BookingReducer';

export const store = configureStore({
  reducer: {
    HomeCarouselReducer,
    MovieListReducer,
    CinemaBranchReducer,
    DetailMovieReducer,
    BookingReducer
  },
})