import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

import { Tabs } from 'antd';

import "./detailMovie.scss"
import AvaCinema from '../../components/HomeComponents/CinemaList/AvaCinema';
import TableCinemaDetail from './TableCinemaDetail';
import { getAPI } from '../../service/mainService';
import { urlDetailMovie } from '../../utils/ConfigAPI/QuanLyRap/quanLyRap';

export default function DetailMovie() {
    const params = useParams();


    const [detailMovie, setDetailMovie] = useState({});


    const getApiDetail = async () => {
        const apiChiTiet = await getAPI(urlDetailMovie + params.id)
        setDetailMovie(apiChiTiet.data.content);
    }

    // gọi api trả dữ liệu cho state
    // componentDidMount()
    useEffect(() => {
        let fetchData = () => getApiDetail();
        fetchData()
    }, [params.id]);


    return (
        <div className='detail-page'>
            <div className='intro-movie row'>
                <div className='col-4 logoImg' style={{ backgroundImage: `url("${detailMovie.hinhAnh}")` }}>
                    {/* <img style={{ height: "50%" }} src={detailMovie.hinhAnh} alt={detailMovie.biDanh} /> */}
                </div>
                <div className='col-8 content'>
                    <h2 className='movie-name mb-4'>{detailMovie.tenPhim ? detailMovie.tenPhim.toUpperCase() : ""}</h2>
                    <div className='movie-summary'>
                        <div>
                            <span className='title'>Ngày khởi chiếu: </span>
                            <span className='text'>
                                {
                                    detailMovie.ngayKhoiChieu ?
                                        detailMovie.ngayKhoiChieu.slice(8, 10) + "/" + detailMovie.ngayKhoiChieu.slice(5, 7) + "/" + detailMovie.ngayKhoiChieu.slice(0, 4) :
                                        ""
                                }
                            </span>
                        </div>
                        <div>
                            <span className='title'>Rating: </span>
                            <span className='text'>{detailMovie.danhGia}</span>
                        </div>
                        <div>
                            <span className='title'>Mô tả: </span>
                            <span className='text'>{detailMovie.moTa}</span>
                        </div>
                    </div>
                    <button>Mua vé ngay</button>
                </div>
            </div>

            <div className='table-cinema'>
                <Tabs
                    tabPosition="left"
                    items={
                        detailMovie.heThongRapChieu ? detailMovie.heThongRapChieu.map((element, index) => {
                            return {
                                label: <AvaCinema alt={element.maHeThongRap} src={element.logo} />,
                                key: index + 1,
                                children: <TableCinemaDetail cumRapChieu={element.cumRapChieu} />
                            }
                        }) : []
                    }
                />
            </div>
        </div>
    )
}
