import React from "react";
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { HomeOutlined, BookOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const SideBarComponent = () => {

    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>  
                <Menu.Item key="about" icon={<BookOutlined />} disabled>
                    About
                </Menu.Item>
            </Menu>
        </>
    )
}

export default SideBarComponent