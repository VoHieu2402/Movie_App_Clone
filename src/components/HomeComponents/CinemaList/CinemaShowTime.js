import React from 'react';
import { Avatar } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getLocalStorageIntoJSON } from '../../../utils/mixin';

export default function CinemaShowTime(props) {
    const navigate = useNavigate();
    let styleShowTime = {
        "margin": "20px",
        "boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "borderRadius": "10px"
    }
    return (
        props.lstFilm.map((element, index) => {
            return (
                <div className='showTime' key={index + 1} style={styleShowTime}>
                    <div className='showingMovie ms-1 pt-2 row'>
                        <div className='col-2'>
                            <Avatar shape="square" size={64} icon={<img src={element.hinhAnh} alt={element.tenPhim} />} />
                        </div>
                        <div className='col-10'>
                            <h5 style={{ margin: "10px" }}>{element.tenPhim}</h5>
                        </div>
                    </div>
                    <div className='showingTime mt-3 ms-3 pb-3 row'>
                        {
                            element.lstLichChieuTheoPhim.map((lichChieu, indexLichChieu) => {
                                return (
                                    <div key={indexLichChieu + 1} className="col-2" style={{ padding: "5px" }}>
                                        <Button onClick={() => {
                                            getLocalStorageIntoJSON("Current User") ? navigate(`/booking/${lichChieu.maLichChieu}/${lichChieu.giaVe}`) : navigate("login")
                                        }}>{lichChieu.ngayChieuGioChieu.slice(11, 16)}</Button>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            )
        })
    )
}
