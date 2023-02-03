import React from 'react';

import './footer.scss';

import { NavLink } from 'react-router-dom';

import bg from "../../../assets/img/footer-bg.jpg";
import logo from '../../../assets/img/blue_movie.png';
import logoMomo from "../../../assets/img/logoMomo.png";
import logoZalopay from "../../../assets/img/logoZalopay.png";
import logoViettelpay from "../../../assets/img/logoViettelpay.png";
import logoCgv from "../../../assets/img/logoCgv.png";
import logoBdh from "../../../assets/img/logoBhd.png";
import logoLotte from "../../../assets/img/logoLotte.png";
import logoGalaxy from "../../../assets/img/logoGalaxy.jpg";
import logoMegags from "../../../assets/img/logoMegags.png";
import logoMegastar from "../../../assets/img/logoMegastar.png";

export default function Footer() {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <NavLink to="/">WBMovies</NavLink>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <NavLink to="/">TRANG CHỦ</NavLink>
                        <NavLink to="/news">TIN TỨC</NavLink>
                        <NavLink to="/contact">LIÊN HỆ</NavLink>
                    </div>
                    <div className="footer__content__menu">
                        <NavLink to="/">FAQ</NavLink>
                        <NavLink to="/">Điều khoản sử dụng</NavLink>
                    </div>
                    <div className="footer__content__menu">
                        <h4>Đối tác</h4>
                        <div className='lst-partners'>
                            <div className='row'>
                                <img src={logoBdh} alt="Logo BHD" className='ava-partners col-4' />
                                <img src={logoCgv} alt="Logo CGV" className='ava-partners col-4' />
                                <img src={logoLotte} alt="Logo LotteCinema" className='ava-partners col-4' />
                            </div>
                            <div className='row'>
                                <img src={logoMegags} alt="Logo Mega GS" className='ava-partners col-4' />
                                <img src={logoMegastar} alt="Logo MegaStar" className='ava-partners col-4' />
                                <img src={logoGalaxy} alt="Logo Galaxy Cinema" className='ava-partners col-4' />
                            </div>
                            <div className='row'>
                                <img src={logoMomo} alt="Logo MoMo" className='ava-partners col-4' />
                                <img src={logoZalopay} alt="Logo ZaloPay" className='ava-partners col-4' />
                                <img src={logoViettelpay} alt="Logo Viettelpay" className='ava-partners col-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
