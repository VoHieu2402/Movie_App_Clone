import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addBanner } from '../../../redux/reducers/HomeCarouselReducer';
import { Carousel } from 'antd';
import { getAPI } from '../../../service/mainService';
import { urlGetCarousel } from '../../../utils/ConfigAPI/QuanLyPhim/quanLyPhim';


export default function HomeCarousel(props) {
    let dataCarousel = useSelector(state => state.HomeCarouselReducer);
    let dispatch = useDispatch();

    useEffect(() => {
        let fetchData = async () => {
            try {
                const result = await getAPI(urlGetCarousel)
                dispatch(addBanner(result.data.content))
            } catch (error) {
                console.log("error: ", error);
            }
        };
        fetchData();
    }, [])


    return (
        <>
            <Carousel effect="fade" autoplay>
                {
                    dataCarousel.lstBanner && dataCarousel.lstBanner.map((element, index) => {
                        return (
                            <div key={index + 1}>

                                <img src={element.hinhAnh} alt="hình ảnh phim" style={props.contentStyle} />

                            </div>
                        )
                    })
                }
            </Carousel>
        </>
    )
}
