import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataMovie } from "../../store/action"

const TableComponent = () => {
    const dataMovies = useSelector(state => state.dataMovies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataMovie())
    }, [])

    return (
        <>
            { JSON.stringify(dataMovies) }
        </>
    )
}

export default TableComponent