import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function AvaProfile(props) {
    const navigate = useNavigate();
    const items = [
        {
            key: '1',
            label: (<span onClick={() => {
                let updateLocalStorage = async () => {
                    localStorage.removeItem("Current User");
                    props.updateLocalStorage();
                };
                updateLocalStorage().then(() => navigate("/"))
            }}>Đăng xuất</span>),
        },
        {
            key: '2',
            label: (<span onClick={() => navigate("/my-profile")}>Thông tin cá nhân</span>),
        },
    ];
    return (
        <div className='avaProfile row'>
            <div className='col-4' style={{ borderRight: "solid 1px white" }}>
                <Avatar style={{ lineHeight: "18px", paddingRight: "0px" }} icon={<UserOutlined />} />
            </div>

            <span className='userName col-6'>{props.taiKhoan}</span>

            <Dropdown
                className='col-2'
                menu={{
                    items,
                }}
                placement="bottomLeft"
            >
                <span className='icon-sort-down'><i className="fa fa-sort-down text-white"></i></span>
            </Dropdown>

        </div>

    )
}
