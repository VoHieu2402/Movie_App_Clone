import { createSlice } from '@reduxjs/toolkit';
import AvaCinema from '../../components/HomeComponents/CinemaList/AvaCinema';

const initialState = {
    heThongRap: []
}

const DetailMovieReducer = createSlice({
    name: "detailMovieReducer",
    initialState,
    reducers: {
        setHeThongRap: (state, { type, payload }) => {
            payload.map((element, index) => {
                state.heThongRap.push(
                    {
                        key: index + 1,
                        label: <AvaCinema alt={"CGV"} src={"abc"} />,
                        content: "Ngân Hồ"
                    }
                )
            })
        },
    }
});

export const { setHeThongRap } = DetailMovieReducer.actions

export default DetailMovieReducer.reducer