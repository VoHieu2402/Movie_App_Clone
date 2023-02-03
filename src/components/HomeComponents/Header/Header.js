import React, { useRef, useEffect, useState } from 'react';
import { setLocalStorageForObject, getLocalStorageIntoJSON } from '../../../utils/mixin';

import logo from "../../../assets/img/blue_movie.png"

import "./header.scss";

import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import AvaProfile from './AvaProfile';


const headerNav = [
    {
        display: 'TRANG CHỦ',
        path: '/'
    },
    {
        display: 'TIN TỨC',
        path: '/'
    },
    {
        display: 'LIÊN HỆ',
        path: '/'
    }
];



export default function Header() {
    const localStorage = getLocalStorageIntoJSON("Current User");
    // set the state to refresh the page when local storage being removed
    const [change, setChange] = useState(false);
    // function to update the local storage
    const updateLocalStorage = () => {
        setChange(!change);
    }

    const { pathname } = useLocation();
    const navigate = useNavigate();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div className="header" ref={headerRef}>
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <NavLink to="/">WBMovies</NavLink>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <NavLink to={e.path}>
                                    {e.display}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <div className='btn-group-signin'>
                    {
                        localStorage ?
                            <AvaProfile taiKhoan={localStorage.taiKhoan} updateLocalStorage={() => updateLocalStorage()} />
                            :
                            <>
                                <button className="login-btn" onClick={() => { navigate("login") }}>Đăng Nhập</button>
                                <button className="login-btn" onClick={() => { navigate("signup") }}>Đăng Ký</button>
                            </>
                    }

                </div>
            </div>
        </div>
    )
}
