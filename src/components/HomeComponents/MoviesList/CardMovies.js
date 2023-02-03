import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from '../../../redux/reducers/MovieListReducer';
import { useNavigate } from 'react-router-dom';
import { getAPI } from '../../../service/mainService';
import { urlGetMovieList } from '../../../utils/ConfigAPI/QuanLyPhim/quanLyPhim';
import logoMovie from "../../../assets/img/blue_movie.png";

import { Avatar, Card, Pagination } from 'antd';


const { Meta } = Card;

export default function CardMovies() {
    let dataMovie = useSelector(state => state.MovieListReducer);
    let dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        let fetchData = async () => {
            try {
                const result = await getAPI(urlGetMovieList)
                dispatch(addMovie(result.data.content))
            } catch (error) {
                console.log("error: ", error);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            <div className='row'>
                {
                    dataMovie && dataMovie.lstMovies && dataMovie.lstMovies.map((element, index) => {
                        return (
                            <div key={index} className="col-3 pe-3 mb-3">
                                <Card
                                    onClick={() => navigate(`/detail/${element.maPhim}`)}
                                    cover={
                                        <img
                                            style={{ height: "400px" }}
                                            alt="Onshow Movies"
                                            src={element.hinhAnh}
                                        />
                                    }
                                >
                                    <Meta
                                        avatar={<Avatar src={logoMovie} />}
                                        title={element.tenPhim.toUpperCase()}
                                        description={`IMDb: ${element.danhGia}`}
                                    />
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
            <Pagination className='pagination-lstMovies text-white' defaultCurrent={1} total={50} />;
        </div>
    )
}
