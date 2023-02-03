import React, { useEffect, useState } from 'react';

import { Table } from 'antd';
import CinemaBranchCardDetail from './CinemaBranchCardDetail';
import CinemaShowTimeDetail from './CinemaShowTimeDetail';


export default function TableCinemaDetail(props) {
    let lstCumRap = props.cumRapChieu

    useEffect(() => {
    }, [])

    const columnsBranch = [
        {
            title: 'HỆ THỐNG RẠP',
            dataIndex: 'heThongRap',
            width: 150,
        },
    ];

    const dataBranch = [];

    // handle dataShowTime
    // Xử lý dữ liệu cho table lịch chiếu phim
    let [lichChieu, setLichChieu] = useState(<CinemaShowTimeDetail lichChieuPhim={lstCumRap[0].lichChieuPhim} />)
    let changeTable = (lichChieuPhim) => {
        setLichChieu(<CinemaShowTimeDetail lichChieuPhim={lichChieuPhim} />)
    }

    const columnsShowTime = [
        {
            title: 'LỊCH CHIẾU',
            dataIndex: 'lichChieu',
            width: 150,
        },
    ];

    const dataShowTime = [{
        key: 1,
        lichChieu: lichChieu
    }];

    // hanlde dataBranch
    lstCumRap.map((element, index) => {
        let branch = {
            key: index + 1,
            heThongRap: <CinemaBranchCardDetail onClick={() => changeTable(element.lichChieuPhim)} avatar={element.hinhAnh} title={element.tenCumRap} description={element.diaChi} />
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
                columns={columnsShowTime}
                dataSource={dataShowTime}
                scroll={{
                    y: 240,
                }}
                className="col-8 cinemaShowTime"
            />
        </div>
    )
}
