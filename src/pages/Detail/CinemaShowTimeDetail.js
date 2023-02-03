import React from 'react';
import { Card } from 'antd';

export default function CinemaShowTimeDetail(props) {
    const lichChieuPhim = props.lichChieuPhim;
    return (
        <div className="row">
            {
                lichChieuPhim.map((element, index) => {
                    return (
                        <div key={index + 1} className="col-4 pe-2 pb-3">
                            <Card className='border'
                            >
                                <div className='row'>
                                    <span className='col-5'>Ngày: </span>
                                    <span className='col-7'>{
                                        element.ngayChieuGioChieu.slice(8, 10) + "/" + element.ngayChieuGioChieu.slice(5, 7) + "/" + element.ngayChieuGioChieu.slice(0, 4)
                                    }</span>
                                </div>
                                <div className='row'>
                                    <span className='col-5'>Giờ: </span>
                                    <span className='col-7'>{element.ngayChieuGioChieu.slice(11, 19)}</span>
                                </div>
                                <div className='row'>
                                    <span className='col-5'>Rạp: </span>
                                    <span className='col-7'>{element.tenRap}</span>
                                </div>
                                <div className='row'>
                                    <span className='col-5'>Giá vé: </span>
                                    <span className='col-7'>{element.giaVe}</span>
                                </div>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}
