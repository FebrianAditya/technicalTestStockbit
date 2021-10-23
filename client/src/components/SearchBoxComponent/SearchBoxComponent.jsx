import React, { useEffect } from "react";
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { getDataMovie } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import { setParams } from "../../store/action";
const { Search } = Input;

const SearchBoxComponent = () => {
    const paramsApi = useSelector(state => state.paramsApi)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataMovie(paramsApi))
    }, [paramsApi])

    const onSearch = (value) => {
        dispatch(setParams(value))
    }
    
    return (
        <>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 280, marginBottom: "30px" }} />
        </>
    )
} 

export default SearchBoxComponent