import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { getLocalStorageIntoJSON } from '../../utils/mixin';
import "./personalProfile.scss";
import { useSelector } from 'react-redux';

export default function PersonalProfile() {
    const dataRedux = useSelector(state => state.BookingReducer);
    const localStorage = getLocalStorageIntoJSON("Current User");
    const [items, setItems] = useState(
        [
            {
                label: "THÔNG TIN CÁ NHÂN", key: "1", children:
                    <div className='user-info row mb-4 text-white border p-4'>
                        <div className='userName row mb-3'>
                            <span className='title col-5'>Tên tài khoản:</span>
                            <span className='desc col-7'>{localStorage ? localStorage.taiKhoan : ""}</span>
                        </div>
                        <div className='fullName row mb-3'>
                            <span className='title col-5'>Họ tên:</span>
                            <span className='desc col-7'>{localStorage ? localStorage.hoTen : ""}</span>
                        </div>
                        <div className='phoneNum row mb-3'>
                            <span className='title col-5'>Số điện thoại:</span>
                            <span className='desc col-7'>{localStorage ? localStorage.soDT : ""}</span>
                        </div>
                        <div className='email row mb-3'>
                            <span className='title col-5'>Email:</span>
                            <span className='desc col-7'>{localStorage ? localStorage.email : ""}</span>
                        </div>
                    </div>
            },
            {
                label: "LỊCH SỬ MUA VÉ", key: "2", children: ""
            }
        ]
    )

    useEffect(() => {
        const myBooking = []
        const fetchMyBooking = async () => dataRedux.dataBooking.map((element, index) => {
            if (element.currentUser == localStorage.taiKhoan) {
                myBooking.push(element);
            }
        })
        fetchMyBooking().then(() => {
            if (myBooking.length > 0) {
                console.log("mybooking:", myBooking)
                setItems([
                    {
                        label: "THÔNG TIN CÁ NHÂN", key: "1", children:
                            <div className='user-info row mb-4 text-white border p-4'>
                                <div className='userName row mb-3'>
                                    <span className='title col-5'>Tên tài khoản:</span>
                                    <span className='desc col-7'>{localStorage ? localStorage.taiKhoan : ""}</span>
                                </div>
                                <div className='fullName row mb-3'>
                                    <span className='title col-5'>Họ tên:</span>
                                    <span className='desc col-7'>{localStorage ? localStorage.hoTen : ""}</span>
                                </div>
                                <div className='phoneNum row mb-3'>
                                    <span className='title col-5'>Số điện thoại:</span>
                                    <span className='desc col-7'>{localStorage ? localStorage.soDT : ""}</span>
                                </div>
                                <div className='email row mb-3'>
                                    <span className='title col-5'>Email:</span>
                                    <span className='desc col-7'>{localStorage ? localStorage.email : ""}</span>
                                </div>
                            </div>
                    },
                    {
                        label: "LỊCH SỬ MUA VÉ", key: "2", children:
                            myBooking.map((element, index) => {
                                return (
                                    <div key={index + 1} className='myCart mb-4 border text-white p-4'>
                                        <div className='movieName mb-3 row'>
                                            <span className='col-3 title'>TÊN PHIM:</span>
                                            <span className='col-9 desc'>{element.lstCart.movieName}</span>
                                        </div>
                                        <div className='movieTheatre mb-3 row'>
                                            <span className='col-3 title'>RẠP:</span>
                                            <span className='col-9 desc'>{element.lstCart.movieTheatre}</span>
                                        </div>
                                        <div className='infoTicket mb-3 row'>
                                            <div className='showingDate col-3 row'>
                                                <span className='col-4 title'>Ngày:</span>
                                                <span className='col-8 desc'>{element.lstCart.showingDate}</span>
                                            </div>
                                            <div className='showingTime col-3 row'>
                                                <span className='col-4 title'>Giờ:</span>
                                                <span className='col-8 desc'>{element.lstCart.showingTime}</span>
                                            </div>
                                            <div className='selectedSeat col-3 row'>
                                                <span className='col-4 title'>Ghế:</span>
                                                <span className='col-8 desc'>{element.lstCart.selectedSeat.map((seat, seatIndex) => {
                                                    if (seatIndex == 0) {
                                                        return (
                                                            <span key={seatIndex + 1}>{seat}</span>
                                                        )
                                                    } else
                                                        return (
                                                            <span key={seatIndex + 1}>, {seat}</span>
                                                        )
                                                })}</span>
                                            </div>
                                            <div className='totalPrice col-3 row'>
                                                <span className='col-6 title'>Tổng tiền:</span>
                                                <span className='col-6 desc'>{element.lstCart.totalPrice}</span>
                                            </div>
                                            <div className='paymentMethod col-6 row mt-4'>
                                                <span className='title col-6'>Phương thức thanh toán:</span>
                                                <span className='desc col-6'>{element.lstCart.paymentMethodCart}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                    }
                ])
            }
        })
    }, [])

    return (
        <div className='myProfile'>
            <Tabs
                type="card"
                size="small"
                items={items}
            />
        </div>
    )
}
