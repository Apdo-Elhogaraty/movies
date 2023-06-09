import axios from "axios"
import { AllMovies, MovieApi } from "../types/moviesType"

export const getAllMovie = ()=>{

  return async(dispatch) => {
    const res = await axios.get(MovieApi)
    dispatch({
      type:AllMovies,
      data:res.data.results,
      pages: res.data.total_pages
    })
  }
}
export const getMovieSearch = (word)=>{

  return async(dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ca964f0ef1e6be810a35a22d8fbbe22d&query=${word}`)
    dispatch({
      type:AllMovies,
      data:res.data.results,
      pages: res.data.total_pages
    })
  }
}

export const getPage = (page)=>{
  return async(dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ca964f0ef1e6be810a35a22d8fbbe22d&page=${page}`)
    dispatch({
      type:AllMovies,
      data:res.data.results,
      pages: res.data.total_pages
    })
  }  
}