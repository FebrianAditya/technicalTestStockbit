
import axios from "axios"
require('dotenv').config()
const apikey = process.env.REACT_APP_API_KEY
const baseUrl = `http://www.omdbapi.com?apikey=${apikey}&s=Batman&page=2`

export function getDataMovie() {
    return(dispatch, setState) => {
        axios({
            method: "GET",
            url: baseUrl
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