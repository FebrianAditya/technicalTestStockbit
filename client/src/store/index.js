import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const initialState = {
    dataMovies: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA":
            // console.log(action.payload.Search, "==> ACTION");
            let dataMoviesFromApi = action.payload.Search
            return {...state, dataMovies: dataMoviesFromApi}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store
