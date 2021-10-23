
import axios from "axios"
require('dotenv').config()
const apikey = process.env.REACT_APP_API_KEY
const baseUrl = `http://www.omdbapi.com?apikey=${apikey}`

export function getDataMovie(inputUserSearch) {
    return(dispatch, setState) => {
        axios({
            method: "GET",
            url: baseUrl + "&s=" + inputUserSearch + "&page=2"
        })
            .then(({data}) => {
                dispatch({
                    type: "GET_DATA",
                    payload: data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function setDetailMovie(payload) {
    return {
        type: "SET_IMAGE",
        payload
    }
}

export function setDetailMoviePage(id) {
    return(dispatch, setState) => {
        axios({
            method: "GET",
            url: baseUrl + "&i=" + id + "&s=&page=2"
        })
            .then(({data}) => {
                dispatch({
                    type: "SET_DETAIL_MOVIE",
                    payload: data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function setParams(payload) {
    console.log(payload, "=> ACTION")
    return {
        type: "SET_PARAMS",
        payload
    }
}