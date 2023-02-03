import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Table } from 'antd';
import CinemaBranchCard from './CinemaBranchCard';
import CinemaShowTime from './CinemaShowTime';


export default function TableCinema(props) {
    // Xử lý dữ liệu cho table cinema branch
    let dataBranches = useSelector(state => state.CinemaBranchReducer.lstBranches);

    let i = 0;
    let lstCumRap = []
    let logo = "";
    let maHeThong = props.maHeThong;
    while (i < dataBranches.length) {
        if (dataBranches[i].maHeThongRap == maHeThong) {
            lstCumRap = dataBranches[i].lstCumRap;
            logo = dataBranches[i].logo;
            break;
        }
        i = i + 1;
    }

    // Xử lý dữ liệu cho table lịch chiếu phim
    let [lichChieu, setLichChieu] = useState(<></>)
    let changeTable = (danhSachPhim) => {
        setLichChieu(<CinemaShowTime lstFilm={danhSachPhim} />)
    }

    useEffect(() => {
        let renderFirstLichChieu = () => {
            if (lstCumRap.length > 0) {
                setLichChieu(<CinemaShowTime lstFilm={lstCumRap[0].danhSachPhim} />)
            } else {
                console.log("có lỗi")
            }
        };
        renderFirstLichChieu();
    }, [])

    const columnsBranch = [
        {
            title: 'HỆ THỐNG RẠP',
            dataIndex: 'heThongRap',
            width: 150,
        },
    ];

    const dataBranch = [];

    const columnsFilm = [
        {
            title: 'LỊCH CHIẾU',
            dataIndex: 'lichChieu',
            width: 150,
        },
    ];

    const dataFilm = [{
        key: 1,
        lichChieu: lichChieu
    }];




    lstCumRap.map((element, index) => {
        let branch = {
            key: index + 1,
            heThongRap: <CinemaBranchCard maHeThong={props.maHeThong} order={index + 1} onClick={() => changeTable(element.danhSachPhim)} avatar={logo} title={element.tenCumRap} description={element.diaChi} />
        };
        dataBranch.push(branch);
    })

    return (
        <div className='tableContent row'>
            <Table
                columns={columnsBranch}
                dataSource={dataBranch}
                scroll={{
                    y: 240,
                }}
                className="col-4 cinemaBranch"
            />
            <Table
                columns={columnsFilm}
                dataSource={dataFilm}
                scroll={{
                    y: 240,
                }}
                className="col-8 cinemaShowTime"
            />
        </div>
    )
}
