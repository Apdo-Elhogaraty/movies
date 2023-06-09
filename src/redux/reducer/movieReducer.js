import { AllMovies } from "../types/moviesType"

const initialState = {movies :[] , pageCount:0}

export const Reducer = (state = initialState , action)=>{
  switch(action.type)
  {
    case AllMovies:
    return {movies: action.data, pageCount:action.pages}

    // case AllMovies:
    // return {movies: action.data}

    default:
    return state
  }
}