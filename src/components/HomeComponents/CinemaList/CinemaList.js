import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBranches } from '../../../redux/reducers/CinemaBranchReducer';

import "./cinemaList.scss"
import { Tabs } from 'antd';
import AvaCinema from './AvaCinema';

import logoCgv from "../../../assets/img/logoCgv.png";
import logoBhd from "../../../assets/img/logoBhd.png";
import logoLotte from "../../../assets/img/logoLotte.png";
import logoGalaxy from "../../../assets/img/logoGalaxy.jpg";
import logoMegags from "../../../assets/img/logoMegags.png";
import logoMegastar from "../../../assets/img/logoMegastar.png";
import TableCinema from './TableCinema';
import { getAPI } from '../../../service/mainService';
import { urlGetCinemaList } from '../../../utils/ConfigAPI/QuanLyRap/quanLyRap';

export default function CinemaList() {
    let dispatch = useDispatch();

    useEffect(() => {
        let fetchData = async () => {
            try {
                let result = await getAPI(urlGetCinemaList)
                dispatch(addBranches(result.data))

            } catch (error) {
                console.log("error: ", error);
            }
        };
        fetchData();
    }, [])

    const items = [
        {
            label: <AvaCinema alt="CGV" src={logoCgv} />, key: "1", content: <TableCinema maHeThong="CGV" />
        },
        {
            label: <AvaCinema alt="BHD" src={logoBhd} />, key: "2", content: <TableCinema maHeThong="BHDStar" />
        },
        {
            label: <AvaCinema alt="GALAXY" src={logoGalaxy} />, key: "3", content: <TableCinema maHeThong="Galaxy" />
        },
        {
            label: <AvaCinema alt="MEGA_GS" src={logoMegags} />, key: "4", content: <TableCinema maHeThong="MegaGS" />
        },
        {
            label: <AvaCinema alt="CNS" src={logoMegastar} />, key: "5", content: <TableCinema maHeThong="CineStar" />
        },
        {
            label: <AvaCinema alt="LOTTE" src={logoLotte} />, key: "6", content: <TableCinema maHeThong="LotteCinima" />
        },

    ]
    return (
        <div className='cinema-list container'>
            <Tabs
                tabPosition="left"
                items={items.map((element, index) => {
                    return {
                        label: element.label,
                        key: element.key,
                        children: element.content,
                    }
                })}
            />
        </div>
    )
}
