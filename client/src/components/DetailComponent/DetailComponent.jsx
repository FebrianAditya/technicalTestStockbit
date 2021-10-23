import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setDetailMoviePage } from "../../store/action"
import { Descriptions, Layout } from "antd"
const { Content } = Layout

const DetailComponent = () => {
    const detailMovie = useSelector((state) => state.detailMovie)
    const { idMovie } = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setDetailMoviePage(idMovie))
    }, [])

    return (
        <>
            {/* {JSON.stringify(detailMovie)} */}
            { console.log(detailMovie) }
            <div>
            <Content style={{ padding: '100px 200px' }}>
                <Descriptions
                    bordered
                    title={detailMovie.Title}
                >
                    <Descriptions.Item
                        label="Genre :"
                    >
                        {detailMovie.Genre}
                    </Descriptions.Item>
                    <Descriptions.Item
                        label="Released :"
                    >
                        {detailMovie.Released}
                    </Descriptions.Item>
                    <Descriptions.Item
                        label="Country :"
                    >
                        {detailMovie.Country}
                    </Descriptions.Item>
                    <Descriptions.Item
                        label="Runtime :"
                    >
                        {detailMovie.Runtime}
                    </Descriptions.Item>
                    <Descriptions.Item
                        label="Type :"
                    >
                        {detailMovie.Type}
                    </Descriptions.Item>
                    <Descriptions.Item
                        label="Director :"
                    >
                        {detailMovie.Director}
                    </Descriptions.Item>
                    <Descriptions.Item
                        label="Plot :"
                    >
                        {detailMovie.Plot}
                    </Descriptions.Item>
                </Descriptions>
                </Content>
            </div>
        </>
    )
}

export default DetailComponent