import React from 'react'
import Movie from './Movie/Movie'
import MovieDetail from './MovieDetail/MovieDetail'
import { movies } from "../movieDummy";

export default function Movies() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <div className="movie-block">
                <Movie
                title={item.title}
                vote_average={item.vote_average}
                poster_path={item.poster_path} />
                <MovieDetail
                  title={item.title}
                  overview={item.overview} /></div>
            )
          })
        }
      </div>
    </div>
  )
}
