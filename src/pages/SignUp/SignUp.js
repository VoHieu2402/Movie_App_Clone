import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { postAPI } from '../../service/mainService';
import { urlPostSignUp } from '../../utils/ConfigAPI/QuanLyNguoiDung/quanLyNguoiDung';


export default function SignUp() {
    const navigate = useNavigate();

    // Set some states
    let [taiKhoan, setTaiKhoan] = useState("");
    let [hoTen, setHoTen] = useState("");
    let [email, setEmail] = useState("");
    let [phoneNumber, setPhoneNumber] = useState("");
    let [matKhauCf, setMatKhauCf] = useState("");
    let [matKhau, setMatKhau] = useState("");

    // Write some functions to handle change in inputs
    const handleChangeTaiKhoan = (event) => {
        setTaiKhoan(event.target.value);
    }
    const handleChangeHoTen = (event) => {
        setHoTen(event.target.value);
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }
    const handleChangeMatKhau = (event) => {
        setMatKhau(event.target.value);
    }
    const handleChangeMatKhauCf = (event) => {
        setMatKhauCf(event.target.value);
    }

    // function to handle the button submit
    const handleSignUp = () => {
        let fetchData = async () => {
            try {
                let result = await postAPI(urlPostSignUp, {
                    "taiKhoan": taiKhoan,
                    "matKhau": matKhau,
                    "email": email,
                    "soDt": phoneNumber,
                    "maNhom": "gp01",
                    "maLoaiNguoiDung": "string",
                    "hoTen": hoTen
                })
                // show modal to inform successful signup
                showModalSuccess();
            } catch (error) {
                // show warning
                setModalText(error.response.data);
                showModal();
            }
        };
        if (taiKhoan && matKhau && hoTen && email && phoneNumber && matKhauCf) {
            if (matKhau == matKhauCf) {
                fetchData();
            } else {
                // show warning
                setModalText("M???t kh???u nh???p l???i kh??ng kh???p");
                showModal();
            }
        } else {
            // show warning
            setModalText("Vui l??ng ??i???n d??? li???u");
            showModal();
        }
    }

    // handle the warning modal
    const [open, setOpen] = useState(false);
    const [modalText, setModalText] = useState('');
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
    };

    // handle the success modal
    const [openSuccess, setOpenSuccess] = useState(false);
    const showModalSuccess = () => {
        setOpenSuccess(true);
    };
    const handleOkSuccess = async () => {
        const result = await setOpenSuccess(false);
        navigate("/login")
    };

    return (
        <div style={{ border: '1px solid #ccc' }} className="sign-in-form">
            <div className="container">
                <h3>????NG K??</h3>
                <hr />
                <div className='info row'>
                    <div className='userName col-6'>
                        <label htmlFor="userName"><b>T??i kho???n</b></label>
                        <input type="text" name="userName" value={taiKhoan} onChange={(event) => handleChangeTaiKhoan(event)} required />
                    </div>
                    <div className='fullName col-6'>
                        <label htmlFor="fullName"><b>H??? t??n</b></label>
                        <input type="text" name="fullName" value={hoTen} onChange={(event) => handleChangeHoTen(event)} required />
                    </div>
                </div>
                <div className='contact row'>
                    <div className='email col-6'>
                        <label htmlFor="text"><b>Email</b></label>
                        <input type="text" name="text" value={email} onChange={(event) => handleChangeEmail(event)} required />
                    </div>
                    <div className='phoneNumber col-6'>
                        <label htmlFor="phoneNumber"><b>S??? ??i???n tho???i</b></label>
                        <input type="text" name="phoneNumber" value={phoneNumber} onChange={(event) => handleChangePhoneNumber(event)} required />
                    </div>
                </div>
                <div className='psw row'>
                    <div className='input-psw col-6'>
                        <label htmlFor="psw"><b>M???t kh???u</b></label>
                        <input type="password" name="input-psw" value={matKhau} onChange={(event) => handleChangeMatKhau(event)} required />
                    </div>
                    <div className='confirm-psw col-6'>
                        <label htmlFor="confirm-psw"><b>Nh???p l???i m???t kh???u</b></label>
                        <input type="password" name="confirm-psw" value={matKhauCf} onChange={(event) => handleChangeMatKhauCf(event)} required />
                    </div>
                </div>
                <div className="clearfix text-center">
                    <button className="signupbtn" onClick={() => handleSignUp()}>????NG K??</button>
                </div>
                <Modal
                    open={open}
                    onOk={handleOk}
                >
                    <p>{modalText}</p>
                </Modal>
                <Modal
                    open={openSuccess}
                    onOk={handleOkSuccess}
                >
                    <p>CH??C M???NG B???N ???? ????NG K?? TH??NH C??NG</p>
                </Modal>
            </div>
        </div>
    )
}
