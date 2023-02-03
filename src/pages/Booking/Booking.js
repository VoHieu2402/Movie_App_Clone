import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./booking.scss";
import { getLocalStorageIntoJSON } from '../../utils/mixin';
import { Modal } from 'antd';
import { addCart } from '../../redux/reducers/BookingReducer';
import { useDispatch } from 'react-redux';
import { getAPI } from '../../service/mainService';
import { urlPhongVe } from '../../utils/ConfigAPI/QuanLyDatVe/quanLyDatVe';


export default function Booking() {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const localStorage = getLocalStorageIntoJSON("Current User")

    const [seatSelected, setSeatSelected] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("Online Banking");

    const num_seats_row = ["1", "2", "3", "4", "5", "6", "7", "8"]
    const changeSelect = (event) => {
        if (event.target.className == "seat selected") {
            event.target.className = "seat";
            setSeatSelected(seatSelected.filter(element => element != event.target.title));
        } else if (event.target.className == "seat") {
            if (seatSelected.length <= 4) {
                event.target.className = "seat selected";
                setSeatSelected([...seatSelected, event.target.title]);
            } else {
                Modal.warning({
                    title: 'Chỉ được đặt tối đa 05 ghế',
                    content: 'Bạn có thể dùng tài khoản khác để đặt thêm ghế',
                });
            }
        } else {
            event.target.className = "seat occupied";
        }
    }

    const [ticketInfo, setTicketInfo] = useState({})
    const getApiDetail = async () => {
        try {
            const apiChiTiet = await getAPI(urlPhongVe + params.maLichChieu)
            setTicketInfo(apiChiTiet.data.thongTinPhim);
        } catch (error) {
            console.log(error)
        }
    }

    // gọi api trả dữ liệu cho state
    // componentDidMount()
    useEffect(() => {
        getApiDetail()
    }, [params.maLichChieu]);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
    }
    )
    return (
        <div className='booking-page row'>
            <div className="movie-theatre-container col-7 border p-3">
                <div className='movie-theatre'>
                    <div className='title-movie'>
                        <p id="movie">
                            {Object.keys(ticketInfo).length != 0 ? ticketInfo.tenPhim.toUpperCase() : ""}
                        </p>
                    </div>
                    <ul className="showcase">
                        <li>
                            <div className="seat" />
                            <small>Còn trống</small>
                        </li>
                        <li>
                            <div className="seat selected" />
                            <small>Đang chọn</small>
                        </li>
                        <li>
                            <div className="seat occupied" />
                            <small>Không thể chọn</small>
                        </li>
                    </ul>
                    <div className="container">
                        <div className="screen" />
                        <div className="row">
                            {
                                num_seats_row.map((element, index) => {
                                    return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat" title={"A" + element} />
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                num_seats_row.map((element, index) => {
                                    if (index == 3 || index == 4) {
                                        return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat occupied" title={"B" + element} />
                                    } else {
                                        return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat" title={"B" + element} />
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                num_seats_row.map((element, index) => {
                                    if ([6, 7].includes(index)) {
                                        return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat occupied" title={"C" + element} />
                                    } else {
                                        return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat" title={"C" + element} />
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                num_seats_row.map((element, index) => {
                                    if ([3, 4, 5, 6].includes(index)) {
                                        return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat occupied" title={"D" + element} />
                                    } else {
                                        return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat" title={"D" + element} />
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                num_seats_row.map((element, index) => {
                                    if ([2, 3].includes(index)) {
                                        return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat occupied" title={"E" + element} />
                                    } else {
                                        return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat" title={"E" + element} />
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                num_seats_row.map((element, index) => {
                                    if ([2, 3, 4, 6, 7].includes(index)) {
                                        return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat occupied" title={"F" + element} />
                                    } else {
                                        return <div onClick={(event) => changeSelect(event)} key={index + 1} className="seat" title={"F" + element} />
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='current-cart-container col-5 ps-5'>
                <div className='current-cart'>
                    <div className='header-cart text-center mb-5'><h2>THÔNG TIN ĐẶT VÉ</h2></div>
                    <div className='user-info row mb-4'>
                        <div className='userName row'>
                            <span className='title col-5'>Tên tài khoản:</span>
                            <span className='desc col-7'>{localStorage ? localStorage.taiKhoan : ""}</span>
                        </div>
                        <div className='fullName row'>
                            <span className='title col-5'>Họ tên:</span>
                            <span className='desc col-7'>{localStorage ? localStorage.hoTen : ""}</span>
                        </div>
                        <div className='phoneNum row'>
                            <span className='title col-5'>Số điện thoại:</span>
                            <span className='desc col-7'>{localStorage ? localStorage.soDT : ""}</span>
                        </div>
                        <div className='email row'>
                            <span className='title col-5'>Email:</span>
                            <span className='desc col-7'>{localStorage ? localStorage.email : ""}</span>
                        </div>
                    </div>
                    <div className='ticket-info'>
                        <div className='movieName row'>
                            <span className='title col-5'>Rạp:</span>
                            <span className='desc col-7'>{ticketInfo.tenCumRap}</span>
                        </div>
                        <div className='showTime row'>
                            <span className='title col-5'>Thời gian:</span>
                            <span className='desc col-7'>{ticketInfo.ngayChieu}, {ticketInfo.gioChieu}</span>
                        </div>
                        <div className='seating-info row'>
                            <span className='title col-5'>Ghế:</span>
                            <span className='desc col-7'>{
                                seatSelected && seatSelected.map((element, index) => {
                                    if (index == 0) {
                                        return (
                                            <span key={index + 1}>{element}</span>
                                        )
                                    } else {
                                        return (
                                            <span key={index + 1}>, {element}</span>
                                        )
                                    }
                                })
                            }</span>
                        </div>
                        <div className='totalPrice row'>
                            <span className='title col-5'>Tổng tiền: </span>
                            <span className='desc col-7'>{formatter.format(parseFloat(params.giaVe) * seatSelected.length)}</span>
                        </div>
                        <div className='paymentMethod row'>
                            <span className='title'>Phương thức thanh toán: </span>
                            <select defaultValue={"Online Banking"} className="form-select" aria-label="Default select example" onChange={(event) => {
                                setPaymentMethod(event.target.value)
                                console.log(event.target, event)
                            }}>
                                <option value={"Online Banking"}>Online Banking</option>
                                <option value={"Momo"}>Momo</option>
                                <option value={"ZaloPay"}>ZaloPay</option>
                                <option value={"COD"}>COD</option>
                            </select>
                        </div>
                    </div>
                    <div className='notice row mt-4'>
                        <h3>Lưu ý:</h3>
                        <div className='notice-content row'>
                            <span className='title col-1'>1. </span>
                            <span className='desc col-11'>Chỉ chọn tối đa 05 ghế</span>
                        </div>
                        <div className='notice-content row'>
                            <span className='title col-1'>2. </span>
                            <span className='desc col-11'>Với phương thức thanh toán COD, bạn sẽ nhận vé và thanh toán ngay tại quầy check-in</span>
                        </div>
                    </div>
                    <div className='btn-booking text-center mt-4'>
                        <button onClick={() => {
                            if (seatSelected.length > 0) {
                                Modal.info({
                                    title: 'Bạn đã đặt vé thành công !!!',
                                    onOk() {
                                        const payloadCart = {
                                            lstCart: {
                                                movieName: ticketInfo.tenPhim.toUpperCase(),
                                                movieTheatre: ticketInfo.tenCumRap,
                                                showingDate: ticketInfo.ngayChieu,
                                                showingTime: ticketInfo.gioChieu,
                                                selectedSeat: seatSelected,
                                                totalPrice: formatter.format(parseFloat(params.giaVe) * seatSelected.length),
                                                paymentMethodCart: paymentMethod
                                            },
                                            currentUser: localStorage.taiKhoan
                                        }
                                        let updateRedux = async () => dispatch(addCart(payloadCart));
                                        updateRedux().then(() => navigate("/"));
                                    },
                                });
                            } else {
                                Modal.warning({
                                    title: 'Bạn chưa chọn ghế',
                                    content: 'Vui lòng chọn ghế để tiến hành đặt vé',
                                });
                            }

                        }}>ĐẶT VÉ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
