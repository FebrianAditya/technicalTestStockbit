import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDetailMovie } from "../../store/action"
import { Table, Layout, Tooltip, Button } from "antd"
import { EyeOutlined } from "@ant-design/icons"
import { ModalComponent } from ".."
import { useHistory } from "react-router-dom"
import { SearchBoxComponent } from ".."

import 'antd/dist/antd.css';
const {Content} = Layout

const TableComponent = () => {
    const dataMovies = useSelector(state => state.dataMovies)
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const fromChildren = (paramVisible) => {
        setOpenModal(paramVisible)
    }

    const handleDetailMovie = (idMovie) => {
        dispatch(setDetailMovie(idMovie))
    }

    const handleAllDetailMovie = (idMovie) => {
        history.push(`/detail/${idMovie}`)
    }

    const columns = [
        {
            title: 'Title',
            dataIndex: 'Title',
            width: 150,
        },
        {
            title: 'Year',
            dataIndex: 'Year',
            width: 30,
        },
        {
            title: 'Type',
            dataIndex: 'Type',
            width: 30,
        },
        {
            title: 'Poster',
            dataIndex: 'Poster',
            width: 30,
            fixed: "right",
            render: (text, record) => (
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <Tooltip placement="top" title={"View"}>
                        <Button
                        type="text"
                        icon={<EyeOutlined />}
                        onClick={() => {
                            setOpenModal(true)
                            handleDetailMovie(record)
                        }}
                        />
                    </Tooltip>
                </div>
            )
        },
        {
            title: 'Action',
            dataIndex: 'imdbID',
            width: 50,
            fixed: "right",
            render: (text, record) => (
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <Tooltip placement="top" title={"View"}>
                        <Button
                            onClick={() => {
                                handleAllDetailMovie(record.imdbID)
                            }}
                        >
                            Detail
                        </Button>
                    </Tooltip>
                </div>
            )
        }
    ]

    return (
        <>
            {/* { JSON.stringify(dataMovies) } */}
            <Content style={{ padding: '100px 200px' }}>
                <SearchBoxComponent />
                <Table 
                    columns={columns} 
                    dataSource={dataMovies} 
                    scroll={{ y: 260 }}
                />
            </Content>          
           <ModalComponent 
                openModal={openModal}
                fromChildren={fromChildren}
           />
        </>
    )
}

export default TableComponent