import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const initialState = {
    dataMovies: [],
    detailImage: {},
    detailMovie: {},
    paramsApi: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA":
            let dataMoviesFromApi = action.payload.Search
            return {...state, dataMovies: dataMoviesFromApi}
        case "SET_IMAGE":
            return {...state, detailImage: action.payload}
        case "SET_DETAIL_MOVIE":
            return {...state, detailMovie: action.payload}
        case "SET_PARAMS":
            console.log(action.payload, "=> ???")
            return {...state, paramsApi: action.payload}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
