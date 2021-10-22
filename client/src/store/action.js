import axios from "axios"
const baseUrl = "http://www.omdbapi.com?apikey=faf7e5bb&s=Batman&page=2"

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