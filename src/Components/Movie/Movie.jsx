import { MovieWrapper, MovieImg, MovieInfo, MovieTitle, MovieVoteAverage } from "./Movie.style";

function Movie(props) {
    const IMG_API = `https://image.tmdb.org/t/p/w500/${props.poster_path}`;
    return (
      <MovieWrapper>
        <MovieImg src={IMG_API} alt={props.title} />
        <MovieInfo>
            <MovieTitle>{props.title}</MovieTitle>
            <MovieVoteAverage>{props.vote_average}</MovieVoteAverage>
        </MovieInfo>
      </MovieWrapper>
    );
  }
  
  export default Movie;