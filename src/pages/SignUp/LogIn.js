import React, { useState } from 'react';
import { setLocalStorageForObject } from '../../utils/mixin';

import { Modal } from 'antd';
import axios from 'axios';

import "./logIn.scss";
import { useNavigate } from 'react-router-dom';

import { postAPI } from '../../service/mainService';
import { urlPostLogIn } from '../../utils/ConfigAPI/QuanLyNguoiDung/quanLyNguoiDung';


export default function LogIn() {
    // declare function to navigate browser
    const navigate = useNavigate();

    // handle inputs
    let [taiKhoan, setTaiKhoan] = useState("");
    let [matKhau, setMatKhau] = useState("");
    const handleChangeTaiKhoan = (event) => {
        setTaiKhoan(event.target.value);
    }
    const handleChangeMatKhau = (event) => {
        setMatKhau(event.target.value);
    }
    const handleLogIn = () => {
        let fetchData = async () => {
            try {
                let result = await postAPI(urlPostLogIn, {
                    "taiKhoan": taiKhoan,
                    "matKhau": matKhau
                })
                setLocalStorageForObject("Current User", result.data);
                navigate("/")
            } catch (error) {
                // show warning
                setModalText(error.response.data);
                showModal();
            }
        };
        if (taiKhoan && matKhau) {
            fetchData();
        } else {
            // show warning
            setModalText("Vui lòng điền dữ liệu");
            showModal();
        }
    }

    // handle the warning modal
    const [open, setOpen] = useState(false);
    const [modalText, setModalText] = useState('');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = async () => {
        const result = await setOpen(false);
    };


    return (
        <div style={{ border: '1px solid #ccc' }} className="sign-in-form">
            <div className="container">
                <h3>ĐĂNG NHẬP</h3>
                <hr />
                <label htmlFor="userName"><b>Tài khoản</b></label>
                <input type="text" name="userName" value={taiKhoan} onChange={(event) => handleChangeTaiKhoan(event)} required />
                <label htmlFor="psw"><b>Mật khẩu</b></label>
                <input type="password" name="psw" value={matKhau} onChange={(event) => handleChangeMatKhau(event)} required />
                <div className="clearfix text-center">
                    <button className="signupbtn" onClick={() => handleLogIn()}>ĐĂNG NHẬP</button>
                </div>
                <Modal
                    open={open}
                    onOk={handleOk}
                >
                    <p>{modalText}</p>
                </Modal>
            </div>
        </div>
    )
}
