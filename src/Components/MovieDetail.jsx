function MovieDetail(props) {
    return (
      <div class="movie-detail">
        <span id="movie-title">{props.title}</span>
        <span id="movie-overview">{props.overview}</span>
      </div>
    );
  }
  
  export default MovieDetail;