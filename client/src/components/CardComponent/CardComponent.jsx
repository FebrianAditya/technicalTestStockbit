import React from "react"
import { Card } from "antd"
import { useSelector } from "react-redux"
const { Meta } = Card

const CardComponent = () => {
    const dataImage = useSelector(state => state.detailImage)

    return (
        <>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="img" src={dataImage.Poster} />}
            >
                <Meta title={dataImage.Title} description="http://www.omdbapi.com" />
            </Card>
        </>
    )
}

export default CardComponent