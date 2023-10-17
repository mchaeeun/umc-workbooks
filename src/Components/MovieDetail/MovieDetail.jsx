import { MovieDetailOverview, MovieDetailTitle, MovieDetailWrapper } from "./MovieDetail.style";

function MovieDetail(props) {
    return (
      <MovieDetailWrapper>
        <MovieDetailTitle>{props.title}</MovieDetailTitle>
        <MovieDetailOverview>{props.overview}</MovieDetailOverview>
      </MovieDetailWrapper>
    );
  }
  
  export default MovieDetail;